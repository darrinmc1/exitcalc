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

const module1: Module = {
  id: "what-is-fire-au",
  title: "What is FIRE and Can You Actually Do It in Australia?",
  description:
    "An introduction to the Financial Independence, Retire Early movement tailored for Australians, covering the core concepts and whether FIRE is realistic Down Under.",
  category: "fire-basics",
  level: "beginner",
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Define what FIRE means and its core philosophy",
    "Identify the main FIRE variants (Lean, Fat, Barista, Coast)",
    "Understand why Australia's super system gives you a structural advantage",
    "Assess whether FIRE is realistic for your personal situation",
  ],
  tags: ["fire", "introduction", "australia", "financial-independence"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## What is FIRE?

FIRE stands for **Financial Independence, Retire Early**. At its heart, the idea is dead simple: save and invest aggressively so that your investment income covers your living expenses, and you never *have* to work again. That does not mean you stop doing meaningful work -- it means work becomes optional.

### The Core Maths

The whole movement boils down to one equation:

**Annual expenses x 25 = Your FIRE number**

If you spend $60,000 a year, your FIRE number is $1,500,000. That figure assumes you can safely withdraw 4% of your portfolio each year without running out of money (the so-called "4% rule", based on the Trinity Study from the US).

### FIRE Flavours

| Variant | What It Means |
|---------|--------------|
| **Lean FIRE** | Retire on a minimal budget (under $40k/yr) |
| **Fat FIRE** | Retire comfortably ($80k-$120k+/yr) |
| **Barista FIRE** | Semi-retire; work part-time to cover some expenses |
| **Coast FIRE** | Stop saving; let existing investments compound to your target by retirement age |

### Can You Actually Do This in Australia?

Short answer: yes, and in some ways it is *easier* here than in the US.

**Why Australia has structural advantages:**

- **Compulsory superannuation.** Your employer is already putting 11.5% of your salary into super. That is forced savings most countries do not have.
- **Medicare.** Unlike Americans chasing FIRE, you are not going to go bankrupt from a hospital bill. Public healthcare removes one of the biggest risks.
- **Franking credits.** Dividends from Australian companies come with tax credits attached, which can meaningfully boost your after-tax returns.
- **Capital gains tax discount.** Hold an asset for more than 12 months and you only pay CGT on half the gain.

**The challenges:**

- **Property prices.** Housing in Sydney and Melbourne is eye-wateringly expensive, making the savings phase harder if you are paying off a mortgage.
- **Preservation age.** You cannot touch your super until at least age 60 (for most people). That means you need enough *outside* super to bridge the gap from early retirement to preservation age.
- **Cost of living.** Groceries, insurance, and utilities are not cheap. Your FIRE number may be higher than you expect.

### Is FIRE Realistic for You?

FIRE is not an all-or-nothing proposition. Even if full early retirement at 40 feels out of reach, moving the needle from retiring at 67 to 55 is a massive win. Every dollar you save and invest buys you more freedom.

The key variables are:
1. **Your savings rate** -- the percentage of take-home pay you invest
2. **Your investment returns** -- historically 7-10% nominal for diversified shares
3. **Your annual spending** -- the single biggest lever you control

A savings rate of 50% gets you to financial independence in roughly 17 years. At 30%, it takes about 28 years. At 70%, you are looking at around 8 years.

### Getting Started

Before you do anything else:
- Track your spending for one month (use an app like Frollo or a spreadsheet)
- Calculate your current savings rate
- Run a rough FIRE number using the 25x rule

The rest of this course will walk you through every piece of the puzzle, from super strategies to tax optimisation to drawdown planning. Let us get into it.
`,
}

const module2: Module = {
  id: "how-super-works",
  title:
    "How Superannuation Works (And Why It's Your Secret FIRE Weapon)",
  description:
    "A plain-English breakdown of Australia's superannuation system and how to leverage it as the cornerstone of your FIRE strategy.",
  category: "super",
  level: "beginner",
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Explain how the superannuation guarantee works and the current SG rate",
    "Distinguish between concessional and non-concessional contributions",
    "Understand preservation age rules and conditions of release",
    "Identify how super fits into a two-bucket FIRE strategy",
  ],
  tags: ["superannuation", "sg-rate", "contributions", "preservation-age"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## How Superannuation Works

Superannuation is Australia's compulsory retirement savings system, and if you are chasing FIRE, it is arguably your single greatest structural advantage. Here is how it works in plain English.

### The Superannuation Guarantee (SG)

Your employer is legally required to contribute **11.5%** of your ordinary time earnings into a super fund on your behalf. This is called the Superannuation Guarantee (SG). The rate is legislated to increase to 12% by 2025-26 and remains at 12% going forward.

That money goes into your chosen super fund (or a default fund if you have not picked one) and gets invested in a mix of shares, property, bonds, and cash.

### Where Your Super Gets Invested

Most super funds offer several investment options:

- **Growth / High Growth** -- heavy on shares (70-90% equities). Higher volatility, higher long-term returns.
- **Balanced** -- the default for most funds. Roughly 60/40 shares to bonds.
- **Conservative** -- mostly bonds and cash. Lower returns, lower volatility.
- **Indexed options** -- some funds offer low-fee index options that simply track the ASX 200 or an international index.

**FIRE tip:** If you are decades from preservation age, consider a high-growth or indexed option. The fees are often lower and the long-term returns tend to beat actively managed balanced funds.

### Concessional vs Non-Concessional Contributions

This is where super gets interesting for FIRE planners.

| Type | What It Is | Cap (2026-27) | Tax Treatment |
|------|-----------|---------------|---------------|
| **Concessional** | Employer SG + salary sacrifice + personal deductible contributions | $30,000/yr | Taxed at 15% in the fund (instead of your marginal rate) |
| **Non-concessional** | After-tax money you put in voluntarily | $120,000/yr | No tax on the way in; earnings taxed at 15% |

If you earn $120,000 and your marginal rate is 32.5% (plus Medicare levy), every dollar you salary sacrifice into super saves you roughly 17.5 cents in tax. On $10,000 of salary sacrifice, that is $1,750 back in your pocket -- or rather, in your super balance where it compounds for decades.

### Division 293 Tax

Heads up for higher earners: if your income plus super contributions exceed $250,000, you cop an extra 15% tax on the concessional contributions that push you over the threshold. Your effective super tax rate becomes 30% on those contributions. Still better than the top marginal rate of 45%, but worth knowing.

### Preservation Age and Conditions of Release

Here is the catch: **you cannot touch your super until you reach preservation age**, which is **60** for anyone born after 1 July 1964. You also need to meet a condition of release, which usually means retiring or turning 65.

This is why FIRE planning in Australia is a two-bucket problem:

1. **Bucket 1 (outside super):** Investments you can access before 60 -- shares, ETFs, offset accounts, cash.
2. **Bucket 2 (inside super):** Your super balance, which you draw on from age 60 onwards (tax-free in most cases).

### Why Super is a FIRE Weapon

- **15% tax on earnings** inside super vs your marginal rate outside
- **0% tax on earnings** once you move to pension phase (after preservation age)
- **Employer contributions are free money** -- 11.5% you did not have to earn yourself
- **Compound interest** over 20-30 years inside a low-tax environment is enormously powerful

### Action Steps

1. Log in to your super fund and check your investment option -- are you in the right one for your timeline?
2. Check if your fund offers a low-fee indexed option
3. Consider salary sacrificing even $200/month -- it adds up fast
4. Consolidate multiple super accounts to avoid paying fees on dormant accounts (use myGov to find lost super)
`,
}

