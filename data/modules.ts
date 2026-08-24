// =============================================================================
// EXITCALC — LESSON MODULES
// =============================================================================

export type ModuleLevel = "beginner" | "intermediate" | "advanced"

export interface Module {
  id: string
  title: string
  description: string
  category: string
  level: ModuleLevel
  content: string
  duration: string
  durationMinutes: number
  learningOutcomes: string[]
  tags: string[]
  dateAdded: string
  lastUpdated: string
  status: "published" | "draft"
}

// ---------------------------------------------------------------------------
// Seed Lessons
// ---------------------------------------------------------------------------

const whatIsFireNumber: Module = {
  id: "what-is-fire-number",
  title: "What is Your FIRE Number? (And Why It Matters)",
  description:
    "FIRE stands for Financial Independence, Retire Early. Learn the total you need to retire, how the 4% rule works, and how to calculate yours.",
  category: "fire-planning",
  level: "beginner",
  content: `## What is Your FIRE Number? (And Why It Matters)

FIRE means **Financial Independence, Retire Early**. Your FIRE number is the total amount of money you need invested so withdrawals can cover your spending. In Australia that usually means two buckets: a gap fund outside super until preservation age, plus a super balance sized with a withdrawal-rate rule of thumb (often annual expenses × 25). The dollar result depends on your spending and exit age — see the worked example in [Your FIRE Number If You Earn $X in AU](/lessons/your-fire-number-au), or run the [FIRE Number Calculator](/tools/fire-number). Here's how the method works and why it matters.

### The 4% Safe Withdrawal Rate

The 4% rule comes from the Trinity Study — a landmark piece of research showing that if you withdraw 4% of your portfolio each year, adjusted for inflation, your money has historically lasted 30+ years in almost every market scenario tested.

The formula:

**FIRE Number = Annual Expenses ÷ 0.04**

Which is the same as:

**FIRE Number = Annual Expenses × 25**

### Example: $500k FIRE Number

If you need $20,000 per year in investment income:

$20,000 × 25 = **$500,000**

With $500k invested, you withdraw $20,000/year (4%). Your portfolio survives because long-term market returns historically exceed 4%.

Another example: you spend $60,000 per year.

$60,000 × 25 = **$1,500,000**

Higher expenses = higher FIRE number. Every dollar you cut from annual spending reduces your FIRE number by $25.

### How to Calculate Yours

1. **Add up your annual expenses.** Not your income — your actual spending. Rent or mortgage, food, transport, insurance, subscriptions, everything. Pull your bank statements for the last 12 months if you're not sure.

2. **Multiply by 25.** That's your FIRE number at a 4% withdrawal rate.

3. **Want to be more conservative?** Use 3.5% (multiply by ~29) or 3% (multiply by ~33). A lower withdrawal rate means a bigger number but a safer retirement.

### Why Knowing This Changes Everything

Before you know your FIRE number, retirement is abstract — "someday." After you calculate it, retirement becomes a countdown. You can:

- **Track your progress** as a percentage ("I'm 34% there")
- **Calculate years remaining** based on your savings rate
- **Make spending decisions** through the lens of your number ("this $200/month subscription adds $60,000 to my FIRE number")
- **See the finish line** instead of just running

It turns a vague dream into a concrete plan with a number attached to it.

### Australia-Specific: The Two-Bucket Approach

In Australia, your FIRE number has a twist: superannuation. You can't touch super until preservation age (60 for most people), so you need two buckets:

1. **Gap Fund** — money outside super that covers expenses from your exit age until 60
2. **Super** — your super balance at 60, which funds the rest of your life using the 4% rule

If you exit at 45 with $60k/year expenses, your gap fund needs to cover 15 years ($900k), and your super needs $1.5M at 60. That's why the AU FIRE number is often larger than the simple 25× formula suggests.

Read [Your FIRE Number If You Earn $X in AU](/lessons/your-fire-number-au) for the full AU-specific calculation.

### Calculate Yours Now

Use the [FIRE Number Calculator](/tools/fire-number) — it takes 3 minutes and accounts for super, the gap between exit and preservation age, and your current balances.`,
  duration: "8 min",
  durationMinutes: 8,
  learningOutcomes: [
    "Calculate your FIRE number using the 25× rule",
    "Understand why the 4% safe withdrawal rate works",
    "See how reducing expenses lowers your FIRE number by 25× each dollar cut",
  ],
  tags: ["fire", "fire-number", "4-percent-rule", "beginner"],
  dateAdded: "2026-07-10",
  lastUpdated: "2026-07-10",
  status: "published",
}

