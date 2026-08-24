// =============================================================================
// EXITCALC — DIGITAL PRODUCTS
// =============================================================================

export interface Product {
  id: string
  name: string
  description: string
  content: string
  price: number
  stripePriceId: string
  features: string[]
  category: string
  downloadPath: string
  emoji: string
  tags: string[]
  dateAdded: string
  /** No checkout or download file yet — show Coming Soon / waitlist. */
  comingSoon?: boolean
}

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

const exitPlanWorkbook: Product = {
  id: "exit-plan-workbook",
  name: "Exit Plan Workbook + Spreadsheet Pack",
  description:
    "A structured 40-page workbook and companion spreadsheet pack that walks you through every step of planning your FIRE exit — from super optimisation to drawdown strategy.",
  content: `## Exit Plan Workbook + Spreadsheet Pack

This is the complete planning toolkit for Australians serious about leaving the 9-to-5. The workbook guides you through the thinking; the spreadsheets do the maths.

### What You Get

- **Exit Plan Workbook (PDF, 40 pages)** — structured chapters covering your current position, FIRE number calculation, super strategy, gap analysis, drawdown plan, and exit timeline
- **Super Projection Spreadsheet** — plug in your salary, contribution rate, and employer match to project your super balance at any age
- **FIRE Number Calculator Spreadsheet** — detailed version of the online calculator with additional scenarios for part-time income, partner super, and rental income
- **Coast-FIRE Tracker** — spreadsheet that shows when you can stop contributing and still reach your target by a given age
- **Drawdown Planner** — models your post-exit spending against portfolio depletion, including super access age rules

### Who It's For

Australians aged 30–50 earning $80k+ who are serious about FIRE but don't have a structured plan yet. You've read the Reddit threads and blog posts — this gives you a step-by-step framework tailored to AU super rules.

### How to Use It

1. Start with the workbook — read chapters 1–3 to understand the framework
2. Fill in your numbers in each companion spreadsheet as you progress
3. Use the scenario tabs to model "what if" changes (e.g., salary sacrifice $10k more per year)
4. Revisit quarterly to update actuals vs. projections

### AU-Specific Details

- Super Guarantee assumptions built in (using the current legislated rate — confirm at ato.gov.au)
- How concessional and non-concessional caps work, with pointers to current ATO limits
- Preservation age rules and transition-to-retirement considerations
- Division 293 tax impact for higher earners`,
  price: 59,
  stripePriceId: "price_1U4Jt5PVyAgWnzPrm2FpenbR",
  features: [
    "40-page Exit Plan Workbook (PDF)",
    "Super Projection Spreadsheet",
    "FIRE Number Calculator Spreadsheet",
    "Coast-FIRE Tracker Spreadsheet",
    "Drawdown Planner Spreadsheet",
    "AU super rules framework (check ATO for current figures)",
    "Scenario modelling tabs",
    "Lifetime updates",
  ],
  category: "Workbook",
  downloadPath: "products/exit-plan-workbook.zip",
  emoji: "\u{1F4D3}",
  tags: ["fire", "workbook", "spreadsheet", "super", "planning"],
  dateAdded: "2026-07-01",
  comingSoon: true,
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_PRODUCTS: Product[] = [exitPlanWorkbook]

export const PRODUCT_MAP = Object.fromEntries(
  ALL_PRODUCTS.map((p) => [p.id, p])
) as Record<string, Product>

export function getProductById(id: string): Product | undefined {
  return PRODUCT_MAP[id]
}
