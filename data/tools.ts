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
    "Project a superannuation balance at a future age from salary, employer SG, salary sacrifice, and a single expected-return assumption.",
  content: `This page is the working Super Projection calculator. Change the inputs and the year-by-year table updates immediately. The result is an illustration of the formula below — not a forecast of your fund, and not personal financial advice.

## What the calculator does

Each year it:

1. Adds employer Super Guarantee as **annual salary × SG rate**.
2. Adds the **salary sacrifice** amount you typed.
3. Applies **15%** to those combined concessional contributions (keeps 85 cents in the dollar).
4. Applies your **expected return** to the new balance, then applies **15%** to those earnings (keeps 85 cents in the dollar).

In code form, for each year from current age to target age:

**gross contributions = salary × (SG% ÷ 100) + salary sacrifice**

**contributions after tax = gross contributions × 0.85**

**earnings after tax = (opening balance + contributions after tax) × (return% ÷ 100) × 0.85**

**closing balance = opening balance + contributions after tax + earnings after tax**

The headline figure is the closing balance in the last year. The optional table is that loop, one row per year.

## Assumptions that are fixed in this version

- **15% contributions tax and 15% earnings tax** are hardcoded. They match the common accumulation-phase concessional rates, not every member's situation. Division 293, tax-free components, and pension-phase earnings are not modelled.
- **Contributions are annual**, not quarterly Super Guarantee cycles.
- **Salary does not grow** unless you change it and re-run.
- **No contribution caps** are enforced. If the salary-sacrifice figure plus SG would exceed the concessional cap, the calculator still accepts it.
- **No fees, insurance premiums, or investment switches.**
- **No inflation adjustment** of the final dollar figure. A 7% nominal return is not the same as a 7% real return.

Confirm current rates, caps, and thresholds on the [ATO website](https://www.ato.gov.au) and [MoneySmart](https://moneysmart.gov.au).

## How to read the result

Compare the projected balance with the **super target** from the [FIRE Number Calculator](/tools/fire-number) (annual expenses × 25 in that tool). This calculator does **not** compute that gap for you. If the projection is lower than the target you have in mind, the levers you can type here are: more salary sacrifice, a later target age, or a different return assumption. Each lever is a trade-off, not a recommendation.

## Related reading

- [How the calculators work](/lessons/how-its-calculated) — formulas for all three tools
- [Super Projection Calculator Walkthrough](/lessons/super-projection-walkthrough)
- [AU Super Tax Rules Explained](/lessons/au-super-tax-rules-2026)`,
  toolType: "Calculator",
  features: [
    "Year-by-year compound projection to a target age",
    "Employer SG and salary-sacrifice inputs",
    "15% concessional contributions tax applied in the model",
    "15% earnings tax applied in the model",
    "Optional year-by-year balance table",
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
    "Estimate a two-bucket Australian FIRE total: a gap fund for the years before preservation age, plus a super target from the 4% rule of thumb.",
  content: `This page is the working FIRE Number calculator. The totals update from the five inputs only. The method is simple arithmetic. It is educational, not a prediction of what you will need, and not personal financial advice.

## What the calculator does

**Gap years = max(preservation age − exit age, 0)**

**Gap fund = annual expenses × gap years**

**Super target = annual expenses × 25**

**Total FIRE number = gap fund + super target**

**Progress % = min(round((current super + current non-super) ÷ total × 100), 100)**

**Non-super shortfall = max(gap fund − current non-super, 0)**

**Super shortfall = max(super target − current super, 0)**

The 25× figure is the same as dividing annual expenses by 0.04 (the 4% rule of thumb).

## What those totals mean

- **Gap fund** is cash-like coverage for every year between exit and preservation age at today's expense figure. The calculator does **not** invest that bucket, apply inflation, or let a remaining balance compound.
- **Super target** is a portfolio size at preservation age, not a present value. The calculator does **not** grow your current super forward to age 60 before comparing it with the target.
- **Progress %** compares today's combined balances with those two future-dated targets. It is a snapshot, not a funded ratio a planner would sign.

## What it does not model

- Age Pension, rent assistance, or other government payments
- Tax on withdrawals, franking credits, or capital gains
- Partner / two-super-account mode (enter household expenses if you want a combined sketch)
- Sequence-of-returns risk, fees, or a drawdown path
- A growing or shrinking spending need after you exit

For the same formulas written next to the Super Projection and Coast-FIRE tools, see [How the calculators work](/lessons/how-its-calculated).

## How to use it

1. Use a full year of actual spending if you can, not a hopeful budget.
2. Set preservation age from the ATO rules for your date of birth — the default of 60 is common, not universal.
3. Treat the total as a **range**: try a lean expense figure and a comfortable one.
4. Then project whether super can reach the super target with the [Super Projection Calculator](/tools/super-projection).

## Related reading

- [What is Your FIRE Number?](/lessons/what-is-fire-number)
- [Your FIRE Number If You Earn $X in AU](/lessons/your-fire-number-au)
- [Drawdown Strategies Post-Exit](/lessons/drawdown-strategies-post-exit)`,
  toolType: "Calculator",
  features: [
    "Two-bucket total: gap fund plus super target",
    "Adjustable exit age and preservation age",
    "Current super and non-super balances as inputs",
    "Simple shortfall lines for each bucket",
    "Progress bar against the combined total (snapshot only)",
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
    "Discount a FIRE number back to today at a single growth rate, then compare it with your current super plus non-super balances.",
  content: `Coast-FIRE, on this site, means: **if you added no further contributions**, would today's balances grow to the FIRE number you typed by the target age? The calculator answers that question with one growth rate. It is an illustration, not a guarantee, and not personal financial advice.

## What the calculator does

**years = max(target age − current age, 1)**

**coast number today = FIRE number ÷ (1 + growth rate)^years**

**current total = current super + current non-super**

If current total ≥ coast number, the tool reports that you have reached Coast-FIRE **under these assumptions**.

If not, it grows current total at the same rate, year by year (up to 50 years), and compares it with the discounted FIRE number at each future age. That produces the optional “years until coast” estimate.

You type the FIRE number yourself. This page does not pull it from the FIRE Number calculator.

## Super and non-super

The two balance fields are **added together** after you enter them. The tool does not keep separate coast numbers, and it does **not** add future employer Super Guarantee if you stop salary sacrificing. In real life, SG can keep landing while you work. If you want to include that, use the [Super Projection Calculator](/tools/super-projection) rather than treating this page as a super-only model.

## Growth rate

The default is a **nominal** percentage. If you want a real (inflation-adjusted) picture, type a lower rate yourself — for example a long-run real equity assumption rather than 7% nominal. The calculator will not convert nominal to real for you.

## What it does not model

- Different returns for super vs. a taxable account
- Sequence-of-returns risk or a market crash in the first years of coasting
- Fees, tax on non-super earnings, or contribution caps
- A spending plan for the years you still work after you stop saving

Re-run the numbers after a large market move. A lower balance or a lower growth assumption moves the coast date.

## Related reading

- [How the calculators work](/lessons/how-its-calculated)
- [Coast-FIRE Calculator Explained](/lessons/coast-fire-explained)
- [Why Savings Rate Beats Returns](/lessons/savings-rate-impact)`,
  toolType: "Calculator",
  features: [
    "Coast number = FIRE number discounted at one growth rate",
    "Super and non-super entered separately, then summed",
    "Adjustable growth rate (nominal unless you enter a real rate)",
    "Progress against the discounted coast number",
    "Optional years-until-coast estimate from a simple loop",
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
