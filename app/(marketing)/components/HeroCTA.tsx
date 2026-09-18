import Link from 'next/link';

export function HeroCTA() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-24 text-center bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Free FIRE Planning Tool
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Retire Early.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            On Your Terms.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Calculate your path to Financial Independence with precision. Know your number,
          track your progress, and reach FIRE faster.
        </p>

        {/* PRIMARY CTA — above the fold, high contrast */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/calculator"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold text-lg shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60"
          >
            Start Your FIRE Calculator
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-400/40"
          >
            How It Works
          </Link>
        </div>

        {/* Social proof / trust signals */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            No account required
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Results in under 2 minutes
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            100% free forever
          </div>
        </div>
      </div>
    </section>
  );
}
