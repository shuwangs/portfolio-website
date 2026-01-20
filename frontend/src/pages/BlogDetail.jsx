import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const BlogDetail = () => {
    const { blogId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const loadPost = async () =>{
            try{
                const url = `${API_BASE}/api/blogs/${blogId}`;
                const res = await fetch(url);
                if(!res.ok) {
                    throw new Error("Post is not found");
                }
                const data = await res.json()
                setPost(data);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }

        };
        loadPost();

    }, [slug]);

    if(loading) return <p>Loading post...</p>
    if(error) return <p>Error: {error} <Link to ="/blog">Go back home</Link> </p>;
    if(!post) return null;

    return (
        <article className='blog-post'>
            <header>
                <Link to='/blog'>← Back to Blog List</Link>
                <h1>{post.title}</h1>
                <p className="meta">Published on {new Date(post.createdAt).toLocaleDateString()}</p>

            </header>
            <hr />
            <div className="content">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    )
}

export default BlogDetail;