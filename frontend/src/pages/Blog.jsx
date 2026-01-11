import React from 'react';
import { useEffect, useState } from 'react';
import './blog.css';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // call backend for the blogs.
    fetch('http://localhost:5001/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="blog-container">
      <h1>Welcome to my corner to document how I reached here over the years...</h1>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.summary}</p>
            <div className="tags">
              {blog.tags && blog.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;