export interface NavLink {
  label: string
  href: string
}

export interface Category {
  id: string
  name: string
  emoji: string
  description: string
  color: string
}

export interface ThemeConfig {
  id: string
  emoji: string
  primaryColor: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
  heroGradient: string
  darkMode: boolean
  bgClass: string
  textClass: string
  cardBg: string
  cardBorder: string
}

export interface CopyConfig {
  heroTitle: string
  heroSubtitle: string
  ctaButton: string
  ctaSecondary: string
  emailCaptureHeading: string
  emailCaptureSubheading: string
}

export interface ContactConfig {
  email: string
  github: string
}

export interface SiteConfig {
  siteId: string
  name: string
  tagline: string
  description: string
  domain: string
  audience: string
  theme: ThemeConfig
  categories: Category[]
  nav: { marketing: NavLink[] }
  copy: CopyConfig
  contact: ContactConfig
}

export const siteConfig: SiteConfig = {
  siteId: "exitcalc",
  name: "ExitCalc",
  tagline: "Know your FIRE number. Plan your exit.",
  description:
    "Australian superannuation and FIRE planning tools. Calculate your retirement number, project your super, and build a real exit plan from the 9-to-5.",
  domain: "exitcalc.com.au",
  audience: "AU 30-50yo planning financial independence exit from 9-5",

  theme: {
    id: "exit",
    emoji: "🔥",
    primaryColor: "teal",
    accentColor: "amber",
    gradientFrom: "from-teal-600",
    gradientTo: "to-amber-500",
    heroGradient:
      "bg-gradient-to-br from-slate-950 via-teal-950/40 to-amber-950/30",
    darkMode: true,
    bgClass: "bg-slate-950",
    textClass: "text-slate-50",
    cardBg: "bg-white/5 backdrop-blur-xl",
    cardBorder: "border border-white/10",
  },

  categories: [
    {
      id: "fire-basics",
      name: "FIRE Basics",
      emoji: "🔥",
      description: "The fundamentals of financial independence and early retirement in Australia.",
      color: "teal",
    },
    {
      id: "super",
      name: "Superannuation",
      emoji: "🏦",
      description: "Make super work harder so you can stop working sooner.",
      color: "amber",
    },
    {
      id: "investing",
      name: "Investing",
      emoji: "📈",
      description: "Property, ETFs, index funds — building wealth the AU way.",
      color: "emerald",
    },
    {
      id: "tax",
      name: "Tax Strategy",
      emoji: "🧾",
      description: "Legally minimise tax and accelerate your FIRE timeline.",
      color: "violet",
    },
    {
      id: "fire-strategies",
      name: "FIRE Strategies",
      emoji: "🎯",
      description: "Coast-FIRE, Lean-FIRE, Barista-FIRE — find your flavour.",
      color: "rose",
    },
    {
      id: "income",
      name: "Income",
      emoji: "💰",
      description: "Side hustles and income strategies to accelerate your exit.",
      color: "sky",
    },
    {
      id: "drawdown",
      name: "Drawdown",
      emoji: "📉",
      description: "Strategies for spending your wealth in retirement.",
      color: "orange",
    },
    {
      id: "planning",
      name: "Planning",
      emoji: "🗓️",
      description: "Actionable roadmaps and timelines for your exit.",
      color: "indigo",
    },
  ],

  nav: {
    marketing: [
      { label: "Lessons", href: "/lessons" },
      { label: "Tools", href: "/tools" },
      { label: "Updates", href: "/updates" },
      { label: "Products", href: "/products" },
    ],
  },

  copy: {
    heroTitle: "Know Your Number. Plan Your Exit.",
    heroSubtitle:
      "Australian FIRE planning tools and lessons that actually make sense. Calculate your super projection, find your FIRE number, and build a real exit plan from the 9-to-5.",
    ctaButton: "Start Planning",
    ctaSecondary: "Explore the Lessons",
    emailCaptureHeading: "Get the Exit Plan Newsletter",
    emailCaptureSubheading:
      "Weekly AU FIRE insights — super strategies, tax tips, and real numbers. No fluff, no financial advice disclaimers longer than the actual content.",
  },

  contact: {
    email: "hello@exitcalc.com.au",
    github: "https://github.com/darrinmc1",
  },
} as const satisfies SiteConfig
