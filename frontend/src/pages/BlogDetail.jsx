import { useParams, Link } from 'react-router-dom';
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogs, formatBlogDate, resolveBlogImage } from '../data/blogs';
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
      <div className="content"><ReactMarkdown remarkPlugins={[remarkGfm]} components={{
        table: ({ children }) => <div className="blog-table-scroll"><table>{children}</table></div>,
      }} urlTransform={(url, key, node) => {
        const safeUrl = defaultUrlTransform(url);
        return node.tagName === 'img' && key === 'src'
          ? resolveBlogImage(safeUrl)
          : safeUrl;
      }}>{post.content}</ReactMarkdown></div>
    </article>
  );
};

export default BlogDetail;