const module3: Module = {
  id: "calculating-fire-number-au",
  title: "Calculating Your FIRE Number: The AU Version",
  description:
    "How to calculate your personal FIRE number using Australian-specific variables like super, Medicare, franking credits, and the two-bucket approach.",
  category: "fire-basics",
  level: "beginner",
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Calculate your annual expenses accurately using AU cost benchmarks",
    "Apply the 25x rule adjusted for Australian tax and super considerations",
    "Build a two-bucket FIRE number separating pre-super and post-super needs",
    "Use franking credits and CGT discounts in your return assumptions",
  ],
  tags: ["fire-number", "calculations", "4-percent-rule", "expenses"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## Calculating Your FIRE Number

The FIRE number is the total invested wealth you need so that your portfolio generates enough income to cover your living expenses indefinitely. In Australia, you need to think about this differently from the standard US-centric advice.

### Step 1: Know Your Annual Expenses

Before you can calculate anything, you need a clear picture of what you actually spend. Not what you think you spend -- what you *actually* spend.

Track every dollar for at least one month (three is better). Here are typical annual expense categories for an Australian household:

| Category | Single | Couple |
|----------|--------|--------|
| Housing (rent or mortgage) | $18,000-$30,000 | $20,000-$36,000 |
| Groceries & dining | $8,000-$12,000 | $12,000-$18,000 |
| Transport | $5,000-$10,000 | $7,000-$14,000 |
| Utilities & internet | $3,000-$5,000 | $3,500-$6,000 |
| Insurance (health, car, home) | $3,000-$6,000 | $5,000-$9,000 |
| Entertainment & travel | $3,000-$8,000 | $5,000-$12,000 |
| Everything else | $3,000-$6,000 | $4,000-$8,000 |

A common range for a comfortable single person is $45,000-$65,000 per year. Couples often land between $60,000-$90,000.

### Step 2: The 25x Rule (With AU Adjustments)

The classic formula is simple:

**FIRE Number = Annual Expenses x 25**

This assumes a 4% safe withdrawal rate (SWR). Some Australian researchers argue a 3.5% SWR is more appropriate for Australian equities, which would push your multiplier to roughly 28.5x. We will use 25x as the baseline but note the conservative option.

**Example:** $60,000/year x 25 = **$1,500,000**

### Step 3: The Two-Bucket Split

Here is where it gets uniquely Australian. You cannot access super until age 60, so you need two numbers:

**Bucket 1 -- Outside Super (accessible now)**
This covers your expenses from early retirement until preservation age.

If you plan to retire at 45 and your preservation age is 60, that is 15 years of expenses.

$60,000 x 15 = $900,000 in accessible investments

But your investments will keep growing during drawdown, so you do not need the full amount in cash. A more realistic figure accounts for investment returns minus withdrawals. Using a conservative 5% real return, you might need closer to $700,000-$750,000.

**Bucket 2 -- Inside Super (accessible from 60)**
This covers you from preservation age onwards.

If you need $60,000/year from age 60, you need:

$60,000 x 25 = $1,500,000 in super at age 60

But your super is already growing. If you have $300,000 in super at age 45, compounding at 7% real for 15 years gives you roughly $827,000. You may only need to top it up slightly.

### Step 4: Factor in AU-Specific Boosts

**Franking credits:** Australian shares pay dividends with franking credits attached. A fully franked dividend of $700 comes with $300 in franking credits. If your marginal tax rate in retirement is below 30%, you get a refund. This effectively boosts your yield.

**Capital gains tax discount:** Assets held for more than 12 months qualify for a 50% CGT discount. This means your effective tax on gains is roughly half your marginal rate.

**Medicare:** Public healthcare means your insurance costs in retirement are dramatically lower than in the US. Budget for private health insurance if you want it, but it is not a survival necessity.

### Your Personalised Formula

1. Calculate annual expenses: $______
2. Multiply by 25 for your total FIRE number: $______
3. Calculate years between planned retirement age and 60: ______
4. Bucket 1 (outside super) = annual expenses x gap years (adjusted for growth): $______
5. Bucket 2 (inside super at age 60) = annual expenses x 25: $______
6. Check current super balance and project forward to age 60

### Common Mistakes

- Forgetting to include inflation in long-term projections
- Ignoring the cost of private health insurance after 30 (Lifetime Health Cover loading)
- Not accounting for Age Pension eligibility (which can reduce your FIRE number)
- Using pre-tax income instead of actual spending to set the target
`,
}

const module4: Module = {
  id: "coast-fire",
  title:
    "Coast-FIRE: Stop Contributing Now and Let Compound Interest Do the Work",
  description:
    "Understand Coast-FIRE and how to calculate whether your existing super and investments will compound to your retirement target without any further contributions.",
  category: "fire-strategies",
  level: "intermediate",
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Define Coast-FIRE and how it differs from full FIRE",
    "Calculate your Coast-FIRE number for a given target retirement age",
    "Understand the impact of different real return assumptions",
    "Decide whether Coast-FIRE changes your career and savings strategy",
    "Apply Coast-FIRE thinking to your superannuation balance",
  ],
  tags: ["coast-fire", "compound-interest", "strategy", "super"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## Coast-FIRE: The Lazy Path to Financial Independence

Coast-FIRE is the point where you have saved and invested enough that -- even if you never contribute another dollar -- compound interest will grow your portfolio to your full FIRE number by your target retirement age. After reaching Coast-FIRE, you only need to earn enough to cover current expenses. No more saving required.

### Why Coast-FIRE Matters

Full FIRE can feel like a grind. Saving 50-60% of your income for a decade is not everyone's idea of a good time. Coast-FIRE gives you a pressure release valve:

- You can take a lower-paying job you actually enjoy
- You can go part-time
- You can start a passion project without worrying about saving
- You can travel more freely

The psychological shift is huge. You go from "I must save aggressively" to "I just need to cover my bills."

### The Formula

**Coast-FIRE Number = FIRE Number / (1 + r)^n**

Where:
- **FIRE Number** = your target retirement portfolio (e.g. $1,500,000)
- **r** = expected real annual return (after inflation), typically 5-7%
- **n** = years until your target retirement age

### Worked Example

Sarah is 35. She wants to retire at 60 with $1,500,000 (in today's dollars). She assumes a 6% real return.

Coast-FIRE Number = $1,500,000 / (1.06)^25
Coast-FIRE Number = $1,500,000 / 4.29
Coast-FIRE Number = **$349,650**

If Sarah has $350,000 invested today, she has hit Coast-FIRE. She can stop contributing and her money will grow to $1.5 million by 60 without another cent going in.

### Coast-FIRE and Your Super

Here is where it gets interesting for Australians. Your super balance is *already* on a Coast-FIRE trajectory if you think about it:

- Employer SG contributions keep adding to it (even if you stop salary sacrificing)
- Super earnings are taxed at only 15%
- Most people cannot touch it until 60 anyway, giving it decades to compound

**Example:** If you have $200,000 in super at age 35 and your employer contributes $12,000/year (SG on a $105,000 salary), with a 7% nominal return:

- At age 60: approximately **$1,650,000**

You might already be Coast-FIRE for the super bucket and not even know it.

### The Sensitivity Problem

Coast-FIRE is heavily dependent on your return assumption. Small changes have big impacts:

| Real Return | Coast-FIRE Number (for $1.5M at 60, starting at 35) |
|-------------|------------------------------------------------------|
| 5% | $442,800 |
| 6% | $349,650 |
| 7% | $275,500 |
| 8% | $217,100 |

A 1% difference in returns changes your number by roughly $70,000-$80,000. This is why conservative assumptions matter. Using 5% real is prudent; using 8% is optimistic.

### How to Use Coast-FIRE Strategically

1. **Calculate your Coast-FIRE number** using 5% real returns (conservative)
2. **Check your current invested assets** -- include super and outside-super investments
3. **If you have hit it:** Consider whether you want to downshift. You do not have to, but you *can*.
4. **If you are close:** A few more years of aggressive saving gets you there, then you can ease off.
5. **Split the calculation:** Run it separately for your super bucket (target at 60) and your outside-super bucket (target at your early retirement age).

### Coast-FIRE is Not Lazy FIRE

A word of caution: Coast-FIRE assumes you still earn enough to cover your living expenses. It is not "stop working entirely." If you quit your job and start burning through savings, you blow up the compounding that makes Coast-FIRE work.

Think of it as shifting from "earn and save hard" mode to "earn enough to live" mode. The pressure comes off, but the discipline stays.
`,
}

