import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import {writeJson, readJson, validateId} from './utils/utils.js'
import * as sql_queries from "./utils/sql_queries.js";
import pool from './utils/db.js';

dotenv.config()

const port = process.env.PORT || 5000
const allowedOrigins = process.env.ALLOWED_ORIGINS 
? process.env.ALLOWED_ORIGINS.split(',') : [];


// console.log("ALLOWED_ORIGINS raw =", process.env.ALLOWED_ORIGINS);
console.log("allowedOrigins =", allowedOrigins);


console.log(port);

const app = express();

// middlewares
app.use(cors({
     origin: (origin, callback) => {
          console.log("Request Origin =", origin);
          console.log("Allowed =", allowedOrigins);

          if (!origin || allowedOrigins.includes(origin)) {
               callback(null, true);
          } else {
               callback(new Error("Not allowed by CORS"));
          }

     },
     credentials: true,
     methods: ['GET','POST', "PUT", 'DELETE'],

}));

app.use(express.json()); 

// [READ] GET: fetch all the blogs
app.get('/api/blogs', async (req, res) => {
     try {
          const result = await pool.query(sql_queries.GET_ALL_BLOGS);
          res.json(result.rows);
     } catch (err) {
          console.error("GET /api/blogs error:", err);
          res.status(500).json({
               error: err.message}
          )
     }
})

// [READ] GET: fetch single the blogs by blog id
app.get('/api/blogs/:id', async (req, res) => {
     const reqId = parseInt(req.params.id);
     if(!validateId(reqId, res)) return;
     try {
          // const idx = blogsData.findIndex(blog => blog.id === reqId);
          const result = await pool.query(sql_queries.GET_SINGLE_BLOG, [reqId])
          if (result.rows.length === 0) {
               res.status(404).json({
                    error: "BlogNotFound",
                    message: "The blog you are looking for is not found."
               });
          }

          res.json(result.rows[0]);
     } catch (err) {
          res.status(500).json({
               error: err.message}
          )
     }

})


// [CREATE] POST: add new blog
// add to DB and also update to the front
app.post('/api/blogs', async (req, res) => {
     const { title, summary, content, category, tags, cover_image_url, create_at } = req.body;
     const client = await pool.connect();

     try {
          await client.query('BEGIN');

          // add to categories table
          const catRes = await client.query(sql_queries.INSERT_INTO_CATEGORIES, [category || 'uncategoried'])
          const categoryId = catRes.rows[0].id;

          // add to posts table
          const postRes = await client.query(sql_queries.POST_BLOG,
               [title, summary, content, cover_image_url, create_at, categoryId]
          )
          const postId = postRes.rows[0].id

          // add to tags table
          for (const tagName of tags) {
            const tagRes = await client.query(sql_queries.INSERT_INTO_TAGS, [tagName])
            const tagId = tagRes.rows[0].id;

            await client.query(sql_queries.INSERT_INTO_TAGS_POSTS,[tagId, postId])
          }

          await client.query('COMMIT');

          res.status(201).json({ 
               message: "Post created successfully", 
               postId: postId 
          });

          console.log(`Post "${title}" has been added to 4 tables`);

     } catch(err) {
          await client.query('ROLLBACK');
          res.status(500).json({
               error: err.message
          });
     } finally {
          client.release();
     }

})

// [UPDATE] PUT: update blogs
app.put('/api/blogs/:id', async (req, res) => {
     const reqIdx = parseInt(req.params.id);
     if(!validateId(reqIdx, res)) return;

     const { title, summary, content, category, tags, cover_image_url } = req.body;
     const client = await pool.connect();

     let categoryId = null;
     try {
          await client.query('BEGIN');

          // 1. update  categories table
          if (category) {
               const catRes = await client.query(sql_queries.INSERT_INTO_CATEGORIES, [category]);

               categoryId = catRes.rows[0].id;
          }

          // 2. update posts table
          const updatePostQuery = sql_queries.UPDATE_POST;
          
               const postRes = await client.query(updatePostQuery, [
                    title, summary, content, cover_image_url, categoryId, reqIdx
               ]);

          if (postRes.rowCount === 0) {
               await client.query('ROLLBACK');
               return res.status(404).json({ error: "BlogNotFound", message: "Blog not found." });
          }

          // 3. update tags
          if (tags && Array.isArray(tags)) {

               // delete previous tags 
               await client.query(sql_queries.DELETE_TAGS, [reqIdx]
               )
               
               // add new tags.
               for (const tagName of tags) {
                const tagRes = await client.query(sql_queries.INSERT_INTO_TAGS, [tagName]
                );
                const tagId = tagRes.rows[0].id;

                await client.query(sql_queries.INSERT_INTO_TAGS_POSTS,
                    [tagId, reqIdx]
                );
               }
          }
          await client.query('COMMIT');
          res.json({ message: "Post updated successfully", post: postRes.rows[0] });

     } catch (err) {
          await client.query('ROLLBACK');
          res.status(500).json({
               error: err.message
          });
     } finally {
          client.release();
     }
});


// [DELETE] DELETE:  blogs
app.delete('/api/blogs/:id', async (req, res) =>{
     const reqIdx = parseInt(req.params.id);
     if(!validateId(reqIdx, res)) return;

     try{
          const result = await pool.query(sql_queries.DELETE_POSTS, [reqIdx]);
          
          if (result.rowCount !== 0) {
               res.json({
                    message: "Blog deleted successfully",
                    deletedBlog: result.rows[0]
               });
          } else {
               res.status(404).json({
                    error: "BlogNotFound",
                    message: "The blog you are looking for is not found."
               });
          }
     } catch(err) {
          res.status(500).json({
               error: err.message
          });
     }
     
});


app.listen(port, ()=> {
    console.log(`API server listening on port ${port}`);
})
