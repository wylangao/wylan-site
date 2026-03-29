# Wylan Gao — Personal Site

Personal portfolio and blog built with **Vite + React + Tailwind CSS**.  
Deployable to Vercel or Netlify. Blog powered by Markdown. Data via Supabase.

---

## Tech Stack

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)

---

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env and add your Supabase keys

# 3. Start the dev server
npm run dev
# → http://localhost:5173
```

---

## Adding a Blog Post

1. Create a new file in `src/posts/my-post-title.md`
2. Add frontmatter at the top:

```markdown
---
title: "My Post Title"
date: "2025-03-01"
excerpt: "A short summary shown on the blog listing page."
tags: ["python", "data-science"]
---

Your content here in **Markdown**.
```

3. Save — the post appears automatically at `/blog/my-post-title`

---

## Connecting Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy your Project URL and anon key from **Settings → API**
3. Add them to `.env`:

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

### Writing data from Python

```python
import os
import pandas as pd
from supabase import create_client

client = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SERVICE_KEY"])

df = pd.read_csv("my_data.csv")
client.table("my_table").upsert(df.to_dict(orient="records")).execute()
```

---

## Exporting Python Charts

### Plotly (static JSON)

```python
import plotly.express as px

fig = px.line(df, x="date", y="value", title="My Metric")
fig.write_json("public/data/my-chart.json")
```

Then use in React:
```jsx
import { PlotlyChart } from './components/Chart'
<PlotlyChart jsonPath="/data/my-chart.json" />
```

---

## Deploy

### Vercel (recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repo
3. Add env vars under **Settings → Environment Variables**
4. Deploy — auto-deploys on every push

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build` · Publish dir: `dist`
4. Add env vars under **Site Settings → Environment Variables**

---

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create wylan-site --public --push
```

Or create the repo manually on GitHub and follow the push instructions.

---

## Updating Content

| What | Where |
|---|---|
| Name, tagline, contact | `src/pages/Home.jsx` |
| Bio / About text | `src/pages/About.jsx` |
| Projects list | `src/pages/Projects.jsx` |
| Blog posts | `src/posts/*.md` |
| Colors / fonts | `tailwind.config.js` + `src/index.css` |
| Nav links | `src/components/Navbar.jsx` |

---

## Adding Your Photo

In `src/pages/About.jsx`, replace the placeholder div with:

```jsx
<img
  src="/photo.jpg"
  alt="Wylan Gao"
  className="w-full aspect-[3/4] object-cover border border-parchment-300"
/>
```

Then drop `photo.jpg` into the `public/` folder.
