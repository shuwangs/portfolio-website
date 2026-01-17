import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import pool from './db.js';
import * as sql_queries from './utils/sql_queries.js';
const toNullIfEmpty = (params) => {
    if (!params || params.trim() ==="") return null;
    if (typeof value !== "string") {
        return String(value);
    }
    return params.trim();  

}

const insertPostToDB = async (filePath) =>{
    const { data, content } = matter.read(filePath) 

    const coverImageUrl =
        data.cover_image_url && data.cover_image_url.trim() !== ""
            ? data.cover_image_url
            : null;

    const postData = {
        title: data.title,
        slug: data.slug,
        summary: data.summary,
        content: content,
        cover_image_url: coverImageUrl,
        tags: data.tags ?? [],
        category: data.category ?? null,
        create_at: data.date
    }

    // connect to DB
    const client = await pool.connect();

    try{
        // Transaction BEGIN 
        await client.query("BEGIN");

        // INSERT categories table
        const categoryRes = await client.query(sql_queries.INSERT_INTO_CATEGORIES, [postData.category]);

        // console.log(categoryRes);

        const categoryId = categoryRes.rows[0].id;

        // INSERT posts table
        const postRes = await client.query(sql_queries.POST_BLOG,
            [postData.title, postData.summary, postData.content, postData.cover_image_url, postData.create_at, categoryId]
        );
        const postId = postRes.rows[0].id

        // INSERT tags table
        for (const tagName of postData.tags) {
            const tagRes = await client.query(sql_queries.INSERT_INTO_TAGS,[tagName])
            const tagId = tagRes.rows[0].id;

            await client.query(sql_queries.INSERT_INTO_TAGS_POSTS
                ,
                [tagId, postId]
            )
        }


        await client.query('commit');
        console.log(`POST ${postData.title} saved sucessfully!`);

    } catch(error) {
        await client.query('ROLLBACK');
        console.log("error message: ", error.message);
    } finally {
        client.release();
    }

};

// Get all the posts in the folder
const getAllPost = () => {
    const postPath = "./posts_md";
    const files = fs.readdirSync(postPath);
    return (files.map(file => `${postPath}/${file}`)) ;
}
console.log(getAllPost());

getAllPost().map(post => {
    insertPostToDB(post)
    .then(()=>{
        console.log(`${post} is saved successfully.`);
        process.exit();
    })
    .catch(err=>{
        console.error(err);
        process.exit(1);
    })
})