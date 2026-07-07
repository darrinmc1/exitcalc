"use client"

import { useState } from "react"
import { siteConfig } from "@/lib/site-config"

interface EmailCaptureProps {
  heading?: string
  subheading?: string
}

export function EmailCapture({ heading, subheading }: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
    }, 800)
  }

  if (status === "success") {
    return (
      <div className="py-12 px-8 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl text-center">
        <div className="animate-bounce text-5xl mb-4">{siteConfig.theme.emoji}</div>
        <h3 className="text-2xl font-extrabold text-white mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-slate-400 text-lg">
          We&apos;ll send you the good stuff. No spam, no financial advice disclaimers longer than the actual email.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border-2 border-white/10 bg-gradient-to-br from-teal-950/40 to-amber-950/20 p-8 md:p-12 glass-card">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
          <span className="text-lg">{siteConfig.theme.emoji}</span>
          <span className="text-sm font-semibold text-teal-400 tracking-wide uppercase">
            Free Newsletter
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-[var(--font-outfit)]">
          {heading || siteConfig.copy.emailCaptureHeading}
        </h2>
        <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
          {subheading || siteConfig.copy.emailCaptureSubheading}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="flex-1 px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all text-base"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === "loading" ? "Subscribing..." : siteConfig.copy.ctaButton}
            </button>
          </div>
          {status === "error" && (
            <p className="text-red-400 text-sm font-medium">
              Something went wrong. Try again?
            </p>
          )}
        </form>

        <p className="text-xs text-slate-600 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}