const module5: Module = {
  id: "super-contribution-strategies",
  title:
    "Super Contribution Strategies: Concessional vs Non-Concessional",
  description:
    "A deep dive into maximising your super contributions using concessional (pre-tax) and non-concessional (after-tax) strategies, including carry-forward rules.",
  category: "super",
  level: "intermediate",
  duration: "14 min",
  durationMinutes: 14,
  learningOutcomes: [
    "Maximise concessional contributions using salary sacrifice and personal deductible contributions",
    "Understand carry-forward (catch-up) contribution rules and eligibility",
    "Evaluate when non-concessional contributions make sense",
    "Calculate the tax savings from contribution strategies at different income levels",
    "Avoid excess contribution penalties",
  ],
  tags: [
    "concessional",
    "non-concessional",
    "salary-sacrifice",
    "carry-forward",
    "contributions",
  ],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## Super Contribution Strategies

If FIRE is the destination, super contributions are one of the most tax-efficient vehicles to get you there. The trick is knowing which levers to pull and when.

### Concessional Contributions (Pre-Tax)

Concessional contributions are taxed at just **15%** inside the fund, instead of your marginal tax rate. The annual cap is **$30,000** (2026-27), and this includes:

- Employer SG contributions (11.5% of your salary)
- Salary sacrifice amounts
- Personal contributions you claim as a tax deduction

**Example -- Salary Sacrifice in Action:**

Emma earns $110,000. Her employer contributes $12,650 in SG (11.5%). She has $17,350 of concessional cap remaining.

If she salary sacrifices $15,000:
- She saves $15,000 x (32.5% + 2% Medicare levy - 15% super tax) = **$2,925 in tax**
- Her take-home pay drops by roughly $10,125 (after the tax saving)
- Her super grows by an extra $12,750 after the 15% contributions tax

That is real money compounding for decades at a low tax rate.

### Personal Deductible Contributions

If you are self-employed or your employer does not offer salary sacrifice, you can make personal contributions and claim them as a tax deduction. You contribute from your bank account, then lodge a "Notice of Intent to Claim" form (section 290-170) with your super fund before lodging your tax return.

Same cap, same 15% tax treatment. The mechanics are just slightly different.

### Carry-Forward (Catch-Up) Contributions

Since 2019-20, if your total super balance is **under $500,000** at 30 June of the previous year, you can carry forward any unused concessional cap from the past **five years**.

This is a game-changer for people who:
- Had years of low income (parental leave, study, career change)
- Recently started earning more and want to catch up
- Received a bonus or windfall and want to deploy it tax-efficiently

**Example:** Jake had $10,000 in unused concessional cap from each of the last three years. His super balance is $380,000. He can contribute up to $30,000 (current year) + $30,000 (carry-forward) = **$60,000** in concessional contributions this year, all taxed at 15%.

On a $150,000 salary (37% + 2% Medicare levy marginal rate), that extra $30,000 in carry-forward saves roughly $7,200 in tax.

### Non-Concessional Contributions (After-Tax)

Non-concessional contributions are made from after-tax money. No tax deduction on the way in, but:

- The earnings inside super are taxed at 15% (vs your marginal rate outside)
- In pension phase, the earnings become **tax-free**
- The annual cap is **$120,000** per year
- You can bring forward up to **3 years** ($360,000) if your total super balance is under $1.9 million

**When non-concessional contributions make sense:**
- You have already maxed out your concessional cap
- You have a lump sum (inheritance, property sale) and want to shelter it
- You are close to preservation age and want to move wealth into a tax-free environment

### The Strategy Matrix

| Your Situation | Best Move |
|---------------|-----------|
| Earning $60k-$90k | Max SG + modest salary sacrifice ($5k-$10k) |
| Earning $90k-$150k | Fill the concessional cap ($30k total) |
| Earning $150k+ | Max concessional + consider non-concessional |
| Under $500k super balance with unused caps | Use carry-forward contributions |
| Windfall or lump sum available | Non-concessional (up to $360k bring-forward) |
| Income over $250k | Be aware of Division 293 (extra 15% tax on concessional) |

### Watch Out For

- **Excess concessional contributions** are taxed at your marginal rate plus an interest charge. Do not go over the cap.
- **Excess non-concessional contributions** cop a 47% penalty tax. Seriously, do not go over.
- **Division 293 tax** kicks in at $250,000 combined income + super contributions.
- **Total super balance** matters for caps -- once you are over $1.9 million, non-concessional contributions are blocked.

### Action Steps

1. Log into your super fund and check your year-to-date contributions
2. Ask your payroll team about salary sacrifice options
3. Check your carry-forward balance on myGov (ATO online services > Super > Carry-forward amounts)
4. Run the numbers: how much tax would you save by filling your concessional cap?
`,
}

const module6: Module = {
  id: "stage-3-tax-cuts-fire",
  title: "The Stage 3 Tax Cuts and Your FIRE Timeline",
  description:
    "How Australia's Stage 3 tax cuts (revised 2024) affect your take-home pay, savings rate, and the time it takes to reach financial independence.",
  category: "tax",
  level: "intermediate",
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Understand the revised Stage 3 tax bracket structure",
    "Calculate your personal tax saving under the new rates",
    "Model how extra take-home pay accelerates your FIRE timeline",
    "Decide whether to direct tax savings to super, investments, or debt",
  ],
  tags: ["tax", "stage-3", "tax-cuts", "savings-rate", "fire-timeline"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## The Stage 3 Tax Cuts and Your FIRE Timeline

Australia's revised Stage 3 tax cuts took effect on 1 July 2024. If you are on the FIRE path, the question is simple: how much faster can you get there now?

### The New Tax Brackets (2024-25 Onwards)

| Taxable Income | Rate |
|---------------|------|
| $0 - $18,200 | 0% |
| $18,201 - $45,000 | 16% (was 19%) |
| $45,001 - $135,000 | 30% (was 32.5% up to $120k) |
| $135,001 - $190,000 | 37% |
| $190,001+ | 45% |

The key changes:
- The 19% bracket dropped to **16%**
- The 32.5% bracket dropped to **30%** and now extends to $135,000 (was $120,000)
- Everyone earning over $18,200 gets a tax cut

### How Much Do You Save?

| Salary | Annual Tax Cut | Extra Per Fortnight |
|--------|---------------|-------------------|
| $50,000 | $929 | $36 |
| $80,000 | $1,679 | $65 |
| $100,000 | $2,179 | $84 |
| $120,000 | $2,679 | $103 |
| $150,000 | $3,729 | $143 |
| $200,000 | $4,529 | $174 |

These are not life-changing sums individually, but invested consistently over a decade, they compound into something meaningful.

### The FIRE Impact

Let us model what happens if you invest your entire tax cut into a diversified index fund returning 7% nominal.

**Scenario: $100,000 salary, $2,179 annual tax cut invested**

| Years | Value of Invested Tax Cuts |
|-------|--------------------------|
| 5 | $12,550 |
| 10 | $30,100 |
| 15 | $54,900 |
| 20 | $89,300 |

Over 20 years, your tax cuts alone could be worth nearly **$90,000**. For someone targeting a $1.5M FIRE number, that is about 6% of your goal -- just from a tax cut you did not have to do anything to get.

### Where Should the Extra Cash Go?

This depends on your situation:

**Option 1: Salary sacrifice into super**
If you have not maxed your concessional cap, this is often the most tax-efficient move. You get a further tax saving on top of the cut itself.

**Option 2: Pay down your mortgage faster**
If you are paying a 6%+ interest rate, extra repayments on your home loan deliver a guaranteed, risk-free return. Especially powerful if you use an offset account (money stays accessible).

**Option 3: Invest in ETFs outside super**
If you want flexibility and access before preservation age, directing the cash into a low-cost ETF like Vanguard's VAS (Australian shares) or VDHG (diversified) keeps it accessible.

**Option 4: Build your emergency fund**
If you do not have 3-6 months of expenses in a high-interest savings account, do this first. A 5%+ savings rate on a HISA is not bad while you build the buffer.

### The Trap: Lifestyle Inflation

Here is the thing nobody talks about: most people will not invest their tax cut. They will absorb it into slightly nicer dinners, an extra streaming subscription, and a vaguely more expensive holiday. Within six months, they will not even notice the difference.

If you are serious about FIRE, **automate it.** Set up an automatic transfer on payday that moves the tax cut amount straight into your investment account. If you never see it in your spending account, you never miss it.

### The Bigger Picture

Tax cuts alone will not get you to FIRE. But they are a tailwind. Combined with salary sacrifice optimisation, smart investing, and spending discipline, every incremental boost matters.

Think of it this way: the Stage 3 cuts could shave **6-12 months** off your FIRE timeline if you invest the lot. That is 6-12 months of freedom you would not otherwise have.

### Quick Action

1. Check your next payslip -- has the tax cut flowed through?
2. Set up an automatic investment for the difference
3. Review whether salary sacrifice makes more sense at your income level
`,
}

