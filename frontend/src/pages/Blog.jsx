import { Link, useSearchParams } from 'react-router-dom';
import { blogs, formatBlogDate, blogTopics, getBlogTopics } from '../data/blogs';
import './blog.css';

const topicCounts = new Map(blogTopics.map(topic => [
  topic.id, blogs.filter(blog => blog.topics.includes(topic.id)).length,
]));

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // Keep old tag bookmarks usable after switching to broad topics.
  const legacyTag = searchParams.get('tag');
  const requestedTopic = searchParams.get('topic') || (legacyTag ? getBlogTopics([legacyTag])[0] : '') || '';
  const migratedTopic = ({ javascript: 'js-ts', typescript: 'js-ts', algorithms: 'leetcode', 'search-ai': 'ai', search: 'ai' })[requestedTopic] || requestedTopic;
  const selectedTopic = ['frontend', 'backend'].includes(migratedTopic) ? '' : migratedTopic;
  const selectedLabel = blogTopics.find(topic => topic.id === selectedTopic)?.label || selectedTopic;
  const filteredBlogs = selectedTopic
    ? blogs.filter(blog => blog.topics.includes(selectedTopic))
    : blogs;

  function selectTopic(topic) {
    setSearchParams(previous => {
      const next = new URLSearchParams(previous);
      next.delete('tag');
      if (topic) next.set('topic', topic);
      else next.delete('topic');
      return next;
    });
  }

  return (
  <div className="blog-container">
    <div className="blog-header">
      <h1>Note from building</h1>
      <h3>What I’m learning about software, one project and problem at a time.</h3>
    </div>
    <div className="blog-layout">
    <aside className="blog-filters" aria-labelledby="blog-filter-heading">
      <h2 id="blog-filter-heading">Topics</h2>
      <div className="blog-filter-options" role="group" aria-label="Filter posts by topic">
        <button type="button" className="blog-filter-button" aria-pressed={!selectedTopic}
          onClick={() => selectTopic('')}>All <span>{blogs.length}</span></button>
        {blogTopics.filter(topic => topic.id !== 'cpp' || topicCounts.get(topic.id) > 0).map(topic => (
          <button key={topic.id} type="button" className="blog-filter-button"
            aria-pressed={selectedTopic === topic.id} onClick={() => selectTopic(topic.id)}>
            {topic.label} <span>{topicCounts.get(topic.id)}</span>
          </button>
        ))}
      </div>
      <p className="blog-filter-summary" role="status" aria-live="polite">
        {filteredBlogs.length} {filteredBlogs.length === 1 ? 'post' : 'posts'}
        {selectedTopic ? ` in ${selectedLabel}` : ' across all topics'}
      </p>
    </aside>
    <div className="blog-grid">
      {selectedTopic && filteredBlogs.length === 0 && (
        <p>No posts in this topic. <button type="button" className="blog-filter-reset"
          onClick={() => selectTopic('')}>View all posts</button></p>
      )}
      {blogs.length === 0 && <p>No posts yet. Check back soon!</p>}
      {filteredBlogs.map(blog => (
        <Link key={blog.slug} to={`/blogs/${blog.slug}`} className="blog-link">
          <article className="blog-card">
            <h2>{blog.title}</h2>
            <p><time dateTime={blog.date}>{formatBlogDate(blog.date)}</time></p>
            <p>{blog.summary}</p>
            <div className="tags">
              {blog.tags.slice(0, 3).map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </article>
        </Link>
      ))}
    </div>
    </div>
  </div>
  );
};

export default Blog;
