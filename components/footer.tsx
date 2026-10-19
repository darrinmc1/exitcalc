import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20">
      {/* Email Capture Banner */}
      <div className="border-b border-white/10 py-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">Free FIRE Updates</p>
          <h3 className="text-xl font-bold text-white mb-2">Get FIRE updates + exclusive lessons</h3>
          <p className="text-sm text-slate-400 mb-6">Join readers getting early access to new calculators, lessons, and FIRE strategies — no spam, unsubscribe anytime.</p>
          <NewsletterForm />
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">{siteConfig.name}</span>
            <span className="text-slate-500 text-sm">— retire on your terms</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/lessons" className="hover:text-white transition-colors">Lessons</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </nav>
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  )
}
