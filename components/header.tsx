"use client"

import Link from "next/link"
import { useState } from "react"
import { siteConfig } from "@/config/site.config"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg tracking-tight">
          <span className="text-emerald-400">⚡</span>
          <span>{siteConfig.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <Link href="/lessons" className="hover:text-white transition-colors">Lessons</Link>
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-1.5 rounded-lg transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 gap-1">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-1">Learn</p>
            <Link
              href="/lessons"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium"
            >
              <span className="text-base">📚</span> Lessons
            </Link>
            <Link
              href="/tools"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium"
            >
              <span className="text-base">🧮</span> Tools
            </Link>

            <div className="my-2 border-t border-white/10" />
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-1">Explore</p>
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium"
            >
              <span className="text-base">🛍️</span> Products
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium"
            >
              <span className="text-base">✍️</span> Blog
            </Link>
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium"
            >
              <span className="text-base">💳</span> Pricing
            </Link>

            <div className="my-2 border-t border-white/10" />
            <div className="flex flex-col gap-2 pt-1">
              <Link
                href="/sign-in"
                onClick={() => setOpen(false)}
                className="w-full text-center text-sm font-medium text-slate-200 border border-white/20 hover:border-white/40 px-4 py-2.5 rounded-xl transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setOpen(false)}
                className="w-full text-center text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2.5 rounded-xl transition-colors"
              >
                Get started — it&apos;s free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
