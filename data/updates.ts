// =============================================================================
// EXITCALC — WEEKLY UPDATES
// =============================================================================

export interface WeeklyUpdate {
  id: string
  title: string
  description: string
  content: string
  date: string
  tags: string[]
  category: string
}

const launchAnnouncement: WeeklyUpdate = {
  id: "exitcalc-launch",
  title: "ExitCalc Is Live",
  description: "Free AU superannuation and FIRE calculators — plus 12 lessons to help you plan your exit.",
  content: `## ExitCalc Is Live

We built ExitCalc because Australian FIRE planning has unique quirks that global calculators ignore — superannuation, preservation age, the gap fund, franking credits, Division 293. Every tool and lesson here is built for the AU context.

### Free Calculators

Three calculators, no sign-up required:

- **Super Projection** — see where your super is headed based on salary, SG, and salary sacrifice
- **FIRE Number** — calculate your total target using the two-bucket approach (gap fund + super)
- **Coast-FIRE** — find out if compound growth alone will get you there

### 12 Lessons

Covering everything from your FIRE number to drawdown strategies, super contribution optimisation, property planning, and investing outside super.

### Exit Plan Workbook

For those ready to get serious: a structured 40-page workbook with companion spreadsheets is coming soon ($59 one-time when available). Join the waitlist on the products page.

### Coming Soon

- Additional calculators (salary sacrifice optimiser, franking credit calculator)
- Video walkthroughs for each calculator
- Community forum for AU FIRE seekers

Thanks for being here from the start.`,
  date: "2026-07-06",
  tags: ["launch", "announcement"],
  category: "Announcement",
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_UPDATES: WeeklyUpdate[] = [launchAnnouncement]

export const UPDATE_MAP = Object.fromEntries(
  ALL_UPDATES.map((u) => [u.id, u])
) as Record<string, WeeklyUpdate>

export function getUpdateById(id: string): WeeklyUpdate | undefined {
  return UPDATE_MAP[id]
}
