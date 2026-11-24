import { load, JSON_SCHEMA } from 'js-yaml';

const files = import.meta.glob('./blogs/*.md', {
  query: '?raw', import: 'default', eager: true,
});

// Import Markdown-adjacent images so Vite serves and bundles their URLs.
const images = import.meta.glob('./blogs/posts_images/*.{png,jpg,jpeg,gif,svg,webp}', {
  query: '?url', import: 'default', eager: true,
});

export function resolveBlogImage(src) {
  const relativePath = src.replace(/^\.\//, '');
  return images[`./blogs/${relativePath}`] || src;
}

const tagLabels = {
  ai: 'AI', 'artificial intelligence': 'AI', llm: 'LLM', java: 'Java',
  'c++': 'C++', cpp: 'C++', 'c plus plus': 'C++',
  javascript: 'JavaScript', typescript: 'TypeScript', postgresql: 'PostgreSQL',
  pgvector: 'pgvector', oop: 'OOP', sdet: 'SDET', leetcode: 'LeetCode',
  authentification: 'Authentication', authentication: 'Authentication',
};

export function normalizeBlogTag(tag) {
  const key = tag.trim().replace(/\s+/g, ' ').toLowerCase();
  return tagLabels[key] || key.replace(/\b[a-z]/g, letter => letter.toUpperCase());
}

// Broad navigation topics; detailed tags remain available on each article.
export const blogTopics = [
  { id: 'testing', label: 'Testing', tags: ['SDET', 'Automation', 'Testing'] },
  { id: 'js-ts', label: 'JS / TS', tags: ['JavaScript', 'TypeScript', 'JS', 'TS'] },
  { id: 'react', label: 'React', tags: ['React'] },
  { id: 'ai', label: 'AI', tags: ['AI', 'Search', 'Search & AI', 'Information Retrieval', 'Semantic Search', 'Vector Search', 'pgvector', 'Cosine Similarity', 'LLM', 'Machine Learning', 'Deep Learning', 'Generative AI', 'RAG'] },
  { id: 'java', label: 'Java', tags: ['Java'] },
  { id: 'leetcode', label: 'LeetCode', tags: ['LeetCode'] },
  { id: 'cpp', label: 'C++', tags: ['C++'] },
  { id: 'security', label: 'Security', tags: ['Security', 'Web Security', 'Authentication'] },
];

export function getBlogTopics(tags) {
  const normalized = new Set(tags.map(normalizeBlogTag));
  return blogTopics.filter(topic => topic.tags.some(tag => normalized.has(normalizeBlogTag(tag))))
    .slice(0, 2).map(topic => topic.id);
}

export const blogs = Object.entries(files).map(([path, source]) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error(`Missing blog metadata: ${path}`);
  const metadata = load(match[1], { schema: JSON_SCHEMA }) || {};
  // Editor-created filenames may contain spaces or uppercase letters.
  // Preserve explicit slugs, but normalize filename-derived URLs.
  const filenameSlug = path.split('/').pop().replace(/\.md$/, '')
    .toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
  const slug = metadata.slug || filenameSlug;
  if (typeof metadata.title !== 'string' ||
    typeof metadata.date !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}$/.test(metadata.date) ||
    Number.isNaN(Date.parse(metadata.date)) ||
    typeof slug !== 'string' || !/^[a-z0-9-]+$/.test(slug) ||
    (metadata.tags !== undefined &&
      (!Array.isArray(metadata.tags) || metadata.tags.some(tag => typeof tag !== 'string')))) {
    throw new Error(`Invalid blog metadata: ${path}`);
  }
  const tags = [...new Set((metadata.tags || []).map(normalizeBlogTag).filter(Boolean))];
  return {
    slug, title: metadata.title, date: metadata.date,
    summary: metadata.description || metadata.summary || '',
    tags, topics: getBlogTopics(tags), content: source.slice(match[0].length),
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