const module7: Module = {
  id: "property-vs-index-funds",
  title: "Property vs Index Funds: The Great AU FIRE Debate",
  description:
    "An honest comparison of Australian property and index fund investing for FIRE, covering returns, leverage, tax, liquidity, and which suits different FIRE strategies.",
  category: "investing",
  level: "intermediate",
  duration: "15 min",
  durationMinutes: 15,
  learningOutcomes: [
    "Compare historical returns of Australian property vs ASX index funds",
    "Understand how leverage amplifies both gains and risks in property",
    "Evaluate the liquidity, tax, and maintenance cost differences",
    "Decide which asset class fits your personal FIRE strategy",
    "Consider a blended approach using both property and equities",
  ],
  tags: ["property", "index-funds", "etfs", "investing", "asx", "vanguard"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## Property vs Index Funds: The Great AU FIRE Debate

This is the argument that has divided Australian FIRE seekers for years. Your uncle reckons property is the only way to build wealth. The Reddit crowd swears by low-cost index funds. Who is right?

The honest answer: it depends on your situation. Let us break it down.

### Historical Returns

**Australian property (median house prices, capital cities):**
- Long-term average: ~6-7% nominal per year (before costs)
- After rates, insurance, maintenance, and management fees: ~4-5% net
- Rental yield: ~3-4% gross in capital cities

**ASX 200 index (including dividends):**
- Long-term average: ~9-10% nominal per year
- After ETF fees (0.04-0.20%): ~9-10% net
- Dividend yield: ~4% with franking credits boosting effective yield to ~5.5%

On raw returns, shares win. But property has a secret weapon: leverage.

### The Leverage Factor

When you buy a $600,000 property with a $120,000 deposit (20%), you are controlling $600,000 of assets with $120,000. If the property grows 6%, you make $36,000 on your $120,000 -- a 30% return on your equity.

With shares, you typically invest dollar-for-dollar. $120,000 invested at 9% returns $10,800. Still great, but not the leveraged return property gives.

Of course, leverage cuts both ways. If your property drops 10%, you have lost $60,000 -- half your deposit. Shares dropping 10% on $120,000 costs you $12,000. Leverage amplifies everything.

### The Cost Comparison

| Cost | Property | Index Funds (e.g. VAS/VDHG) |
|------|----------|----------------------------|
| Entry cost | Stamp duty ($15k-$40k), legal fees, inspections | $0 (buy via broker) |
| Ongoing fees | Rates, insurance, maintenance (1-2% of value/yr) | 0.04-0.27% MER |
| Selling cost | Agent fees 1.5-2.5% + legal | $0-$10 brokerage |
| Time cost | Finding tenants, managing repairs, dealing with issues | Set and forget |
| Liquidity | Weeks to months to sell | Sell within minutes |

Property has significantly higher friction costs. Over 30 years, these costs compound and eat into your returns more than most people realise.

### Tax Considerations

**Property:**
- Negative gearing: deduct losses against your income (popular but reduces your cashflow)
- CGT discount: 50% discount after 12 months
- Depreciation: claim building and fixture depreciation (for newer properties)
- Land tax: varies by state, can be significant for investors

**Shares:**
- Franking credits: refund of company tax already paid (unique to Australia)
- CGT discount: same 50% discount after 12 months
- No land tax, no rates, no maintenance deductions needed
- Dividend reinvestment is seamless

### Which Suits Your FIRE Strategy?

**Property works well if:**
- You are comfortable with debt and leverage
- You want a tangible asset you can see and touch
- You plan to use it as your primary residence (CGT-free)
- You have a high income and benefit from negative gearing
- You are handy and can manage properties yourself

**Index funds work well if:**
- You want simplicity and low maintenance
- You value liquidity (access to cash quickly)
- You are starting with smaller amounts ($500-$5,000 at a time)
- You want geographical diversification (international ETFs)
- You are targeting early retirement and need flexible drawdown

### The Blended Approach

Most successful Australian FIRE achievers use both:

1. **Own your home** (CGT-free, reduces living expenses in retirement)
2. **Max super contributions** into index options (tax-efficient compounding)
3. **Invest surplus in ETFs** outside super (VAS, VGS, VDHG) for pre-60 access
4. **Consider one investment property** if the numbers genuinely stack up

The key is running the numbers for *your* situation. Do not buy an investment property because your parents told you to. Do not avoid property because Reddit said so. Model both scenarios, account for all costs, and pick the path that gets you to your FIRE number fastest.

### The Bottom Line

Property and shares are both valid wealth-building tools. The "best" option depends on your income, risk tolerance, timeline, and how much effort you want to put in. For most FIRE seekers, a low-cost index fund portfolio is the simpler, more liquid, and more diversified choice -- but owning your own home remains one of the smartest financial moves you can make in Australia.
`,
}

const module8: Module = {
  id: "transition-to-retirement",
  title: "Transition to Retirement (TTR): The Bridge Strategy",
  description:
    "How to use a Transition to Retirement pension to bridge the gap between early retirement and full access to your super, including tax optimisation strategies.",
  category: "super",
  level: "advanced",
  duration: "14 min",
  durationMinutes: 14,
  learningOutcomes: [
    "Explain how a TTR pension works and eligibility requirements",
    "Calculate the tax benefits of a TTR strategy at different income levels",
    "Understand the 10% maximum drawdown rule",
    "Design a TTR strategy that complements salary sacrifice",
    "Identify when TTR is not worth the complexity",
  ],
  tags: ["ttr", "transition-to-retirement", "pension", "bridge-strategy"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## Transition to Retirement (TTR): The Bridge Strategy

A Transition to Retirement pension lets you access some of your super while you are still working, once you reach preservation age (60 for most people). For FIRE planners, TTR is a powerful tax optimisation tool -- but it is not for everyone.

### How TTR Works

Once you hit preservation age, you can:
1. Keep working (full-time or part-time)
2. Open a TTR pension account within your super fund
3. Draw an income stream from the pension (between 2% and 10% of the balance per year)
4. Continue receiving employer SG contributions into your accumulation account

The classic strategy: **salary sacrifice heavily into super (reducing your taxable income) while drawing a TTR pension to replace the lost take-home pay.**

### The Tax Maths

Here is why TTR can be compelling. Assume you are 60, earning $120,000, and have $800,000 in super.

**Without TTR:**
- Taxable income: $120,000
- Tax payable (approx): $27,367 (including Medicare levy)

**With TTR (salary sacrifice $25,000 extra, draw $25,000 TTR pension):**
- Salary sacrifice $25,000 into super (taxed at 15% = $3,750 contributions tax)
- Taxable income drops to $95,000
- Tax payable (approx): $19,717
- TTR pension income of $25,000 is **tax-free** after age 60
- Net saving: $27,367 - $19,717 - $3,750 = **$3,900 per year**

That is nearly $4,000 in tax savings every year, and your super balance stays roughly the same because you are putting in what you are taking out (minus the 15% contributions tax).

### The 10% Rule

You cannot withdraw more than **10% of your TTR pension balance** each year. On an $800,000 balance, the maximum drawdown is $80,000. The minimum is set by your age:

| Age | Minimum Drawdown (% of balance) |
|-----|-------------------------------|
| Under 65 | 2% |
| 65-74 | 2.5% |
| 75-79 | 3% |
| 80-84 | 3.5% |

### TTR + Salary Sacrifice: The Classic Combo

The sweet spot is when:
- You are over 60 (pension income is tax-free)
- You earn $90,000+ (meaningful marginal tax rate to optimise against)
- You have a decent super balance ($400,000+) to draw from
- You plan to keep working for a few more years

The strategy creates a tax-efficient loop:
1. Salary sacrifice reduces your taxable income
2. Contributions tax is 15% (lower than your marginal rate)
3. TTR pension replaces the income, tax-free after 60
4. Your lifestyle stays the same, but more ends up in super

### When TTR is NOT Worth It

- **Under preservation age:** You cannot start a TTR pension before 60.
- **Low income ($45,000 or less):** Your marginal rate is only 16%, so the tax benefit of salary sacrifice is minimal.
- **Very high income:** Division 293 tax can reduce the benefit.
- **Small super balance:** A 10% drawdown on $100,000 is only $10,000 -- not enough to meaningfully replace salary sacrifice reductions.
- **Investment returns:** TTR pension earnings are taxed at 15% (same as accumulation phase), unlike an account-based pension in full retirement where earnings are tax-free. This changed in 2017 and reduced the TTR advantage.

### TTR as a FIRE Bridge

For FIRE planners, TTR is most useful in the final stretch:

**Scenario:** You are 58, planning to fully retire at 62. You have $1.2M in super and $400,000 outside super.

- **Age 58-60:** Live off outside-super investments + part-time work
- **Age 60-62:** Start TTR pension while still working part-time, salary sacrifice aggressively
- **Age 62:** Fully retire, convert TTR pension to an account-based pension (earnings now tax-free)

This sequencing maximises your super balance at the point of full retirement while minimising tax along the way.

### Action Steps

1. Check your preservation age (it is 60 for most people reading this)
2. If you are approaching 60 and still working, model the salary sacrifice + TTR combo
3. Talk to your super fund about opening a TTR pension account
4. Consider getting a one-off session with a fee-only financial adviser -- TTR complexity warrants professional input
`,
}

const module9: Module = {
  id: "how-much-to-retire-au",
  title: "How Much Do You Actually Need to Retire in Australia?",
  description:
    "A practical look at retirement spending benchmarks in Australia, ASFA standards, Age Pension eligibility, and how to set a realistic retirement target.",
  category: "fire-basics",
  level: "beginner",
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Compare ASFA comfortable and modest retirement standards",
    "Understand Age Pension eligibility and the assets test",
    "Set a personalised retirement spending target based on your lifestyle",
    "Factor in healthcare, housing, and inflation into long-term projections",
  ],
  tags: ["retirement", "asfa", "age-pension", "spending", "benchmarks"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## How Much Do You Actually Need to Retire in Australia?

"How much do I need?" is the question everyone asks and nobody agrees on. Let us cut through the noise with real numbers.

### The ASFA Retirement Standard

The Association of Superannuation Funds of Australia (ASFA) publishes quarterly benchmarks for retirement spending. These are widely referenced and give you a useful starting point.

**Annual spending for a comfortable retirement (2026 figures, approximate):**

| Category | Single | Couple |
|----------|--------|--------|
| Total annual spending | $52,000 | $73,000 |
| Lump sum needed at 67 (to supplement Age Pension) | $595,000 | $690,000 |

**Annual spending for a modest retirement:**

| Category | Single | Couple |
|----------|--------|--------|
| Total annual spending | $33,000 | $47,000 |
| Lump sum needed at 67 | Much less (Age Pension covers most of it) |

"Comfortable" means you can afford good food, domestic travel, a reasonable car, private health insurance, and regular leisure activities. "Modest" means you are covering basics and not much else.

### But What Does "Comfortable" Actually Look Like?

Here is roughly what ASFA's "comfortable" budget includes:

- **Housing:** You own your home outright (no rent or mortgage). Rates, maintenance, and insurance only.
- **Food:** Good quality groceries and occasional dining out
- **Transport:** A car (replaced every few years) plus running costs
- **Health:** Private health insurance plus out-of-pocket medical
- **Leisure:** Domestic holidays, hobbies, entertainment
- **Clothing and personal:** Regular purchases, not extravagant

Notice the big assumption: **you own your home**. If you are renting in retirement, add $15,000-$25,000+ per year to these figures. This is why paying off your mortgage (or at least having a clear housing plan) is so important for FIRE.

### The Age Pension Safety Net

Australia's Age Pension provides a baseline income for retirees who qualify. As of 2026:

- **Single:** approximately $28,500/year (including supplements)
- **Couple:** approximately $43,000/year combined

But it is means-tested. The **assets test** and **income test** determine how much you receive:

- **Assets test (homeowner):** Full pension if assets below ~$301,750 (single) or ~$451,500 (couple). Pension reduces and cuts out at ~$674,000 (single) or ~$1,012,500 (couple).
- **Income test:** Full pension if income below ~$204/fortnight (single). Pension reduces by 50 cents for every dollar over the threshold.

For FIRE planners with significant investments, you may not qualify for the full Age Pension -- but you might get a part pension, which helps.

### Setting Your Personal Number

Forget the benchmarks for a moment. What do *you* actually need?

**Step 1: Start with your current spending.** If you spend $70,000/year now, you will probably spend something similar in retirement (minus commuting costs, plus more healthcare and leisure).

**Step 2: Adjust for retirement-specific changes.**

Costs that usually go **down:**
- Commuting and work-related expenses
- Mortgage payments (if paid off by retirement)
- Clothing and professional costs
- Superannuation contributions (obviously)

Costs that usually go **up:**
- Healthcare and dental (especially after 70)
- Travel and hobbies (you have more time)
- Home maintenance (ageing houses need work)
- Utilities (you are home more)

**Step 3: Add a buffer.** Unexpected costs always show up -- a new roof, dental work, helping family. Add 10-15% to your estimated annual spending.

### The FIRE-Specific Angle

If you are retiring at 50 instead of 67, your numbers change:

- You need **more** outside super (17 extra years of expenses before you can access super)
- You do **not** get the Age Pension until 67 (currently)
- You need to fund **private health insurance** for longer
- Your money needs to last **40+ years**, not 20-25

This is why many Australian FIRE planners target a higher number than the ASFA comfortable standard -- more like $60,000-$80,000/year in spending, with a total portfolio (super + outside super) of $1.5M-$2M.

### Quick Retirement Maths

| Your Annual Spend | FIRE Number (25x) | ASFA Equivalent |
|-------------------|-------------------|-----------------|
| $40,000 | $1,000,000 | Modest+ |
| $60,000 | $1,500,000 | Comfortable |
| $80,000 | $2,000,000 | Comfortable+ |
| $100,000 | $2,500,000 | Fat FIRE |

### What To Do Next

1. Track your actual spending for a month
2. Project what changes in retirement (up and down)
3. Add a 10-15% buffer
4. Run the 25x calculation
5. Split it into pre-60 and post-60 buckets
`,
}

const module10: Module = {
  id: "side-income-accelerate-exit",
  title: "Building a Side Income to Accelerate Your Exit",
  description:
    "Practical strategies for building side income in Australia to boost your savings rate and shorten your FIRE timeline, from freelancing to digital products.",
  category: "income",
  level: "beginner",
  duration: "10 min",
  durationMinutes: 10,
  learningOutcomes: [
    "Identify side income opportunities suited to your skills and schedule",
    "Understand the tax implications of side income in Australia (ABN, GST, deductions)",
    "Calculate how additional income impacts your FIRE timeline",
    "Avoid common side-hustle traps that waste time and money",
  ],
  tags: ["side-income", "freelancing", "savings-rate", "abn", "hustle"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## Building a Side Income to Accelerate Your Exit

Your savings rate is the single most powerful lever in the FIRE equation. And there are only two ways to increase it: spend less or earn more. At some point, you have cut all the subscriptions and switched to Aldi. The next frontier is earning more.

### Why Side Income is a FIRE Accelerator

Let us say you earn $100,000 and save $30,000/year (30% savings rate). At 7% returns, you hit $1.5M in about 22 years.

Now add $15,000/year in side income, all invested:
- New savings: $45,000/year (effectively 38% savings rate on total income)
- Time to $1.5M: about **17 years**

That is **five years** shaved off your timeline. Five extra years of freedom. That is the power of even a modest side income.

### Side Income Ideas for Australians

**Skill-based (highest earning potential):**
- Freelance consulting in your professional area ($80-$250+/hr)
- Web development or design ($60-$150/hr)
- Copywriting or content creation ($50-$120/hr)
- Tutoring (especially maths, science, English -- $50-$100/hr)
- Bookkeeping for small businesses ($40-$80/hr)

**Asset-based (more passive over time):**
- Renting a spare room on Airbnb or Flatmates.com.au
- Renting your car on Car Next Door
- Renting storage space, parking, or equipment
- Creating and selling digital products (templates, courses, ebooks)

**Effort-based (quickest to start):**
- Uber, DoorDash, Airtasker
- Market stalls or online selling (eBay, Facebook Marketplace)
- Pet sitting or dog walking (MadPaws)
- Cleaning or handyman services

### Tax Implications You Need to Know

**ABN:** If you are earning side income as a sole trader, you need an Australian Business Number. It is free and takes five minutes to register on the ABR website.

**GST:** If your side income exceeds $75,000/year, you must register for GST. Below that threshold, it is optional (but you cannot claim GST credits on expenses if you are not registered).

**Income tax:** Side income is added to your regular income and taxed at your marginal rate. If you earn $100,000 from your job and $20,000 from freelancing, that extra $20,000 is taxed at 30% (plus Medicare levy).

**Deductions:** You can claim expenses directly related to earning the side income:
- Equipment and tools
- A portion of home office costs
- Professional development
- Marketing and advertising
- Vehicle expenses (if applicable, using the cents-per-km or logbook method)

**Super on side income:** As a sole trader, you are not required to pay yourself super, but you can make personal concessional contributions and claim them as a deduction. This is a smart move if your marginal rate is above 15%.

### The Best Side Income for FIRE

Not all side income is created equal. Prioritise:

1. **High hourly rate** -- Your time is your most valuable asset. Earning $100/hr freelancing for 5 hours beats earning $25/hr for 20 hours.
2. **Scalable** -- Digital products, courses, and templates can earn while you sleep. Trading time for money has a ceiling.
3. **Low startup cost** -- Avoid side hustles that require large upfront investment. Start lean.
4. **Skill-building** -- Choose something that also builds skills for your main career or future plans.

### The Trap: Side Hustle Burnout

Here is the uncomfortable truth: working 60+ hours a week to retire five years earlier might not be worth it if you burn out, wreck your relationships, or hate every minute.

A sustainable side income is one that:
- Takes 5-15 hours per week, not 30
- Energises rather than drains you
- Has a clear end goal (e.g., "I will do this for 3 years to hit Coast-FIRE")
- Does not destroy your health or relationships

### Action Steps

1. List three skills you could monetise today
2. Research the going rate for those skills in Australia (check Upwork, Freelancer, or industry forums)
3. Register an ABN if you do not have one
4. Set up a separate bank account for side income (makes tax time easier)
5. Commit to investing 100% of side income into your FIRE portfolio
`,
}

const module11: Module = {
  id: "bucket-strategy-drawdown",
  title: "The Bucket Strategy for Drawdown in Retirement",
  description:
    "How to structure your retirement portfolio into cash, medium-term, and growth buckets to manage sequence-of-returns risk and sleep well at night.",
  category: "drawdown",
  level: "advanced",
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Explain sequence-of-returns risk and why it matters in early retirement",
    "Design a three-bucket drawdown strategy with appropriate asset allocation",
    "Determine how many years of cash buffer to hold",
    "Create a rebalancing schedule to refill buckets from growth assets",
    "Adapt the bucket strategy for the pre-super and post-super phases",
  ],
  tags: [
    "drawdown",
    "bucket-strategy",
    "sequence-risk",
    "retirement-income",
    "rebalancing",
  ],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## The Bucket Strategy for Drawdown in Retirement

Accumulating wealth is one challenge. Spending it down without running out is an entirely different game. The bucket strategy is one of the most popular frameworks for managing retirement drawdowns, and it is particularly well-suited to Australian FIRE retirees.

### The Problem: Sequence-of-Returns Risk

If the share market drops 30% in your first year of retirement and you are selling assets to live on, you lock in those losses. Your portfolio never fully recovers because you withdrew at the worst possible time.

This is called **sequence-of-returns risk**, and it is the biggest threat to early retirees. A 30-year market average of 8% means nothing if the first five years are terrible.

### The Three-Bucket Solution

The bucket strategy separates your portfolio into three time-horizon buckets:

**Bucket 1 -- Cash (1-3 years of expenses)**
- High-interest savings accounts (HISAs)
- Term deposits
- Purpose: Cover living expenses so you never have to sell shares during a downturn
- Target: $60,000-$180,000 (depending on your annual spend and risk tolerance)

**Bucket 2 -- Medium-Term (3-7 years of expenses)**
- Bond ETFs (e.g., Vanguard VAF, VIF)
- Diversified conservative funds
- Hybrid/balanced options
- Purpose: Refill Bucket 1 as needed; provide stability
- Target: $180,000-$420,000

**Bucket 3 -- Growth (everything else)**
- Australian shares (VAS, A200)
- International shares (VGS, VDHG)
- Your super fund in growth/indexed options
- Purpose: Long-term growth to outpace inflation and fund decades of retirement
- Target: The bulk of your portfolio

### How the Buckets Work Together

In a normal year:
1. You spend from **Bucket 1** (cash)
2. Dividends and distributions from Bucket 3 refill Bucket 1
3. Once a year, you rebalance: top up Bucket 1 from Bucket 2, and top up Bucket 2 from Bucket 3

In a market downturn:
1. You spend from **Bucket 1** (cash) -- no need to sell anything
2. You do **not** sell from Bucket 3 (let it recover)
3. If needed, draw from Bucket 2 (bonds are more stable)
4. When markets recover, rebalance back to target allocations

### Sizing Your Buckets

How much cash should you hold? There is no single right answer, but here are guidelines:

| Risk Tolerance | Bucket 1 (Cash) | Bucket 2 (Bonds) | Bucket 3 (Growth) |
|---------------|-----------------|-------------------|-------------------|
| Conservative | 3 years | 5-7 years | Remainder |
| Moderate | 2 years | 3-5 years | Remainder |
| Aggressive | 1 year | 2-3 years | Remainder |

For a FIRE retiree spending $60,000/year with $1.5M total:

**Moderate approach:**
- Bucket 1: $120,000 (2 years)
- Bucket 2: $240,000 (4 years in bonds)
- Bucket 3: $1,140,000 (growth)

### The Australian FIRE Twist: Two Sets of Buckets

If you retire before 60, you effectively need two bucket systems:

**Outside Super (pre-60):**
- Bucket 1a: Cash in HISA
- Bucket 2a: Bond ETFs in your brokerage account
- Bucket 3a: Share ETFs in your brokerage account

**Inside Super (post-60):**
- Bucket 1b: Cash option in your super fund
- Bucket 2b: Bond/conservative option in super
- Bucket 3b: Growth/indexed option in super

The transition at 60 is when you shift from drawing down the outside-super buckets to the inside-super buckets (which are more tax-efficient, with zero tax on earnings in pension phase).

### Refilling the Buckets

**Automatic refill sources:**
- Dividends from Australian shares (quarterly, often franked)
- Distributions from ETFs (semi-annual or annual)
- Interest from bonds and HISAs
- Rental income if you have investment property

**Manual rebalancing (annually):**
- Review bucket levels each July
- If Bucket 1 is below target, sell from Bucket 2 to top it up
- If Bucket 2 is below target, sell from Bucket 3 (only if markets are positive)
- If markets are down, wait -- that is what the cash buffer is for

### Common Mistakes

- Holding too much cash (3+ years) -- you sacrifice growth for safety you probably do not need
- Forgetting to rebalance -- the buckets do not manage themselves
- Panicking in a downturn and selling from Bucket 3 -- this defeats the entire purpose
- Not adjusting spending in bad years -- flexibility is your best risk management tool

### The Bottom Line

The bucket strategy is not about maximising returns. It is about managing risk and giving you the confidence to stay invested during market downturns. For early retirees with a 40+ year time horizon, staying invested is everything.
`,
}

const module12: Module = {
  id: "fire-single-income-au",
  title: "FIRE on a Single Income in Australia",
  description:
    "Strategies and mindset shifts for pursuing FIRE on a single income, whether you are single, a sole earner in a couple, or a single parent.",
  category: "fire-strategies",
  level: "intermediate",
  duration: "12 min",
  durationMinutes: 12,
  learningOutcomes: [
    "Identify the unique challenges and advantages of single-income FIRE",
    "Optimise tax and super strategies for single-income households",
    "Build a realistic savings plan on one income",
    "Use government benefits and offsets effectively",
    "Adjust FIRE timelines and targets for single-income realities",
  ],
  tags: ["single-income", "budgeting", "tax-offsets", "family", "strategies"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## FIRE on a Single Income in Australia

Most FIRE content assumes two incomes, a combined savings rate of 50%+, and no dependants. If that is not your reality, you might feel like FIRE is not for you. It is. It just looks different.

### The Single-Income Reality

Whether you are single, a sole earner supporting a family, or a single parent, the maths is harder but not impossible. Here is what changes:

**Challenges:**
- No second income to boost savings rate
- All fixed costs fall on one salary
- Less margin for error (job loss hits harder)
- Childcare costs can absorb massive portions of income

**Advantages (yes, there are some):**
- Simpler tax planning (one set of brackets to optimise)
- Lower FIRE number if you are single with no dependants
- Full control over spending decisions (no partner negotiation)
- Government benefits may be available (Family Tax Benefit, childcare subsidy)

### Strategy 1: Ruthless Expense Optimisation

When you cannot increase income easily, spending becomes your primary lever.

The big three expenses for most Australians:
1. **Housing (30-40% of income):** Consider house-hacking (renting out a room), moving to a lower-cost area, or share housing. In regional centres, rent can be 40-60% less than Sydney or Melbourne.
2. **Transport (10-15%):** One car instead of two. Consider an e-bike for commuting. Use public transport.
3. **Food (10-15%):** Meal prepping, shopping at Aldi, reducing dining out.

Cutting $500/month from expenses has the same FIRE impact as earning $500/month more (actually better, since you do not pay tax on money you do not spend).

### Strategy 2: Super Optimisation for Single Earners

**Spouse contribution tax offset:** If your partner earns under $40,000 (including super), you can contribute up to $3,000 into their super and receive a tax offset of up to **$540**. This also builds their super balance for long-term compounding.

**Government co-contribution:** If you (or your lower-earning partner) earn under $58,445 and make a non-concessional super contribution, the government will contribute up to **$500** for free. Free money. Take it.

**Low-income super tax offset (LISTO):** If your adjusted taxable income is under $37,000, the government refunds the 15% contributions tax (up to $500) back into your super. Again, free money.

### Strategy 3: Tax-Smart Investing

On a single income, every dollar of tax saved is a dollar you can invest.

- **Salary sacrifice** to bring your taxable income into a lower bracket
- **Claim all legitimate deductions** -- work from home, professional development, tools, uniforms
- **Use your super fund's insurance** -- group insurance through super is almost always cheaper than retail policies
- **Private health insurance:** If you earn over $93,000 (single), you pay the Medicare Levy Surcharge (1-1.5%) without private hospital cover. Basic hospital cover can be cheaper than the surcharge.

### Strategy 4: Realistic Timelines

On a single income of $90,000, let us model two scenarios:

**Scenario A: Single, no dependants**
- Take-home pay: ~$68,000
- Living expenses: $35,000
- Annual savings: $33,000 (48% savings rate)
- FIRE number ($35k x 25): $875,000
- Time to FIRE at 7% returns: ~**15 years**

**Scenario B: Single parent, one child**
- Take-home pay: ~$68,000 + Family Tax Benefit ~$5,000
- Living expenses: $55,000
- Annual savings: $18,000 (25% savings rate)
- FIRE number ($55k x 25): $1,375,000
- Time to FIRE at 7% returns: ~**28 years**

Scenario B is harder, no question. But even getting to Coast-FIRE or Barista-FIRE changes your life. And expenses drop significantly once children are independent.

### Strategy 5: The Barista-FIRE Pivot

If full FIRE feels too far away on a single income, consider **Barista-FIRE** as your target:

1. Build enough investments to cover 50-70% of expenses
2. Work part-time (20 hours/week) to cover the rest
3. Enjoy significantly more freedom without needing the full FIRE number

On $55,000 in expenses, covering 60% from investments means you need:
- $33,000/year from investments = $825,000 portfolio
- $22,000/year from part-time work = ~15-20 hours/week at $25-$30/hr

That is achievable on a single income within 15-18 years.

### The Mindset Shift

Single-income FIRE is a marathon, not a sprint. The key mindset shifts:
- Progress over perfection -- a 20% savings rate still gets you there
- Celebrate milestones (first $100k, Coast-FIRE, each year of expenses saved)
- Do not compare yourself to dual-income FIRE stories online
- Focus on what you can control: spending, skill-building, and consistency
`,
}

