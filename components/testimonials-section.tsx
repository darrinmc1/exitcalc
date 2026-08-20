"use client"

const testimonials = [
  {
    name: "Sarah K.",
    role: "Software Engineer, 34",
    avatar: "SK",
    quote:
      "I always knew I wanted to retire early but had no idea what number I was actually aiming for. ExitCalc gave me a concrete target in under 2 minutes. I'm now laser-focused on hitting $1.4M by 45.",
    highlight: "Hit my FIRE number target in 2 minutes",
  },
  {
    name: "Marcus T.",
    role: "Product Manager, 41",
    avatar: "MT",
    quote:
      "The Coast FIRE calculator was a revelation. Turns out I only need to save aggressively for 6 more years, then I can coast. That completely changed how I think about my career decisions.",
    highlight: "Discovered he could coast in 6 years",
  },
  {
    name: "Priya M.",
    role: "Nurse Practitioner, 38",
    avatar: "PM",
    quote:
      "I tried spreadsheets, I tried other calculators — they were all overwhelming. ExitCalc is the first tool that actually made sense to me. I shared it with my entire friend group.",
    highlight: "Finally understood her retirement math",
  },
  {
    name: "James R.",
    role: "Freelance Designer, 29",
    avatar: "JR",
    quote:
      "Starting early felt abstract until I ran the numbers here. Seeing how much my investments compound over 30 years was the kick I needed to max out my Roth IRA this year.",
    highlight: "Maxed his Roth IRA after seeing projections",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Early Users Love It
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Real People. Real Numbers. Real Plans.
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Join thousands of people who've used ExitCalc to finally understand
            their path to financial independence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/40 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 text-5xl text-emerald-500/20 font-serif leading-none select-none">
                &ldquo;
              </span>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                <span className="text-emerald-400 text-xs font-medium">
                  {t.highlight}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
                {/* Star rating */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#calculators"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-md shadow-emerald-500/25"
          >
            Calculate My FIRE Number — It's Free →
          </a>
        </div>
      </div>
    </section>
  )
}
