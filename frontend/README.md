# 🐾 Shu - Developer Website

A modern, responsive personal portfolio built with React, Vite, and React Router.
This site showcases selected projects, technical skills, and personal interests, including my cat-themed branding (“Paws on the Keyboard 🐾”).

🚀 [Live Demo](https://shu-su-wang.vercel.app/)

📁 GitHub Repo: (this repo)

## ✨ Features

- 🎨 Clean, responsive UI with custom styling
- ⚛️ Built with React + Vite for fast, modern development
- 🧭 Client-side routing using React Router
- 🧩 Modular components (Hero, Navbar, Footer, Projects, About, etc.)

## 📂 Tech Stack
| Category   | Technologies                   |
| ---------- | ------------------------------ |
| Frontend   | React, Vite, JSX, React Router |
| Styling    | CSS Modules / Custom CSS       |
| Deployment | Vercel                         |
| Tooling    | npm, GitHub                    |


## 🛠 Getting Started




## 📬 Contact
**Shu Wang**
- 🔗 [LinkedIn](https://www.linkedin.com/in/shuuwang/)
- 💌 swang3130@gatech.edu

## Blog publishing

The blog reads `src/data/blogs/*.md` at build time; no API or database is needed.
Create one Markdown file per post with YAML frontmatter:

```markdown
---
title: "My new post"
date: 2026-09-30
tags: [JavaScript, Learning]
description: "A short preview."
---

Your article goes here.
```

Posts appear newest first. The filename without `.md` becomes the URL slug
(`/blogs/my-new-post`); optionally set `slug: my-stable-slug` in frontmatter.
Use lowercase letters, numbers, and hyphens for slugs. `draft: true` hides a post
from the list and article lookup (it is not a privacy boundary).
Use `/images/example.png` for images placed in `public/images/`.
Commit and redeploy to publish changes. Existing database ID URLs need an explicit
mapping to redirect; they currently show the post-not-found page.
The backend is retained for reference but is no longer used by the frontend blog.
