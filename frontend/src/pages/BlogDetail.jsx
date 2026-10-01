import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogs, formatBlogDate } from '../data/blogs';
import './blog.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogs.find(blog => blog.slug === slug);

  if (!post) return (
    <section className="blog-post">
      <h1>Post not found</h1>
      <p>This article may have moved or is no longer available.</p>
      <Link to="/blog">← Back to Blog List</Link>
    </section>
  );

  return (
    <article className="blog-post">
      <header>
        <Link to="/blog">← Back to Blog List</Link>
        <h1>{post.title}</h1>
        <p className="meta">Published on <time dateTime={post.date}>{formatBlogDate(post.date)}</time></p>
      </header>
      <hr />
      <div className="content"><ReactMarkdown>{post.content}</ReactMarkdown></div>
    </article>
  );
};

export default BlogDetail;
