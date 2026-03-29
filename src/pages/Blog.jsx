import { Link } from 'react-router-dom'

// Vite glob — loads all markdown files from posts/
const postFiles = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return { title: 'Untitled', date: '', excerpt: '', tags: [] }
  const meta = {}
  match[1].split('\n').forEach(line => {
    const [k, ...v] = line.split(':')
    if (k && k.trim()) meta[k.trim()] = v.join(':').trim().replace(/^"|"$/g, '')
  })
  if (meta.tags) {
    meta.tags = meta.tags.replace(/[\[\]]/g, '').split(',').map(t => t.trim())
  }
  return meta
}

const posts = Object.entries(postFiles)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace('.md', '')
    return { slug, ...parseFrontmatter(raw) }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-14">
      <div className="md:grid md:grid-cols-[280px_1fr] md:gap-16">
        <aside className="mb-10 md:mb-0">
          <h2 className="font-serif text-3xl text-ink mb-1">Blog</h2>
          <p className="section-label">Writing</p>
          <p className="mt-6 text-sm text-ink-muted leading-relaxed">
            Notes on data science, Python, statistical modeling, and whatever else
            I'm thinking about. {/* TODO: Update this description */}
          </p>
        </aside>

        <main>
          {posts.length === 0 ? (
            <div className="border-t border-parchment-200 pt-6">
              <p className="font-serif italic text-parchment-500">
                No posts yet. Add a <code className="font-mono text-xs">.md</code> file
                to <code className="font-mono text-xs">src/posts/</code> to get started.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map(post => (
                <article key={post.slug} className="border-t border-parchment-200 pt-6">
                  <p className="text-xs font-mono text-parchment-500 mb-1">{post.date}</p>
                  <h3 className="font-serif text-xl text-ink mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-parchment-700 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-ink-light leading-relaxed mb-3">{post.excerpt}</p>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(post.tags) ? post.tags : [post.tags]).map(tag => (
                        <span key={tag} className="text-xs font-mono px-2 py-0.5 bg-parchment-100 border border-parchment-200 text-parchment-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