const fireNumberAu: Module = {
  id: "your-fire-number-au",
  title: "Your FIRE Number If You Earn $X in AU",
  description:
    "How to calculate the portfolio size you need to retire early in Australia, accounting for super, tax, and the gap between now and preservation age.",
  category: "fire-planning",
  level: "beginner",
  content: `## Your FIRE Number If You Earn $X in AU

Your FIRE number is the investment portfolio size that generates enough passive income to cover your living expenses forever — or at least until super kicks in.

### The Basic Formula

**FIRE Number = Annual Expenses × 25**

This comes from the 4% safe withdrawal rate. If you spend $60,000/year, your FIRE number is $1,500,000.

### But Australia Is Different

The global FIRE formula ignores two things that matter here:

1. **Superannuation** — you have a second pot of money you can't touch until preservation age (60 for most people reading this)
2. **The Gap** — the years between your exit age and when super becomes accessible

### Two-Bucket Approach

**Bucket 1: The Gap Fund** — money outside super that covers expenses from your exit age until you can access super. If you exit at 45 and access super at 60, that's 15 years of expenses.

**Bucket 2: Super** — your superannuation balance at preservation age, which needs to last the rest of your life.

### Worked Example

- Current age: 35
- Target exit age: 45
- Annual expenses: $60,000
- Preservation age: 60

**Gap Fund needed:** 15 years × $60,000 = $900,000 (simplified — in practice you'd invest this and draw down)

**Super needed at 60:** $60,000 × 25 = $1,500,000

So your total FIRE number is $900k accessible + $1.5M in super by 60. The calculators on this site model this precisely with compound growth.

### Try the Calculator

Use the [FIRE Number Calculator](/tools/fire-number) to plug in your actual numbers and see where you stand.`,
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Calculate a basic FIRE number using the 25x rule",
    "Understand the two-bucket approach for AU FIRE planning",
    "Estimate gap fund and super targets for your exit age",
  ],
  tags: ["fire", "basics", "calculator", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const superContribStrategies: Module = {
  id: "super-contribution-strategies",
  title: "Superannuation Contribution Strategies",
  description:
    "Salary sacrifice, non-concessional contributions, spouse splitting, and the carry-forward rule — how to max out super within the caps.",
  category: "superannuation",
  level: "intermediate",
  content: `## Superannuation Contribution Strategies

Super is the most tax-effective vehicle for building your FIRE portfolio in Australia. This lesson covers the levers you can pull. **Contribution caps, thresholds, and tax rates are set by the ATO and change regularly — this lesson explains how each lever works, not the current dollar figures. Confirm the latest limits on the [ATO website](https://www.ato.gov.au) and [MoneySmart](https://moneysmart.gov.au) before acting.**

### Concessional Contributions (Before-Tax)

Concessional (before-tax) contributions are capped at an annual limit set by the ATO. They include:

- Employer Super Guarantee (a legislated percentage of ordinary time earnings)
- Salary sacrifice contributions
- Personal deductible contributions

Tax benefit: they're taxed at super's concessional rate rather than your marginal rate — so the higher your marginal rate, the bigger the saving. Check the current concessional cap and contributions tax rate on the ATO website.

### Salary Sacrifice

Ask your employer to redirect part of your pre-tax salary into super. The contribution is taxed at super's concessional rate instead of your marginal rate. Simple, automatic, and the single most impactful FIRE lever for most employees.

### Carry-Forward Rule

If you haven't used your full concessional cap in recent years and your total super balance is under the ATO's threshold, you may be able to carry forward the unused cap. This is powerful for catch-up contributions after a windfall or bonus. The look-back period and balance threshold are set by the ATO — check current details there.

### Non-Concessional Contributions (After-Tax)

Non-concessional contributions have their own annual cap, plus a bring-forward rule that lets eligible people use several years at once. They don't get a deduction going in, but earnings inside super are taxed concessionally (and can be tax-free in pension phase). Confirm the current cap, bring-forward limit, and eligibility on the ATO website.

### Spouse Contribution Splitting

You can split part of your concessional contributions with your spouse — useful for balancing super between partners so both reach preservation age with adequate balances. The proportion allowed is set by regulation; check current rules.

### Division 293 Tax

Higher earners pay an additional tax on concessional contributions once their income plus contributions exceeds an ATO-defined threshold. Still generally better than paying your marginal rate, but factor it into projections. Check the current Division 293 threshold and rate on the ATO website.

### Strategy for FIRE Seekers

1. Max concessional cap every year via salary sacrifice
2. Use carry-forward if you have unused cap from prior years
3. If you have surplus cash beyond gap-fund needs, consider non-concessional contributions
4. Model the impact using the [Super Projection Calculator](/tools/super-projection)`,
  duration: "14 min",
  durationMinutes: 14,
  learningOutcomes: [
    "Understand how concessional and non-concessional caps work (and where to find current limits)",
    "Use salary sacrifice and carry-forward to maximise super",
    "Understand Division 293 tax and spouse splitting",
  ],
  tags: ["super", "contributions", "salary-sacrifice", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const coastFireExplained: Module = {
  id: "coast-fire-explained",
  title: "Coast-FIRE Calculator Explained",
  description:
    "What Coast-FIRE means, how compound growth does the heavy lifting, and how to use the calculator to find your coast age.",
  category: "fire-planning",
  level: "beginner",
  content: `## Coast-FIRE Calculator Explained

Coast-FIRE is the point where you've saved enough that compound growth alone will carry your super (or investments) to your FIRE number by retirement age — even if you never contribute another dollar.

### Why It Matters

Reaching Coast-FIRE doesn't mean you stop working. It means you can switch to lower-paid work you enjoy, go part-time, or freelance — because the pressure to maximise savings is gone. Your existing portfolio is on autopilot.

### The Maths

**Coast-FIRE Number = FIRE Number / (1 + growth rate) ^ years remaining**

If your FIRE number is $1,500,000 at age 60, the growth rate is 7% (nominal), and you're currently 38:

$1,500,000 / (1.07)^22 = ~$346,000

If your super + investments are already $346,000 at age 38, you've hit Coast-FIRE.

### AU Super Context

Because super compounds with employer contributions even if you stop salary sacrificing, the coast number for your super bucket is even lower. The calculator separates super and non-super assets for this reason.

### Using the Calculator

The [Coast-FIRE Calculator](/tools/coast-fire) lets you input:

- Current age and target retirement age
- Current super balance and non-super investments
- Expected growth rate (default 7% nominal)
- Your target FIRE number

It tells you whether you've already hit Coast-FIRE, and if not, how much more you need to reach it.

### What to Do After Coast-FIRE

- Reduce work hours or switch to a passion project
- Stop salary sacrificing and redirect income to lifestyle
- Keep employer SG contributions flowing (free money)
- Revisit annually — market swings can move your coast date`,
  duration: "8 min",
  durationMinutes: 8,
  learningOutcomes: [
    "Define Coast-FIRE and calculate the coast number",
    "Understand how compound growth carries the portfolio",
    "Use the Coast-FIRE Calculator with AU super context",
  ],
  tags: ["coast-fire", "compound-growth", "calculator", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const workbookOverview: Module = {
  id: "exit-plan-workbook-overview",
  title: "Exit Plan Workbook Overview",
  description:
    "A guided tour of the Exit Plan Workbook — what each chapter covers, how the companion spreadsheets connect, and how to work through it.",
  category: "exit-strategy",
  level: "beginner",
  content: `## Exit Plan Workbook Overview

The Exit Plan Workbook is a structured, chapter-by-chapter guide to building your personal FIRE exit plan. This lesson walks you through what's inside so you know what to expect.

### Chapter 1: Your Current Position

Where you are right now — income, expenses, super balance, non-super investments, debts. The companion spreadsheet has a "Current Position" tab to capture everything in one place.

### Chapter 2: Your FIRE Number

Calculate your personal FIRE number using the two-bucket approach (gap fund + super). The spreadsheet models this with adjustable assumptions for inflation, growth rates, and spending changes.

### Chapter 3: Super Strategy

Which contribution levers to pull and in what order. Walks you through salary sacrifice calculations, carry-forward eligibility, and non-concessional timing.

### Chapter 4: Gap Analysis

The difference between where you are and where you need to be. The spreadsheet calculates your savings rate requirement and shows the impact of adjustments (e.g., "what if I save $500 more per month?").

### Chapter 5: Drawdown Plan

How you'll fund living expenses after exit but before super access. Models different drawdown strategies: bucket approach, bond tent, dynamic withdrawal.

### Chapter 6: Exit Timeline

Pulls everything together into a year-by-year projection from now to your target exit date and beyond. The spreadsheet generates a visual timeline chart.

### How to Work Through It

Spend 2–3 hours on your first pass. Fill in real numbers, not aspirational ones. Then revisit quarterly to update actuals. The workbook is designed to be a living document, not a one-time read.

### Get the Workbook

The [Exit Plan Workbook + Spreadsheet Pack](/products/exit-plan-workbook) is coming soon — join the waitlist for chapters and companion spreadsheets.`,
  duration: "8 min",
  durationMinutes: 8,
  learningOutcomes: [
    "Understand the six chapters of the Exit Plan Workbook",
    "Know how the companion spreadsheets connect to each chapter",
    "Plan a realistic timeline for working through the material",
  ],
  tags: ["workbook", "overview", "planning", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const superTaxRules: Module = {
  id: "au-super-tax-rules-2026",
  title: "AU Super Tax Rules Explained",
  description:
    "How concessional/non-concessional caps, Division 293, preservation age, and transition-to-retirement work — plus where to find the current figures.",
  category: "superannuation",
  level: "intermediate",
  content: `## AU Super Tax Rules Explained

This is a reference lesson covering how the key super tax rules work. **The specific dollar figures, caps, thresholds, and rates are set by the ATO and change regularly — most are indexed each year. This lesson deliberately avoids quoting numbers that go stale. For every current figure, check the [ATO website](https://www.ato.gov.au) and [MoneySmart](https://moneysmart.gov.au).**

### Contribution Caps

- **Concessional (before-tax) cap:** an annual limit covering employer SG, salary sacrifice, and personal deductible contributions
- **Non-concessional (after-tax) cap:** a separate annual limit, with a bring-forward option that lets eligible people use several years' worth at once
- **Carry-forward:** unused concessional cap from recent years may be available if your total super balance is under the ATO threshold

Current cap amounts, the bring-forward limit, the look-back period, and the balance threshold are all published by the ATO.

### Tax on Contributions

- Concessional contributions are taxed at a concessional rate inside the fund — lower than most people's marginal rate
- Non-concessional contributions come from already-taxed money, so there's no further tax going in
- **Division 293:** higher earners pay an extra tax on concessional contributions once income plus contributions exceeds an ATO-defined threshold

Check the current rates and the Division 293 threshold on the ATO website.

### Tax on Earnings

- **Accumulation phase:** investment earnings are taxed at a concessional rate
- **Pension phase:** earnings can be tax-free, up to the transfer balance cap (below)

### Preservation Age

Preservation age is the earliest you can normally access super, and it depends on your date of birth (it's 60 for most people now). You cannot access super earlier except in limited hardship circumstances. Confirm your preservation age on the ATO website.

### Transition to Retirement (TTR)

From preservation age you can start a TTR pension while still working, drawing a regulated percentage of your balance each year. Useful for easing down work hours while supplementing income. Current drawdown limits are on the ATO and MoneySmart sites.

### Super Guarantee Rate

Employers must pay a legislated percentage of your ordinary time earnings into super. The rate has stepped up over recent years — check the current Super Guarantee rate on the ATO website.

### Transfer Balance Cap

When you start a retirement-phase pension, there's a lifetime cap on how much you can move from accumulation into the tax-free pension phase. It's indexed, so it changes over time; amounts above it stay in accumulation. Check the current transfer balance cap on the ATO website.

### Key Dates

- **30 June** — end of financial year, deadline for contribution strategies
- **28 days after quarter end** — employer SG payment deadline
- **October** — ATO annual determination of indexed caps (if applicable)`,
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Understand how concessional and non-concessional caps work",
    "Understand what Division 293 is and when it applies",
    "Know where to find current preservation age, TTR, and transfer balance cap figures",
  ],
  tags: ["super", "tax", "rules", "reference", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const sideIncomeFire: Module = {
  id: "side-income-for-fire",
  title: "Side Income for FIRE",
  description:
    "Building income streams outside your day job to accelerate FIRE — freelancing, digital products, rental income, and dividend portfolios.",
  category: "exit-strategy",
  level: "intermediate",
  content: `## Side Income for FIRE

Your savings rate is the biggest lever for reaching FIRE faster. Side income lets you increase it without cutting expenses further.

### Why Side Income Accelerates FIRE

Every extra dollar of side income can go straight to investments. If your expenses are already covered by your salary, side income is pure savings rate fuel. An extra $1,000/month invested at 7% growth for 10 years adds roughly $173,000 to your portfolio.

### Option 1: Freelancing / Consulting

Leverage your professional skills outside of work hours. Software development, design, writing, accounting — any expertise has a market.

- **Time required:** 5–15 hrs/week
- **Income potential:** $2,000–$10,000/month
- **FIRE benefit:** high income, but trades time for money

### Option 2: Digital Products

Create once, sell repeatedly. Ebooks, templates, courses, spreadsheets.

- **Time required:** heavy upfront, light ongoing
- **Income potential:** $500–$5,000/month at scale
- **FIRE benefit:** passive-ish income that continues post-exit

### Option 3: Rental Income

Property investment is deeply ingrained in Australian FIRE culture. Rental yields plus capital growth plus negative gearing tax benefits.

- **Capital required:** deposit + stamp duty (significant)
- **Income potential:** net yield 2–4% on property value
- **FIRE benefit:** inflation-hedged income stream, but illiquid

### Option 4: Dividend Portfolio

Build a portfolio of high-dividend ASX stocks or ETFs. Franking credits make Australian dividends particularly tax-effective.

- **Capital required:** portfolio needs to be substantial for meaningful income
- **Income potential:** 4–6% gross yield with franking
- **FIRE benefit:** truly passive, liquid, and grows with the market

### Tax Considerations

Side income is taxable at your marginal rate. Consider:

- Structuring through a company or trust if income is significant
- Salary sacrificing side income into super (concessional cap permitting)
- Keeping records for all deductions related to the income source`,
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Evaluate four side income options for FIRE acceleration",
    "Estimate the portfolio impact of additional income",
    "Consider AU tax implications of side income",
  ],
  tags: ["side-income", "acceleration", "investing", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const drawdownStrategies: Module = {
  id: "drawdown-strategies-post-exit",
  title: "Drawdown Strategies Post-Exit",
  description:
    "How to fund your life after exiting the 9-to-5 but before accessing super — bucket strategy, bond tent, and dynamic withdrawal.",
  category: "exit-strategy",
  level: "advanced",
  content: `## Drawdown Strategies Post-Exit

You've reached your FIRE number and walked away from the salary. Now you need to fund 15–20 years of living expenses before super becomes accessible at 60. This is the hardest part of AU FIRE planning.

### The Problem: Sequence-of-Returns Risk

If the market crashes in your first few years of drawdown, you're selling investments at a loss to fund expenses. This can permanently deplete your portfolio even if long-term returns are fine.

### Strategy 1: Bucket Approach

Divide your gap fund into three buckets:

- **Bucket 1 (1–2 years):** Cash and term deposits. Covers near-term expenses regardless of market conditions.
- **Bucket 2 (3–5 years):** Bonds, fixed income, defensive ETFs. Moderate growth, low volatility.
- **Bucket 3 (6+ years):** Growth assets (equities, property). Time to recover from any downturns.

Refill Bucket 1 from Bucket 2 annually. Refill Bucket 2 from Bucket 3 when markets are up. Never sell from Bucket 3 during a downturn.

### Strategy 2: Bond Tent

Hold a higher allocation to bonds (40–60%) in the years immediately surrounding your exit date (e.g., 3 years before to 5 years after). Gradually shift back to growth assets over time.

This specifically mitigates sequence-of-returns risk during the most vulnerable period.

### Strategy 3: Dynamic Withdrawal

Instead of a fixed 4% withdrawal, adjust based on portfolio performance:

- **Market up >10%:** withdraw 4.5%
- **Market flat:** withdraw 4%
- **Market down >10%:** withdraw 3.5% and cut discretionary spending

This extends portfolio longevity significantly but requires spending flexibility.

### AU-Specific Considerations

- You can access super at 60, so the gap fund only needs to last until then
- Transition-to-Retirement (TTR) pensions are available from preservation age
- Franked dividends from Australian equities provide tax-effective income
- Capital gains discount (50%) applies to assets held >12 months

### Modelling Your Drawdown

The [Exit Plan Workbook](/products/exit-plan-workbook) (coming soon) will include a Drawdown Planner spreadsheet that models all three strategies with your actual numbers.`,
  duration: "16 min",
  durationMinutes: 16,
  learningOutcomes: [
    "Understand sequence-of-returns risk and why it matters post-exit",
    "Compare bucket, bond tent, and dynamic withdrawal strategies",
    "Model drawdown scenarios for the gap between exit and super access",
  ],
  tags: ["drawdown", "retirement", "risk", "advanced"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const propertyExitPlan: Module = {
  id: "property-in-your-exit-plan",
  title: "Property in Your Exit Plan",
  description:
    "How investment property fits into an AU FIRE plan — rental yield, negative gearing, CGT discount, and the PPOR decision.",
  category: "exit-strategy",
  level: "intermediate",
  content: `## Property in Your Exit Plan

Property is a cornerstone of Australian wealth-building culture, but it interacts with FIRE planning in nuanced ways. This lesson covers the key considerations.

### Rental Income as FIRE Income

Investment property can provide steady income post-exit. Gross rental yields in AU typically range from 3–5%, depending on location and property type.

Post-exit, rental income is taxed at your marginal rate — but if your only income is rent and dividends, your effective rate may be very low thanks to the tax-free threshold and low-income offsets (check current amounts at ato.gov.au).

### Negative Gearing

If your rental property runs at a loss (interest + expenses > rental income), the loss offsets your other taxable income. This is valuable while you're working but becomes less useful post-exit when your income is lower.

**FIRE implication:** Negatively geared properties are best held during your accumulation phase. Consider switching to positively geared properties (or paying down the mortgage) before exit.

### Capital Gains Tax (CGT) Discount

If you hold an investment property for >12 months, you get a 50% CGT discount on sale. This makes property a tax-effective vehicle for long-term growth.

### The PPOR Decision

Your primary place of residence (PPOR) is CGT-free. Some FIRE planners:

- Pay off the PPOR to reduce ongoing expenses (no rent/mortgage = lower FIRE number)
- Rent instead and invest the capital for higher returns
- Use the 6-year rule to rent out a former PPOR while maintaining CGT-free status

There's no universally right answer — it depends on your local market, interest rates, and personal preferences.

### Property Inside Super (SMSF)

Self-managed super funds can hold property, but the rules are complex:

- Must meet the sole-purpose test
- Cannot be lived in by you or related parties
- Limited recourse borrowing arrangements (LRBAs) are available but add risk
- Minimum balance of ~$200k+ recommended before considering SMSF

### Modelling Property in Your Plan

The Exit Plan Workbook includes a property analysis tab that models rental yield, mortgage repayments, tax implications, and how property fits into your overall FIRE timeline.`,
  duration: "14 min",
  durationMinutes: 14,
  learningOutcomes: [
    "Evaluate rental property as a FIRE income source",
    "Understand negative gearing timing for FIRE exit",
    "Compare PPOR ownership vs. renting in a FIRE context",
  ],
  tags: ["property", "investment", "cgt", "ppor", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const superProjectionLesson: Module = {
  id: "super-projection-walkthrough",
  title: "Super Projection Calculator Walkthrough",
  description:
    "How to use the Super Projection calculator — input your salary, contribution rate, and growth assumptions to see your projected super balance.",
  category: "superannuation",
  level: "beginner",
  content: `## Super Projection Calculator Walkthrough

The [Super Projection Calculator](/tools/super-projection) models what your super balance will look like at any future age based on your current inputs. This lesson explains the inputs, assumptions, and how to interpret the results.

### Inputs

- **Current age** — your age today
- **Target age** — the age you want to project to (e.g., 60 for preservation age)
- **Current super balance** — your total super balance right now
- **Annual salary** — your gross annual salary before tax
- **Employer SG rate** — the Super Guarantee rate (the calculator pre-fills the current legislated rate; confirm it at ato.gov.au)
- **Salary sacrifice** — any additional pre-tax contributions per year
- **Investment return** — expected annual return (default 7% nominal)

### What the Calculator Does

It compounds your existing balance forward, adding employer SG and salary sacrifice contributions each year, then applying the expected return. The result is your projected super balance at the target age.

### Key Assumptions

- Contributions are made annually (simplified from quarterly)
- Investment returns are applied after contributions for each year
- The concessional tax rates that apply to contributions and earnings inside super (current rates at ato.gov.au)
- Salary is assumed constant (adjust for real terms or re-run periodically)

### How to Use the Results

The projected balance tells you whether your super alone will be enough for the "Bucket 2" portion of your FIRE plan. Compare it to your FIRE number for the super bucket.

If it's short, the calculator shows the gap — which you can close by:

1. Increasing salary sacrifice
2. Making non-concessional contributions
3. Extending your working years by 1–2 years
4. Targeting a higher return (with proportionally more risk)

### Try It Now

Open the [Super Projection Calculator](/tools/super-projection) and plug in your real numbers.`,
  duration: "6 min",
  durationMinutes: 6,
  learningOutcomes: [
    "Use the Super Projection Calculator with real inputs",
    "Understand the assumptions behind the projection",
    "Identify strategies to close a super shortfall",
  ],
  tags: ["super", "projection", "calculator", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const savingsRateImpact: Module = {
  id: "savings-rate-impact",
  title: "Why Savings Rate Beats Returns",
  description:
    "The maths behind why your savings rate matters more than investment returns in the early years — and when that flips.",
  category: "fire-planning",
  level: "beginner",
  content: `## Why Savings Rate Beats Returns

In the FIRE community you'll hear endless debate about index funds vs. individual stocks, growth vs. value, Australian vs. international. But the single biggest driver of reaching FIRE faster is your savings rate.

### The Maths

If you earn $100,000 and save 20% ($20,000/year), your savings rate drives the outcome far more than whether you earn 6% or 8% returns — in the first decade, anyway.

**Scenario A:** $20,000/year saved, 7% return = $295,000 after 10 years
**Scenario B:** $20,000/year saved, 9% return = $328,000 after 10 years
**Scenario C:** $30,000/year saved, 7% return = $443,000 after 10 years

The $10,000/year increase in savings (Scenario C) added $148,000. The 2% increase in returns (Scenario B) added only $33,000.

### The Crossover Point

There's a point where your portfolio is large enough that returns dominate. Once your portfolio is 5–10x your annual savings, return differences start mattering more than savings rate changes.

For most Australians targeting FIRE, this crossover happens around years 10–15. Before that: maximise savings rate. After that: optimise allocation.

### Practical Implications

1. **Early career:** focus ruthlessly on savings rate — salary sacrifice, reduce expenses, build side income
2. **Mid accumulation:** maintain savings rate but start paying attention to asset allocation
3. **Late accumulation / Coast-FIRE:** returns are now the dominant factor — make sure your allocation matches your timeline

### How to Increase Your Savings Rate

- Salary sacrifice into super (pre-tax savings are 30–47% more efficient)
- Track spending for one month — most people find $500–$1,000/month in cuttable expenses
- Negotiate salary — a $10,000 raise at 50% savings rate adds $5,000/year to investments
- Avoid lifestyle inflation when income increases

### Your Savings Rate

Calculate it: (Income - Expenses) / Income × 100. A 50%+ savings rate is the sweet spot for reaching FIRE in 12–17 years from zero.`,
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Understand why savings rate dominates returns in early years",
    "Know the crossover point where returns start mattering more",
    "Calculate and optimise your personal savings rate",
  ],
  tags: ["savings-rate", "returns", "fundamentals", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const investingOutsideSuper: Module = {
  id: "investing-outside-super",
  title: "Investing Outside Super for the Gap",
  description:
    "Where to put the money that funds your life between exit and super access — ETFs, LICs, bonds, and offset accounts.",
  category: "fire-planning",
  level: "intermediate",
  content: `## Investing Outside Super for the Gap

Your gap fund is the money that covers expenses from your FIRE exit until you can access super at 60. Where you invest this matters as much as how much you save.

### The Goal

You need this money to:

1. Grow enough to cover 10–20 years of expenses
2. Be accessible (not locked in super)
3. Survive a market downturn in the early years

### Option 1: Index ETFs (Equities)

Broad market ETFs like VAS (ASX 300), VGS (international), or VDHG (diversified) are the go-to for FIRE investors.

- **Pros:** Low fees, diversified, liquid, historically 7–10% returns
- **Cons:** Volatile — can drop 30%+ in a crash
- **Best for:** The growth portion of your gap fund (Bucket 3 in the drawdown strategy)

### Option 2: Bond ETFs / Fixed Income

Bond ETFs like VAF (AU bonds) or VIF (international bonds) provide stability.

- **Pros:** Lower volatility, predictable income
- **Cons:** Lower returns (3–5%), interest rate sensitive
- **Best for:** The defensive portion (Bucket 2) and the bond tent strategy

### Option 3: Listed Investment Companies (LICs)

LICs like AFIC, Argo, or Milton have a long AU track record and smooth dividends.

- **Pros:** Steady fully-franked dividends, buy-and-hold friendly
- **Cons:** Can trade at premium/discount to NTA, less diversified than broad ETFs
- **Best for:** Income-focused investors who want quarterly dividends

### Option 4: Mortgage Offset Account

If you have a home loan, money in the offset account effectively earns your mortgage interest rate (tax-free).

- **Pros:** Risk-free, tax-free, liquid
- **Cons:** Opportunity cost if mortgage rate < expected investment returns
- **Best for:** Cash bucket (Bucket 1) — beats savings accounts for most people

### Sample Gap Fund Allocation

- **Bucket 1 (1–2 years):** Offset account or term deposits — $120,000
- **Bucket 2 (3–5 years):** Bond ETFs — $180,000
- **Bucket 3 (6+ years):** Equity ETFs — remaining balance

Adjust based on your risk tolerance and years until super access.`,
  duration: "14 min",
  durationMinutes: 14,
  learningOutcomes: [
    "Compare ETFs, bonds, LICs, and offset accounts for gap funding",
    "Allocate gap fund across buckets by time horizon",
    "Understand the tax implications of each investment type",
  ],
  tags: ["investing", "gap-fund", "etf", "bonds", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

const fireNumberPartner: Module = {
  id: "fire-as-a-couple",
  title: "FIRE as a Couple in AU",
  description:
    "How to plan FIRE when there are two incomes, two super accounts, and two opinions — shared goals, split strategies, and combined projections.",
  category: "fire-planning",
  level: "intermediate",
  content: `## FIRE as a Couple in AU

Two incomes accelerate FIRE dramatically, but two people also means two sets of super, potentially different risk tolerances, and the need for aligned goals.

### Combined FIRE Number

Your household FIRE number is based on shared expenses, not individual ones. If you spend $90,000/year as a couple:

- **Gap Fund:** 15 years × $90,000 = $1,350,000 (combined, accessible)
- **Super at 60:** $90,000 × 25 = $2,250,000 (combined across both accounts)

### Super Splitting Strategy

If one partner earns significantly more, super splitting can:

- Balance preservation-age access (both partners have adequate super)
- Reduce Division 293 tax for the higher earner
- Ensure both partners are financially independent

### Who Exits First?

A common pattern: the higher earner keeps working 1–2 years longer while the lower earner exits first. This:

- Maintains one income stream during the transition
- Allows the remaining earner to salary sacrifice aggressively
- Reduces the psychological shock of going from two incomes to zero

### Shared vs. Separate Finances

For FIRE planning, you need visibility across both sets of accounts. Whether you maintain joint or separate bank accounts is personal — but the FIRE plan needs to be holistic.

### What If One Partner Isn't Interested?

This is common. Focus on:

1. Agreeing on shared spending targets (doesn't require the word "FIRE")
2. Showing the concrete timeline ("we could both go part-time in 8 years")
3. Respecting different money perspectives — compromise on a middle path

### Modelling as a Couple

The Exit Plan Workbook includes dual-income tabs in every spreadsheet. The FIRE Number Calculator also supports partner mode with separate super balances.`,
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Calculate a combined FIRE number for a couple",
    "Use super splitting to optimise across two accounts",
    "Navigate partner alignment on FIRE goals",
  ],
  tags: ["couple", "partner", "super-splitting", "intermediate"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-01",
  status: "published",
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_MODULES: Module[] = [
  whatIsFireNumber,
  fireNumberAu,
  superContribStrategies,
  coastFireExplained,
  workbookOverview,
  superTaxRules,
  superProjectionLesson,
  savingsRateImpact,
  sideIncomeFire,
  drawdownStrategies,
  propertyExitPlan,
  investingOutsideSuper,
  fireNumberPartner,
]

export const MODULE_MAP = Object.fromEntries(
  ALL_MODULES.map((m) => [m.id, m])
) as Record<string, Module>

export function getModuleById(id: string): Module | undefined {
  return MODULE_MAP[id]
}
