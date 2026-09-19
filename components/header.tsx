"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site.config"

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/lessons", label: "Lessons" },
    { href: "/tools", label: "Tools" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-white text-lg tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-white font-semibold"
                  : link.href === "/pricing"
                  ? "text-emerald-400 font-semibold hover:text-emerald-300"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Get started free
          </Link>
        </div>
      </div>
    </header>
  )
}
