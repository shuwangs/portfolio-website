import { load, JSON_SCHEMA } from 'js-yaml';

const files = import.meta.glob('./blogs/*.md', {
  query: '?raw', import: 'default', eager: true,
});

export const blogs = Object.entries(files).map(([path, source]) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error(`Missing blog metadata: ${path}`);
  const metadata = load(match[1], { schema: JSON_SCHEMA }) || {};
  const slug = metadata.slug || path.split('/').pop().replace(/\.md$/, '');
  if (typeof metadata.title !== 'string' ||
      typeof metadata.date !== 'string' ||
      !/^\d{4}-\d{2}-\d{2}$/.test(metadata.date) ||
      Number.isNaN(Date.parse(metadata.date)) ||
      typeof slug !== 'string' || !/^[a-z0-9-]+$/.test(slug) ||
      (metadata.tags !== undefined &&
        (!Array.isArray(metadata.tags) || metadata.tags.some(tag => typeof tag !== 'string')))) {
    throw new Error(`Invalid blog metadata: ${path}`);
  }
  return {
    slug, title: metadata.title, date: metadata.date,
    summary: metadata.description || metadata.summary || '',
    tags: metadata.tags || [], content: source.slice(match[0].length),
    draft: metadata.draft === true,
  };
}).filter(post => !post.draft).sort((a, b) => b.date.localeCompare(a.date));

if (new Set(blogs.map(post => post.slug)).size !== blogs.length) {
  throw new Error('Blog slugs must be unique');
}

export function formatBlogDate(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}