const module13: Module = {
  id: "smsf-property-basics",
  title: "How to Use Your Super to Buy Property (SMSF Basics)",
  description:
    "An introduction to Self-Managed Super Funds and using limited recourse borrowing arrangements to buy property inside super, including costs, risks, and compliance.",
  category: "super",
  level: "advanced",
  duration: "16 min",
  durationMinutes: 16,
  learningOutcomes: [
    "Explain what an SMSF is and the trustee obligations involved",
    "Understand limited recourse borrowing arrangements (LRBAs) for property",
    "Calculate the true costs of running an SMSF vs a retail or industry fund",
    "Identify the compliance risks and ATO red flags",
    "Determine whether an SMSF property strategy is appropriate for your situation",
  ],
  tags: ["smsf", "property", "lrba", "self-managed", "compliance"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## How to Use Your Super to Buy Property (SMSF Basics)

Buying property inside your super sounds appealing -- tax-advantaged growth, rental income, and a tangible asset. But SMSFs are complex, expensive, and heavily regulated. This lesson gives you the honest picture.

### What is an SMSF?

A Self-Managed Super Fund is a super fund you run yourself. You are the trustee (or a director of a corporate trustee), and you make all the investment decisions. SMSFs can have up to six members (usually you, your partner, and potentially your adult children).

**Key differences from retail/industry funds:**
- You choose the investments (shares, property, cash, crypto, collectibles within rules)
- You handle compliance, auditing, and reporting
- You pay all the costs directly
- The ATO regulates you, and they do not mess around

### Buying Property Through an SMSF

SMSFs can buy residential or commercial property using a **Limited Recourse Borrowing Arrangement (LRBA)**. Here is how it works:

1. Your SMSF borrows money from a lender
2. The property is held in a separate "bare trust" until the loan is repaid
3. The SMSF makes loan repayments from its funds (contributions + rental income)
4. Once the loan is paid off, the property transfers fully into the SMSF

**The rules are strict:**
- The property must be held in the name of the bare trustee, not the SMSF trustee
- You **cannot** live in the property or rent it to a related party (for residential)
- You **cannot** renovate or improve the property while the LRBA is in place (maintenance only)
- Commercial property *can* be leased to your own business (a genuine advantage for business owners)

### The Costs: Be Honest With Yourself

Running an SMSF is not cheap. Here are the annual costs:

| Cost | Approximate Amount |
|------|-------------------|
| SMSF audit (mandatory) | $500-$1,500 |
| Accounting and tax return | $2,000-$4,000 |
| ASIC annual fee (corporate trustee) | $65 |
| ATO supervisory levy | $259 |
| Insurance (members) | $1,000-$3,000+ |
| LRBA loan costs (if borrowing) | Application fees + ongoing |
| **Total annual cost** | **$4,000-$10,000+** |

Compare that to an industry fund like AustralianSuper, where your total fees on a $500,000 balance might be $2,500/year. You need a substantial balance (generally **$300,000-$500,000 minimum**) for an SMSF to be cost-effective.

### The Tax Advantages

Inside an SMSF, the tax treatment is the same as any super fund:
- **Accumulation phase:** Earnings (rent, capital gains, dividends) taxed at 15%
- **Pension phase:** Earnings are **tax-free** (on assets supporting the pension, up to the transfer balance cap of $1.9 million)
- **CGT discount:** Assets held over 12 months get a 1/3 discount in accumulation (effective 10% rate)

For property, this means:
- Rental income taxed at 15% (vs your marginal rate outside super)
- Capital gain on sale taxed at 10% in accumulation, or 0% in pension phase
- Expenses (rates, insurance, interest, maintenance) are deductible within the fund

### The Risks

**Liquidity risk:** Property is illiquid. If you need to pay a member benefit and your only asset is a house, you might have to sell it at a bad time.

**Concentration risk:** If 80% of your SMSF is in one property, you are not diversified. One bad tenant, one structural issue, and your retirement is in trouble.

**Compliance risk:** The ATO audits SMSFs regularly. Common penalties:
- Renting residential property to a related party: up to $18,780 per trustee
- Borrowing outside LRBA rules: fund declared non-compliant (taxed at 45%)
- Late lodgement of annual return: $900+ penalties
- Sole purpose test breach: disqualification as trustee

**Loan risk:** SMSF loans typically have higher interest rates (0.5-1.5% above standard home loans) and require larger deposits (20-30%). If interest rates spike, the fund must have enough cashflow to service the debt.

### When SMSF Property Makes Sense

It **may** be appropriate if:
- Your super balance is over $400,000
- You understand property investing and have done it before
- You want to buy **commercial property** and lease it to your own business
- You have a long time horizon (10+ years to retirement)
- You are willing to pay for proper legal and accounting advice

It is **probably not** appropriate if:
- Your super balance is under $300,000
- You just want to buy a house to live in (you cannot do this)
- You are attracted to it solely for tax reasons
- You do not want the compliance and administration burden
- You are close to retirement and need liquidity

### Action Steps

1. Honestly assess whether your super balance justifies the SMSF costs
2. If you are serious, get advice from a licensed financial adviser AND an SMSF specialist accountant
3. Never set up an SMSF based on a property spruiker's seminar -- they make money from you buying, not from you succeeding
4. Consider whether a property-focused option within your existing super fund might achieve a similar result with far less hassle
`,
}

const module14: Module = {
  id: "barefoot-investor-and-fire",
  title: "The Barefoot Investor Method and FIRE",
  description:
    "How Scott Pape's Barefoot Investor system maps to FIRE principles, where the two approaches align, and how to use Barefoot as a launchpad for financial independence.",
  category: "fire-strategies",
  level: "beginner",
  duration: "8 min",
  durationMinutes: 8,
  learningOutcomes: [
    "Map the Barefoot Investor bucket system to FIRE savings strategies",
    "Identify where Barefoot principles align with and differ from FIRE",
    "Use the Barefoot system as a foundation for more aggressive FIRE planning",
    "Understand why Barefoot's simplicity makes it an ideal starting point",
  ],
  tags: ["barefoot-investor", "scott-pape", "buckets", "budgeting", "beginner"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## The Barefoot Investor Method and FIRE

Scott Pape's *The Barefoot Investor* is the best-selling finance book in Australian history, and for good reason. It is simple, actionable, and it works. But how does it connect to FIRE?

### The Barefoot System in 30 Seconds

Barefoot's core system splits your money into buckets:

| Bucket | Purpose | % of Take-Home Pay |
|--------|---------|-------------------|
| **Blow** (2 accounts: Daily Expenses + Splurge) | Day-to-day spending + guilt-free fun money | 60% |
| **Mojo** | Emergency fund (3 months of expenses in a separate HISA) | Build to target, then maintain |
| **Grow** (2 accounts: Fire Extinguisher + Long-Term) | Debt destruction, then wealth building | 20% |
| **Smile** | Saving for specific goals (holidays, car, etc.) | 10% |

Plus a handful of "Barefoot Steps" like switching to a low-fee super fund, getting insurance sorted, and paying off your home.

### Where Barefoot and FIRE Align

**1. Low-fee super:** Barefoot hammers the importance of switching to a low-fee super fund and choosing an indexed investment option. This is FIRE 101. The difference between paying 1.5% in fees and 0.2% on a $500,000 balance over 30 years is roughly **$400,000** in lost returns. Both communities agree: fees matter enormously.

**2. Emergency fund:** Barefoot's "Mojo" account (3 months of expenses in a HISA) is exactly what FIRE planners recommend before investing. You need a buffer so you do not sell investments in an emergency.

**3. Debt destruction:** The "Fire Extinguisher" account targets high-interest debt first. FIRE planners agree -- paying off 20% credit card debt is a guaranteed 20% return. Kill the debt before investing.

**4. Own your home:** Barefoot strongly advocates paying off your mortgage. Most Australian FIRE plans also treat a paid-off home as the foundation -- it reduces your annual expenses (and therefore your FIRE number) dramatically.

**5. Simplicity:** Both Barefoot and smart FIRE planning favour simple, low-cost index funds over complex trading strategies. Buy VAS or VDHG and go live your life.

### Where They Diverge

**Savings rate:** Barefoot allocates 20% to wealth building. FIRE typically pushes for 40-60%+. For someone on $100,000, that is the difference between saving $20,000 and $50,000 per year -- which translates to roughly 15 years of extra working life.

**Retirement timeline:** Barefoot is optimised for a comfortable retirement at a conventional age (60-67). FIRE explicitly targets much earlier -- 40, 45, 50. The strategies overlap, but the intensity and timeline are different.

**Spending philosophy:** Barefoot encourages "guilt-free spending" (the Splurge account, the Smile account). FIRE communities tend to be more frugal-minded. Neither is wrong -- it is about what you value. But if you are serious about early retirement, the Splurge account might need to shrink.

**Investment complexity:** Barefoot keeps it deliberately simple (super + home + maybe some ETFs). Advanced FIRE planning gets into salary sacrifice optimisation, TTR pensions, two-bucket strategies, and tax-loss harvesting.

### Using Barefoot as Your FIRE Launchpad

Here is the practical advice: if you are starting from scratch, **follow the Barefoot Steps first**.

1. **Get the basics sorted:** Switch to a low-fee super fund, set up the bucket accounts, build your Mojo, destroy your debt. This is phase one.
2. **Once debt-free with an emergency fund:** Start increasing your savings rate beyond 20%. Move money from Splurge and Smile into Grow.
3. **Max your super contributions:** Salary sacrifice to fill your concessional cap. Barefoot mentions this but FIRE makes it a priority.
4. **Invest outside super:** Once super is maxed, start building your outside-super portfolio in low-cost ETFs for pre-60 access.
5. **Calculate your FIRE number:** Use the 25x rule and the two-bucket approach from earlier lessons.

### The Bottom Line

The Barefoot Investor gives you the foundation. FIRE gives you the ambition. Use Barefoot to get your financial house in order, then dial up the intensity to match your retirement timeline.

Scott Pape would probably tell you that financial independence at any age is the goal -- and he would not be wrong. Whether you call it Barefoot or FIRE, the principles are the same: spend less, invest wisely, avoid fees, and let compound interest do the heavy lifting.
`,
}

const module15: Module = {
  id: "five-year-exit-plan",
  title: "Your 5-Year Exit Plan: A Week-by-Week Roadmap",
  description:
    "A structured, actionable 5-year plan to move from FIRE-curious to financially independent, with quarterly milestones and specific week-by-week actions.",
  category: "planning",
  level: "advanced",
  duration: "20 min",
  durationMinutes: 20,
  learningOutcomes: [
    "Build a personalised 5-year roadmap with quarterly milestones",
    "Sequence your FIRE actions in the optimal order (debt, super, invest, optimise)",
    "Set up automation so the plan runs itself",
    "Create accountability checkpoints and adjustment triggers",
    "Prepare for the psychological transition from accumulation to drawdown",
  ],
  tags: ["planning", "roadmap", "milestones", "automation", "exit-plan"],
  dateAdded: "2026-07-01",
  lastUpdated: "2026-07-07",
  status: "published",
  content: `## Your 5-Year Exit Plan: A Week-by-Week Roadmap

You have read the theory. You know about super, tax, buckets, and FIRE numbers. Now it is time to turn knowledge into a plan. This lesson gives you a structured 5-year roadmap, broken into phases, with specific actions for each quarter.

### Phase 1: Foundation (Months 1-6)

This is about getting your financial house in order. No investing yet -- just laying the groundwork.

**Quarter 1 (Months 1-3):**

- **Week 1-2:** Track every dollar you spend. Use an app (Frollo, Pocketbook) or a spreadsheet. No judgement, just data.
- **Week 3-4:** Calculate your annual expenses, your current savings rate, and your rough FIRE number (25x expenses).
- **Week 5-6:** Audit your super. Check your fund's fees, investment option, and insurance. Switch to a low-fee indexed option if needed.
- **Week 7-8:** Consolidate lost super accounts via myGov. Check for unnecessary insurance duplicates.
- **Week 9-10:** Set up your bank account structure: everyday spending, emergency fund (Mojo), and investment account.
- **Week 11-12:** Destroy high-interest debt. List all debts by interest rate. Attack the highest first. If you have credit card debt, this is your top priority.

**Quarter 2 (Months 4-6):**

- Build your emergency fund to 3 months of expenses in a high-interest savings account
- Set up automatic transfers on payday: bills, emergency fund, investment contributions
- Review all subscriptions and recurring expenses -- cancel anything you do not actively use
- Get your insurance sorted: income protection, life insurance (through super is usually cheapest), health insurance if over the MLS threshold
- Open a brokerage account (SelfWealth, CommSec Pocket, or Vanguard Personal Investor)
- **Milestone:** Debt-free (except mortgage), emergency fund complete, automated savings in place

### Phase 2: Accelerate (Months 7-18)

Now the engine starts running. You are saving, investing, and optimising tax.

**Quarter 3 (Months 7-9):**

- Start salary sacrificing into super. Even $500/month makes a difference. Set it up through payroll.
- Make your first investment outside super. Start with a diversified ETF (VDHG, DHHF, or a VAS/VGS split).
- Calculate your carry-forward concessional contribution cap (check myGov > ATO > Super)
- Automate your investment contributions: set up a regular BPAY or direct debit to your brokerage

**Quarter 4 (Months 10-12):**

- Review your spending after 6 months of tracking. Where can you cut further?
- Research side income opportunities (see our side income lesson)
- Increase salary sacrifice if your budget allows
- Run your FIRE number calculator again with updated figures
- **Milestone:** Savings rate above 30%, first $10,000+ invested outside super

**Quarter 5-6 (Months 13-18):**

- Optimise your tax return -- claim every legitimate deduction
- Consider personal deductible super contributions if you have not maxed the cap
- Increase investment contributions as lifestyle costs are optimised
- Start tracking your net worth monthly (super + outside super + home equity - debts)
- Review your super investment option -- is it still right for your timeline?
- **Milestone:** Savings rate above 40%, net worth trajectory clearly upward

### Phase 3: Compound (Months 19-36)

This is the boring middle. Your systems are running, your savings rate is high, and compound interest is starting to show up. Your job is to stay the course.

**Every Quarter (Months 19-36):**

- Monthly: Review spending, invest surplus, track net worth
- Quarterly: Rebalance investments if needed, review savings rate, check super contributions year-to-date
- Annually: Tax return optimisation, review insurance needs, update FIRE number calculation

**Key focus areas:**
- Avoid lifestyle inflation -- as income grows, savings should grow, not spending
- Consider increasing risk exposure if your timeline supports it (e.g., shifting from balanced to growth)
- Explore whether you have hit Coast-FIRE (run the calculator from our Coast-FIRE lesson)
- If you have a mortgage, evaluate whether extra repayments or investing gives better after-tax returns at current rates

**Milestone at Month 36:** Net worth at 50%+ of FIRE number, or Coast-FIRE achieved

### Phase 4: Optimise (Months 37-48)

You are in the home stretch. Now it is about fine-tuning and preparing for the transition.

**Quarter 13-14 (Months 37-42):**

- Model your drawdown strategy (review our bucket strategy lesson)
- Calculate exactly how much you need outside super to bridge to preservation age
- Start building your cash bucket (Bucket 1) -- 1-2 years of expenses in a HISA
- If approaching 60, investigate TTR pension options

**Quarter 15-16 (Months 43-48):**

- Review your health insurance and Medicare arrangements for post-work life
- Plan your "retirement" activities -- what will you do with your time?
- Start mentally preparing for the identity shift (you are not your job)
- Run detailed projections: can you actually do this?
- **Milestone:** FIRE number within reach (80-90%), drawdown strategy designed

### Phase 5: Exit (Months 49-60)

**Quarter 17-18 (Months 49-54):**

- Finalise your drawdown buckets
- Build cash buffer to target (2-3 years of expenses)
- Reduce work hours if possible (test the lifestyle before committing)
- Sort out any administrative loose ends (wills, power of attorney, estate planning)

**Quarter 19-20 (Months 55-60):**

- Confirm your numbers one final time
- Give notice (or reduce to part-time if doing Barista-FIRE)
- Set up your investment income streams
- Celebrate. You did it.

### The Non-Negotiables

Regardless of where you are in the plan:

1. **Automate everything.** If it requires willpower, it will fail eventually.
2. **Track monthly.** What gets measured gets managed.
3. **Adjust annually.** Life changes. Your plan should too.
4. **Do not try to time the market.** Invest consistently, regardless of what the ASX is doing.
5. **Protect the downside.** Insurance, emergency fund, diversification. Boring, but essential.

This is your exit plan. Print it. Pin it to your wall. Review it every quarter. In five years, you will be glad you started today.
`,
}

export const ALL_MODULES: Module[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9,
  module10,
  module11,
  module12,
  module13,
  module14,
  module15,
]

export const TOTAL_MODULE_COUNT = ALL_MODULES.length

export const BEGINNER_MODULES = ALL_MODULES.filter(
  (m) => m.level === "beginner"
)

export const INTERMEDIATE_MODULES = ALL_MODULES.filter(
  (m) => m.level === "intermediate"
)

export const ADVANCED_MODULES = ALL_MODULES.filter(
  (m) => m.level === "advanced"
)

export const MODULE_MAP = Object.fromEntries(
  ALL_MODULES.map((m) => [m.id, m])
) as Record<string, Module>

export function getModuleById(id: string): Module | undefined {
  return MODULE_MAP[id]
}

export function getModulesByLevel(level: ModuleLevel): Module[] {
  return ALL_MODULES.filter((m) => m.level === level)
}

export function getModulesByCategory(category: string): Module[] {
  return ALL_MODULES.filter((m) => m.category === category)
}
