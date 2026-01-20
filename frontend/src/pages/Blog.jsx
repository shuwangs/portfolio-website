import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './blog.css';


const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
      const API_BASE = import.meta.env.VITE_API_BASE_URL;
      console.log(API_BASE);

      // call backend for the blogs.
      fetch(`${API_BASE}/api/blogs`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setBlogs(data);
        })
        .catch(err => console.error("Fetch error:", err));
    }, []);

      useEffect(() => {
      const API_BASE = import.meta.env.VITE_API_BASE_URL;
      console.log(API_BASE);

      // call backend for the blogs.
      fetch(`${API_BASE}/api/blogs`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setBlogs(data);
        })
        .catch(err => console.error("Fetch error:", err));
    }, []);
  return (
    <div className="blog-container">
      <h1>Welcome to my corner to document how I reached here over the years...</h1>
      <div className="blog-grid">
        {blogs.map(blog => (
          <Link 
            key = {blog.id}
            to ={`/blogs/${blog.id}`}
            className='blog-link'
          >

            <div key={blog.id} className="blog-card">
              <h2>{blog.title}</h2>
              <p>{blog.summary}</p>
              <div className="tags">
                {blog.tags && blog.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;