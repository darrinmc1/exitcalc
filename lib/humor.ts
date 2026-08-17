export interface HumorItem {
  setup: string
  punchline?: string
}

export interface HumorTheme {
  container?: string
  border?: string[]
  borderOpacity?: string
  borderSize?: string
  borderLine?: string
  dark?: boolean
  cardBorder: string
  cardBg: string
  eyebrowColor: string
  label?: string
  punchColor: string
  buttonBg: string
  footerNote?: string
  shuffleLabel?: string
}

export const humorTheme: HumorTheme = {
  container: "my-10",
  border: ["🚪", "💼", "🚪", "📈", "🚪"],
  borderOpacity: "opacity-30",
  borderSize: "text-xl",
  borderLine: "bg-emerald-200",
  dark: true,
  cardBorder: "border-slate-700",
  cardBg: "bg-slate-800/80",
  eyebrowColor: "text-emerald-400",
  label: "Exit break",
  punchColor: "text-slate-300",
  buttonBg: "bg-emerald-600",
  footerNote: "Even exit plans need a pit stop",
  shuffleLabel: "Another one",
}

export const humorBank: Record<string, HumorItem[]> = {
  general: [
    {
      setup: "My exit plan is solid.",
      punchline: "It's the business part that's still in flux.",
    },
    {
      setup: "They say build a business that can run without you.",
      punchline: "I tried that. It ran without me. And my payroll. And my accounts. Lesson learned.",
    },
    {
      setup: "Exit planning is just retirement planning with extra spreadsheets.",
    },
    {
      setup: "My business valuation came back.",
      punchline: "The appraiser and I disagree on the definition of 'optimistic.'",
    },
  ],
  valuation: [
    {
      setup: "Valuation is an art, not a science.",
      punchline: "Which is very convenient for the person doing the valuing.",
    },
    {
      setup: "My business is worth 4x revenue.",
      punchline: "According to me. The market has a different number, and it's not shy about it.",
    },
    {
      setup: "I asked for a valuation range.",
      punchline: "They gave me a range the size of my annual revenue. Extremely precise.",
    },
    {
      setup: "EBITDA: what your business makes after everyone stops being optimistic.",
    },
  ],
  sale: [
    {
      setup: "Selling a business is like selling a house.",
      punchline: "Everyone loves the photos, nobody wants the inspection report.",
    },
    {
      setup: "The buyer asked for three years of financials.",
      punchline: "I gave them three years of financials. They asked for the 'real' ones. Rude.",
    },
    {
      setup: "Due diligence is where buyers go to find reasons to say no.",
      punchline: "And sellers go to rediscover their love for hiding things.",
    },
    {
      setup: "My handover plan is a document and a prayer.",
      punchline: "The document is 40 pages. The prayer is 12 words. Both are important.",
    },
  ],
  planning: [
    {
      setup: "Exit planning should start on day one.",
      punchline: "I started on day 1,400, which in business years is 'right before it matters.'",
    },
    {
      setup: "My succession plan is 'hope someone good applies.'",
      punchline: "I'm also keeping the hope plan as a backup for the succession plan.",
    },
    {
      setup: "The best time to plan your exit is before you're exhausted.",
      punchline: "The second best time is after your coffee. Same rule as everything else.",
    },
    {
      setup: "I made a five-year exit timeline.",
      punchline: "The business made a five-month pivot. We're meeting in the middle, somewhere around 'whatever.'",
    },
  ],
}
