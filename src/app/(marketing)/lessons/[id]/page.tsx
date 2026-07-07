import { notFound } from "next/navigation"
import Link from "next/link"
import { ALL_MODULES, getModuleById } from "@/data/modules"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return ALL_MODULES.map((mod) => ({ id: mod.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id)
  if (!mod) return { title: "Not Found" }
  return {
    title: `${mod.title} | ${siteConfig.name}`,
    description: mod.description,
  }
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-teal-300">$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-white/10 rounded px-1.5 py-0.5 text-teal-300 text-sm font-mono">$1</code>')
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let listBuffer: string[] = []
  let orderedBuffer: string[] = []
  let blockquoteBuffer: string[] = []

  function flushList() {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-1 text-slate-300 mb-4 ml-4">
          {listBuffer.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ul>,
      )
      listBuffer = []
    }
  }

  function flushOrdered() {
    if (orderedBuffer.length > 0) {
      elements.push(
        <ol key={`ol-${elements.length}`} className="list-decimal list-inside space-y-1 text-slate-300 mb-4 ml-4">
          {orderedBuffer.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ol>,
      )
      orderedBuffer = []
    }
  }

  function flushBlockquote() {
    if (blockquoteBuffer.length > 0) {
      elements.push(
        <blockquote key={`bq-${elements.length}`} className="border-l-4 border-teal-500/50 bg-teal-500/5 rounded-r-lg px-4 py-3 mb-4 text-slate-300 italic">
          {blockquoteBuffer.map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
          ))}
        </blockquote>,
      )
      blockquoteBuffer = []
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()

    if (trimmed === "") {
      flushList()
      flushOrdered()
      flushBlockquote()
      continue
    }

    if (trimmed.startsWith("> ")) {
      flushList()
      flushOrdered()
      blockquoteBuffer.push(trimmed.slice(2))
      continue
    } else {
      flushBlockquote()
    }

    if (trimmed.startsWith("### ")) {
      flushList()
      flushOrdered()
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl font-bold text-white mt-8 mb-3" dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(4)) }} />,
      )
      continue
    }
    if (trimmed.startsWith("## ")) {
      flushList()
      flushOrdered()
      elements.push(
        <h2 key={`h2-${i}`} className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10" dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(3)) }} />,
      )
      continue
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      flushOrdered()
      listBuffer.push(trimmed.slice(2))
      continue
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/)
    if (orderedMatch) {
      flushList()
      orderedBuffer.push(orderedMatch[1])
      continue
    }

    flushList()
    flushOrdered()
    elements.push(
      <p key={`p-${i}`} className="text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }} />,
    )
  }

  flushList()
  flushOrdered()
  flushBlockquote()

  return <div className="prose-custom">{elements}</div>
}

function levelColor(level: string) {
  switch (level) {
    case "beginner": return "emerald"
    case "intermediate": return "teal"
    case "advanced": return "amber"
    default: return "slate"
  }
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id)
  if (!mod) notFound()

  const color = levelColor(mod.level)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="bg-gradient-to-br from-slate-950 via-teal-950/40 to-amber-950/30 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/lessons"
            className="inline-flex items-center text-sm text-slate-400 hover:text-teal-400 transition-colors mb-6"
          >
            <span className="mr-1">&larr;</span> Back to Lessons
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-block rounded-full bg-${color}-500/10 border border-${color}-500/20 px-3 py-1 text-xs font-medium text-${color}-400 uppercase tracking-wide`}>
              {mod.level}
            </span>
            <span className="text-sm text-slate-500">{mod.duration}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            {mod.title}
          </h1>

          <p className="text-lg text-slate-400 mb-6">{mod.description}</p>

          <div className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-5">
            <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wide mb-3">
              What you will learn
            </h3>
            <ul className="space-y-2">
              {mod.learningOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <span className="text-teal-500 mt-0.5">&#10003;</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          <MarkdownRenderer content={mod.content} />
        </article>

        <div className="mt-8 flex flex-wrap gap-2">
          {mod.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4">
            {(() => {
              const idx = ALL_MODULES.findIndex((m) => m.id === params.id)
              const prev = idx > 0 ? ALL_MODULES[idx - 1] : null
              return prev ? (
                <Link href={`/lessons/${prev.id}`} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors max-w-[45%]">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-teal-500/30 group-hover:bg-teal-500/10 transition-all duration-200">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Previous</p>
                    <p className="text-xs font-medium truncate text-slate-300 group-hover:text-white transition-colors">{prev.title}</p>
                  </div>
                </Link>
              ) : <div />
            })()}
            {(() => {
              const idx = ALL_MODULES.findIndex((m) => m.id === params.id)
              const next = idx < ALL_MODULES.length - 1 ? ALL_MODULES[idx + 1] : null
              return next ? (
                <Link href={`/lessons/${next.id}`} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors text-right max-w-[45%]">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Next</p>
                    <p className="text-xs font-medium truncate text-slate-300 group-hover:text-white transition-colors">{next.title}</p>
                  </div>
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-teal-500/30 group-hover:bg-teal-500/10 transition-all duration-200">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </span>
                </Link>
              ) : <div />
            })()}
          </div>
          <div className="mt-6 text-center">
            <Link href="/lessons" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              All Lessons
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
