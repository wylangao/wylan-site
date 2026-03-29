import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const postFiles = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)/)
  if (!match) return { meta: { title: 'Untitled' }, content: raw }
  const meta = {}
  match[1].split('\n').forEach(line => {
    const [k, ...v] = line.split(':')
    if (k && k.trim()) meta[k.trim()] = v.join(':').trim().replace(/^"|"$/g, '')
  })
  return { meta, content: match[2] }
}

export default function BlogPost() {
  const { slug } = useParams()
  const key = Object.keys(postFiles).find(k => k.includes(`/${slug}.md`))

  if (!key) {
    return (
      <div className="max-w-5xl mx-auto px-8 py-14">
        <p className="font-serif italic text-parchment-500">Post not found.</p>
        <Link to="/blog" className="text-xs tracking-widest uppercase mt-4 inline-block nav-link">← Back to Blog</Link>
      </div>
    )
  }

  const { meta, content } = parseFrontmatter(postFiles[key])

  return (
    <div className="max-w-5xl mx-auto px-8 py-14">
      <Link to="/blog" className="nav-link mb-8 inline-block">← Blog</Link>

      <div className="md:grid md:grid-cols-[280px_1fr] md:gap-16 mt-6">
        <aside className="mb-10 md:mb-0">
          <p className="text-xs font-mono text-parchment-500 mb-2">{meta.date}</p>
          <h1 className="font-serif text-2xl text-ink leading-snug mb-4">{meta.title}</h1>
          {meta.tags && (
            <div className="flex flex-wrap gap-2">
              {meta.tags.replace(/[\[\]]/g, '').split(',').map(t => (
                <span key={t} className="text-xs font-mono px-2 py-0.5 bg-parchment-100 border border-parchment-200 text-parchment-700">
                  {t.trim()}
                </span>
              ))}
            </div>
          )}
        </aside>

        <main className="prose prose-sm max-w-none
          prose-headings:font-serif prose-headings:text-ink prose-headings:font-normal
          prose-p:text-ink-light prose-p:leading-relaxed
          prose-a:text-parchment-700 prose-a:no-underline hover:prose-a:underline
          prose-code:font-mono prose-code:text-xs prose-code:bg-parchment-100 prose-code:px-1
          prose-blockquote:border-parchment-300 prose-blockquote:text-parchment-600 prose-blockquote:italic
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </main>
      </div>
    </div>
  )
}
