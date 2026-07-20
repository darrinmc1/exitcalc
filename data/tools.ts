// =============================================================================
// EXITCALC — CALCULATOR TOOLS
// =============================================================================

export interface ToolProfile {
  id: string
  name: string
  description: string
  content: string
  toolType: string
  features: string[]
  link: string
  tags: string[]
  dateAdded: string
  emoji: string
}

const superProjection: ToolProfile = {
  id: "super-projection",
  name: "Super Projection Calculator",
  description:
    "Project your superannuation balance at any future age based on your salary, contribution rate, employer SG, and expected returns.",
  content: `Use the calculator below to see where your super is headed. Adjust the inputs to model different scenarios — salary sacrifice more, change your growth assumption, or see the impact of a pay rise.

## How It Works

The calculator compounds your current balance forward year by year, adding employer SG and salary sacrifice contributions (net of super's contributions tax), then applying your expected return (net of super's earnings tax).

## Tips

- **Be conservative on returns** — 7% nominal (roughly 4.5% real after inflation) is a reasonable long-term assumption for a balanced/growth super fund
- **Use gross salary** — the calculator handles tax inside super automatically
- **Re-run annually** — update with your actual balance and salary each July`,
  toolType: "Calculator",
  features: [
    "Compound growth projection to any target age",
    "Employer SG + salary sacrifice inputs",
    "Super contributions tax factored in",
    "Super earnings tax factored in",
    "Year-by-year balance breakdown",
  ],
  link: "/tools/super-projection",
  tags: ["super", "projection", "calculator"],
  dateAdded: "2026-07-01",
  emoji: "\u{1F4C8}",
}

const fireNumber: ToolProfile = {
  id: "fire-number",
  name: "FIRE Number Calculator",
  description:
    "Calculate your total FIRE number using the two-bucket approach — gap fund for pre-super years plus super target for post-60.",
  content: `Enter your numbers below to find out how much you need to exit the 9-to-5. The calculator uses the AU two-bucket approach: a gap fund (accessible money for the years before super) and a super target (for preservation age onwards).

## The Two-Bucket Model

**Bucket 1 — Gap Fund:** Annual expenses × years between exit age and 60. This money must be outside super.

**Bucket 2 — Super Target:** Annual expenses × 25 (the 4% rule). This money grows inside super until preservation age.

## Tips

- **Include all expenses** — housing, food, transport, insurance, health, discretionary. Don't undersell your lifestyle
- **Factor in reduced expenses** — no commute, no work clothes, possibly a paid-off mortgage
- **The calculator is a starting point** — the Exit Plan Workbook models this in much more detail`,
  toolType: "Calculator",
  features: [
    "Two-bucket FIRE number (gap + super)",
    "Adjustable exit age and preservation age",
    "Current savings progress tracking",
    "Gap analysis showing shortfall",
    "Percentage progress to FIRE",
  ],
  link: "/tools/fire-number",
  tags: ["fire", "number", "calculator"],
  dateAdded: "2026-07-01",
  emoji: "\u{1F525}",
}

const coastFire: ToolProfile = {
  id: "coast-fire",
  name: "Coast-FIRE Calculator",
  description:
    "Find out if you can stop contributing and let compound growth carry your portfolio to your FIRE number by retirement age.",
  content: `Coast-FIRE is the point where your existing savings, left to compound without any further contributions, will grow to your FIRE number by your target retirement age. Use this calculator to find your coast number and see if you've already reached it.

## How It Works

The calculator takes your FIRE number and discounts it back to today using compound growth. If your current savings exceed this discounted amount, you've hit Coast-FIRE.

## What Reaching Coast-FIRE Means

It doesn't mean you stop working. It means the pressure to maximise savings is gone. You can:

- Switch to work you enjoy regardless of pay
- Go part-time
- Take a sabbatical
- Stop salary sacrificing and enjoy more of your income now

## Tips

- **Separate super and non-super** — super has employer contributions even if you stop salary sacrificing
- **Use real (inflation-adjusted) returns** — 4.5% real is more honest than 7% nominal for long-term planning
- **Revisit after market moves** — a 20% correction can push your coast date out by 2–3 years`,
  toolType: "Calculator",
  features: [
    "Coast-FIRE number calculation",
    "Separate super and non-super tracking",
    "Adjustable growth rate",
    "Progress indicator (% to coast)",
    "Years until Coast-FIRE estimate",
  ],
  link: "/tools/coast-fire",
  tags: ["coast-fire", "compound", "calculator"],
  dateAdded: "2026-07-01",
  emoji: "\u{1F6F6}",
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_TOOLS: ToolProfile[] = [superProjection, fireNumber, coastFire]

export const TOOL_MAP = Object.fromEntries(
  ALL_TOOLS.map((t) => [t.id, t])
) as Record<string, ToolProfile>

export function getToolById(id: string): ToolProfile | undefined {
  return TOOL_MAP[id]
}
