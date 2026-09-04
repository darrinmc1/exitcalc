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
  description:
    "Three free AU FIRE calculators and 14 written lessons. The Exit Plan Workbook is Coming Soon.",
  content: `## ExitCalc Is Live

ExitCalc is for Australian FIRE planning: superannuation, preservation age, and the years between leaving work and accessing super. The tools are educational calculators, not personal financial advice.

### What is live

**Three calculators** (no sign-up):

- [Super Projection](/tools/super-projection) — salary, SG, salary sacrifice, one return rate, 15% concessional tax in the model
- [FIRE Number](/tools/fire-number) — gap fund (expenses × years to preservation age) plus super target (expenses × 25)
- [Coast-FIRE](/tools/coast-fire) — one FIRE number discounted at one growth rate versus today's balances

Formulas: [How the calculators work](/lessons/how-its-calculated).

**14 written lessons** in the [lesson list](/lessons), including the methodology page above.

### What is not live

- The [Exit Plan Workbook + Spreadsheet Pack](/products/exit-plan-workbook) is listed and is **Coming Soon**. There is no checkout and no file to download.
- There is no second catalog of calculators, videos, or a community forum on this site. If a /tools/ or /products/ address is not one of the items above, it shows Coming Soon.

Thanks for reading the actual inventory.`,
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
