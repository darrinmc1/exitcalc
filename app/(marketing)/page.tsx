import { siteConfig } from "@/config/site.config"
import TestimonialsSection from "@/components/testimonials-section"

export default function MarketingHomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Know Your Number.
            <br />
            Plan Your Exit.
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          <a
            href="#calculators"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
          >
            Calculate My FIRE Number →
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Calculators Section */}
      <section id="calculators" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Free FIRE Calculators
          </h2>
          {/* Calculator content rendered by child routes or components */}
        </div>
      </section>
    </main>
  )
}
