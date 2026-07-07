import { notFound } from "next/navigation"
import Link from "next/link"
import { ALL_UPDATES, getUpdateById } from "@/data/updates"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return ALL_UPDATES.map((u) => ({ id: u.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const update = getUpdateById(params.id)
  if (!update) return { title: "Not Found" }
  return {
    title: `${update.title} | ${siteConfig.name}`,
    description: update.description,
  }
}

export default function UpdatePage({ params }: { params: { id: string } }) {
  const update = getUpdateById(params.id)
  if (!update) notFound()

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/updates"
          className="inline-flex items-center text-sm text-slate-400 hover:text-teal-400 transition-colors mb-8"
        >
          <span className="mr-1">&larr;</span> All Updates
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block rounded-full bg-teal-500/10 border border-teal-500/20 px-3 py-1 text-xs font-medium text-teal-400 uppercase tracking-wide">
            {update.category}
          </span>
          <span className="text-sm text-slate-500">{update.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
          {update.title}
        </h1>
        <p className="text-lg text-slate-400 mb-8">{update.description}</p>

        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 prose prose-invert max-w-none">
          <div
            className="text-slate-300 leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: update.content }}
          />
        </article>

        <div className="mt-8 flex flex-wrap gap-2">
          {update.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
