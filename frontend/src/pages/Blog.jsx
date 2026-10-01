import { Link } from 'react-router-dom';
import { blogs, formatBlogDate } from '../data/blogs';
import './blog.css';

const Blog = () => (
  <div className="blog-container">
    <div className="blog-header">
      <h1>Note from building</h1>
      <h3>What I’m learning about software, one project and problem at a time.</h3>
    </div>
    <div className="blog-grid">
      {blogs.length === 0 && <p>No posts yet. Check back soon!</p>}
      {blogs.map(blog => (
        <Link key={blog.slug} to={`/blogs/${blog.slug}`} className="blog-link">
          <article className="blog-card">
            <h2>{blog.title}</h2>
            <p><time dateTime={blog.date}>{formatBlogDate(blog.date)}</time></p>
            <p>{blog.summary}</p>
            <div className="tags">
              {blog.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </article>
        </Link>
      ))}
    </div>
  </div>
);

export default Blog;
