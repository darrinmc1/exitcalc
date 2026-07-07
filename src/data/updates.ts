export interface WeeklyUpdate {
  id: string
  title: string
  description: string
  content: string
  date: string
  tags: string[]
  category: string
}

const launchWeek: WeeklyUpdate = {
  id: "launch-week",
  title: "ExitCalc Launch Week: What We're Building and Why",
  description:
    "Introducing ExitCalc — Australian FIRE planning tools that cut through the noise.",
  content: `## Welcome to ExitCalc

We built ExitCalc because every FIRE calculator we found was built for Americans. 401(k) this, Roth IRA that. None of them understood superannuation, the SG rate, preservation age, or Division 293 tax.

So we made our own.

### What You'll Find Here

- **Super Projection Calculator** — See exactly where your super balance lands at retirement, factoring in the current 11.5% SG rate and your voluntary contributions.
- **FIRE Number Calculator** — Work out your target number using the 4% rule, adjusted for Australian costs and tax.
- **Coast-FIRE Calculator** — Find out if you can stop contributing and let compound interest do the heavy lifting.
- **15 Lessons** — Covering everything from basic FIRE concepts to SMSF property strategies, all written for Australians.

### Why Australia Is Actually Great for FIRE

The combination of compulsory super, relatively low capital gains tax for long-term holdings, and franking credits makes Australia one of the best countries in the world to pursue FIRE. Most people just don't know how to use these levers.

That's what we're here to fix.

### What's Coming

- Monthly content drops with new lessons
- Interactive scenario modelling
- A community for AU FIRE planners

Stay tuned.`,
  date: "2026-07-07",
  tags: ["Launch", "FIRE", "Australia"],
  category: "Announcement",
}

const sgRateUpdate: WeeklyUpdate = {
  id: "sg-rate-12-percent-2025",
  title: "SG Rate Hits 12% in 2025-26: What It Means for Your FIRE Timeline",
  description:
    "The Superannuation Guarantee just ticked up to 12%. Here's how it changes your numbers.",
  content: `## The SG Rate Just Went Up Again

As of 1 July 2025, the Superannuation Guarantee rate increased to 12%. This is the final scheduled increase from the original plan that started at 9.5%.

### What This Means in Dollar Terms

On a $100,000 salary:
- **Old rate (11.5%)**: $11,500/year into super
- **New rate (12%)**: $12,000/year into super
- **Difference**: $500/year — sounds small, but compounded over 25 years at 7% growth that's roughly $31,600 extra at retirement.

### Impact on Your FIRE Timeline

For most people pursuing FIRE, this is a net positive:
- Your employer is putting more into super for you
- If your salary stays flat, some employers may argue the SG increase "absorbs" your next pay rise — watch for this
- The concessional contributions cap remains at $30,000, so you have slightly less room for voluntary salary sacrifice

### What to Do

1. Update your super projection with the new 12% rate (our calculator already reflects this)
2. Review your salary sacrifice arrangement — you may need to reduce voluntary contributions to stay under the $30,000 cap
3. Check if your employer is paying SG on top of or inclusive of your salary

The bottom line: more compulsory super is good for FIRE. Just make sure your employer isn't sneaking it out of your pay packet.`,
  date: "2026-07-01",
  tags: ["Super", "SG Rate", "Policy"],
  category: "Super Update",
}

export const ALL_UPDATES: WeeklyUpdate[] = [launchWeek, sgRateUpdate]

export const UPDATE_MAP = Object.fromEntries(
  ALL_UPDATES.map((u) => [u.id, u]),
) as Record<string, WeeklyUpdate>

export function getUpdateById(id: string): WeeklyUpdate | undefined {
  return UPDATE_MAP[id]
}
