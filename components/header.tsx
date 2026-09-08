import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          TaxEdge
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-sm text-white/70 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-sm text-white/70 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <SignedOut>
            <Link
              href="/sign-in"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Sign in
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
