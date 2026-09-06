// =============================================================================
// SITE CONFIGURATION — EXITCALC
// =============================================================================

// -----------------------------------------------------------------------------
// Type Definitions (shared across all empire sites)
// -----------------------------------------------------------------------------

type FiveTuple<T> = [T, T, T, T, T]

export interface NavLink {
  label: string
  href: string
}

export interface DashboardNavLink extends NavLink {
  icon: string
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

export interface BadgeConfig {
  tierNames: FiveTuple<string>
  tierEmojis: FiveTuple<string>
  tierColors: FiveTuple<string>
  xpPerTier: FiveTuple<number>
  lessonsPerTier: FiveTuple<number>
}

export interface NavConfig {
  marketing: NavLink[]
  dashboard: DashboardNavLink[]
}

export interface CopyConfig {
  heroTitle: string
  heroSubtitle: string
  ctaButton: string
  ctaSecondary: string
  loginTitle: string
  signupTitle: string
  foundingMemberHeading: string
  emailCaptureHeading: string
  emailCaptureSubheading: string
  feedbackPlaceholder: string
}

export interface PricingConfig {
  founder: { monthly: number; yearly: number }
  standard: { monthly: number; yearly: number }
  premium: { monthly: number; yearly: number }
}

export interface ContactConfig {
  email: string
  github: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  domain: string
  theme: ThemeConfig
  badges: BadgeConfig
  categories: Category[]
  nav: NavConfig
  copy: CopyConfig
  pricing: PricingConfig
  contact: ContactConfig
}

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

export function getBadgeTier(config: SiteConfig, xp: number): number {
  const tiers = config.badges.xpPerTier
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (xp >= tiers[i]) return i
  }
  return 0
}

export function getTierProgress(config: SiteConfig, xp: number): number {
  const tier = getBadgeTier(config, xp)
  const currentThreshold = config.badges.xpPerTier[tier]
  const nextThreshold = config.badges.xpPerTier[tier + 1]
  if (nextThreshold === undefined) return 100
  const progressInTier = xp - currentThreshold
  const tierRange = nextThreshold - currentThreshold
  return Math.min(Math.round((progressInTier / tierRange) * 100), 100)
}

export function getBadgeDisplay(config: SiteConfig, xp: number) {
  const tier = getBadgeTier(config, xp)
  return {
    tier,
    name: config.badges.tierNames[tier],
    emoji: config.badges.tierEmojis[tier],
    color: config.badges.tierColors[tier],
    progress: getTierProgress(config, xp),
    isMaxTier: tier === config.badges.tierNames.length - 1,
  }
}

// =============================================================================
// EXITCALC CONFIGURATION
// =============================================================================

export const siteConfig: SiteConfig = {
  name: "ExitCalc",
  tagline: "AU Superannuation & FIRE Planning Tools",
  description:
    "Free FIRE calculator for Australians: superannuation projections, FIRE number, and Coast-FIRE age. Plan your early retirement with data-driven tools.",
  domain: "exitcalc-rose.vercel.app",

  theme: {
    id: "exitcalc",
    emoji: "\u{1F3AF}",
    primaryColor: "emerald",
    accentColor: "teal",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-600",
    heroGradient:
      "bg-gradient-to-br from-slate-950 via-emerald-950/40 to-teal-950/60",
    darkMode: true,
    bgClass: "bg-slate-950",
    textClass: "text-slate-50",
    cardBg: "bg-white/5 backdrop-blur-xl",
    cardBorder: "border border-white/10",
  },

  badges: {
    tierNames: ["Observer", "Planner", "Saver", "Optimizer", "Free"],
    tierEmojis: ["\u{1F440}", "\u{1F4CB}", "\u{1F4B0}", "\u{1F4C8}", "\u{1F3AF}"],
    tierColors: ["slate", "emerald", "teal", "cyan", "green"],
    xpPerTier: [100, 300, 600, 1200, 2500],
    lessonsPerTier: [1, 2, 3, 4, 5],
  },

  categories: [
    {
      id: "superannuation",
      name: "Superannuation",
      emoji: "\u{1F3E6}",
      description: "Understand and optimise your AU super for early retirement.",
      color: "emerald",
    },
    {
      id: "fire-planning",
      name: "FIRE Planning",
      emoji: "\u{1F525}",
      description: "Calculate your FIRE number, Coast-FIRE age, and exit timeline.",
      color: "teal",
    },
    {
      id: "exit-strategy",
      name: "Exit Strategy",
      emoji: "\u{1F6AA}",
      description: "Drawdown plans, side income, and property strategies for your exit.",
      color: "cyan",
    },
  ],

  nav: {
    marketing: [
      { label: "Lessons", href: "/lessons" },
      { label: "Blog", href: "/blog" },
      { label: "Calculators", href: "/tools" },
      { label: "Products", href: "/products" },
      { label: "Updates", href: "/updates" },
      { label: "About", href: "/about" },
    ],
    dashboard: [
      { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
      { label: "Lessons", href: "/dashboard/lessons", icon: "BookOpen" },
      { label: "Progress", href: "/dashboard/progress", icon: "TrendingUp" },
      { label: "Badges", href: "/dashboard/badges", icon: "Award" },
      { label: "Settings", href: "/dashboard/settings", icon: "Settings" },
    ],
  },

  copy: {
    heroTitle: "The exit calculator for your FIRE number",
    heroSubtitle:
      "Working FIRE and exit calculators, plus written method lessons. Edit the live example to match your expenses and exit age.",
    ctaButton: "Use the exit calculator",
    ctaSecondary: "Browse method lessons",
    loginTitle: "Welcome back",
    signupTitle: "Create your account",
    foundingMemberHeading: "Founding Member — Lock In Early Access Pricing",
    emailCaptureHeading: "Calculator and lesson updates",
    emailCaptureSubheading:
      "When a tool or written explainer ships, it goes here. AU super and FIRE only.",
    feedbackPlaceholder: "What topic should we cover next?",
  },

  pricing: {
    founder: { monthly: 5, yearly: 48 },
    standard: { monthly: 9, yearly: 90 },
    premium: { monthly: 19, yearly: 180 },
  },

  contact: {
    email: "hello@exitcalc.com.au",
    github: "https://github.com/darrinmc1",
  },
} as const satisfies SiteConfig
