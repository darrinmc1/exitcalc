import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import posts from "@/lib/blog"
import { siteConfig } from "@/config/site.config"
import { Disclaimer } from "@/components/disclaimer"

type Section = { heading: string; paragraphs: string[] }

const articleBodies: Record<string, { sections: Section[] }> = {
  "fire-number": {
    sections: [
      {
        heading: "What exactly is a FIRE number?",
        paragraphs: [
          "Your FIRE number is the invested total that can cover living expenses so paid work becomes optional. For Australians that total usually sits in two places: super (generally inaccessible until preservation age) and assets outside super.",
          "Every FIRE plan on this site comes back to that estimate: what financial independence costs at your spending level, in your dollars, under a withdrawal-rate rule of thumb.",
        ],
      },
      {
        heading: "The 25x shortcut",
        paragraphs: [
          "The classic shortcut is to multiply annual spending by 25. That is the 4% rule of thumb: if the first-year withdrawal is 4% of the portfolio, a portfolio 25 times spending produces that spending. It is a planning shortcut, not a physical law.",
          "Two caveats. First, the 4% figure is associated with diversified portfolios and long time horizons — not a short period in cash. Second, spending is the input you control; a lower expense figure lowers the target by 25 times each dollar.",
        ],
      },
      {
        heading: "Making it Australian: super, HECS and the mortgage",
        paragraphs: [
          "Here's where it gets local. Money in super counts towards your number, but you can't touch most of it until preservation age, which means most Aussies end up with two numbers: the super number for the later years, and a bridge number to cover the gap between exiting the workforce and unlocking your super.",
          "HECS debt quietly inflates your number too, because repayments are income-based and eat a slice of whatever you withdraw. And if you're still paying off a home loan, your FIRE number has to cover those repayments as well — or you need a plan to have the mortgage gone before you exit. The good news: these are all inputs you can model, not mysteries.",
        ],
      },
      {
        heading: "Why your number is a range, not a verdict",
        paragraphs: [
          "Spending is not constant. Calculate a lean version and a comfortable version, and be clear which one you are using as the working target.",
          "Markets, inflation, and life events move the picture. A range absorbs that better than a single figure treated as a verdict.",
        ],
      },
      {
        heading: "What to do with your number once you have it",
        paragraphs: [
          "Once you know the number, the whole FIRE plan becomes arithmetic in reverse: your savings rate, your expected timeline, your super strategy and the gap years in between. That's it. That's the entire game — the number converts a vague dream of quitting into a date on the calendar.",
          "When you get serious about the super side, check the current ATO rates, contribution caps and the rules for your situation, because they change and the ATO website is oddly good at explaining them. Your FIRE number is a target, not an identity — aim at it, adjust it, and let it do the motivating.",
        ],
      },
    ],
  },
  "coast-fire": {
    sections: [
      {
        heading: "Coast-FIRE, in one breath",
        paragraphs: [
          "Coast-FIRE is the point where your existing savings will grow into a full FIRE number by retirement age on their own — with zero further contributions. From that day forward, every dollar you earn is for living, not for saving. You're not retired; you're just done with the saving part.",
          "You still work. The difference is that further saving is no longer required for the modelled target, so you can consider lower-paid or part-time work if income still covers today's spending.",
        ],
      },
      {
        heading: "The compounding doing the heavy lifting",
        paragraphs: [
          "The maths is the same compounding that makes super funds send you cheerful projection charts: money grows, growth earns growth, and eventually the growth out-earns your contributions. Coast-FIRE is simply the point where you stop adding fuel to the fire because it's big enough to finish cooking on its own.",
          "Because growth is assumed rather than guaranteed, Coast-FIRE relies on long time horizons and reasonable long-term returns — not a specific promise from anyone. If you're planning to coast for thirty years, you can afford to be patient with your portfolio. If you're coasting for eight, you're really just delaying retirement with extra steps.",
        ],
      },
      {
        heading: "Why super is the natural coast vehicle",
        paragraphs: [
          "For most Australians, the coasting happens inside super. Your super balance compounds in a tax-advantaged environment for decades, which is precisely the setup Coast-FIRE needs. The uncomfortable bit: you can't access it until preservation age, so your coast number and your actual retirement date have to line up with the rules.",
          "That's why the ExitCalc Coast-FIRE calculator earns its keep — it shows you the age where your super and outside investments can stop being fed and still deliver. It's also why the answer usually involves a mix: super coasting for the long game, outside investments for the gap years.",
        ],
      },
      {
        heading: "The catch: you still have to work",
        paragraphs: [
          "Coast-FIRE does not mean leaving work. It means the modelled portfolio no longer needs extra contributions to reach the target by the date you chose. You still need income for today's spending.",
          "If the plan includes part-time work while a mortgage is outstanding, include housing costs in the spending figure. That is an input question, not a personality question.",
        ],
      },
      {
        heading: "Coasting to a number, not a feeling",
        paragraphs: [
          "The trick is to coast towards a specific number, not a vague sense of relaxation. Calculate your Coast-FIRE age, check it against the current super rules and ATO rates for your situation, and then decide what kind of work you'd actually do with the pressure off.",
          "Coast-FIRE is not early retirement. It is an earlier date at which saving can stop under a growth assumption. Whether that is useful depends on your income, housing, and the FIRE number you typed.",
        ],
      },
    ],
  },
  "super-vs-etfs": {
    sections: [
      {
        heading: "Super: the tax-advantaged vault",
        paragraphs: [
          "Super is the most tax-effective investment vehicle most Australians will ever touch. Contributions are taxed at a concessional rate, investment earnings are taxed lightly, and in retirement the drawdowns can be tax-free. The ATO sets the current rates and caps, and they're genuinely generous for people who plan around them.",
          "The trade-off is the vault door: your money is locked away until preservation age. Super is brilliant at building long-term wealth and hopeless at funding the years between quitting your job and turning the preservation-age key. And remember, your employer's compulsory super guarantee is already quietly feeding this vault every pay cycle — the question is whether you add extra on top.",
        ],
      },
      {
        heading: "ETFs: the flexible engine room",
        paragraphs: [
          "ETFs are the accessible option: one holding can cover hundreds of companies, and you can sell when you need cash. That is why many plans keep gap-fund money (exit date to preservation age) in a taxable account rather than only in super.",
          "The trade-off is tax: dividends and capital gains are taxable in your own name at your marginal rate, which for a high earner is a meaningful drag. It's not a reason to avoid ETFs — it's a reason to hold them deliberately and know when you're selling.",
        ],
      },
      {
        heading: "Where HECS and housing fit in",
        paragraphs: [
          "Your HECS debt sits in the background of all of this, because extra super contributions don't shrink your repayments the way some people hope, and your marginal rate influences which vehicle wins. It's worth checking the current ATO rules for your situation before choosing sides.",
          "Housing is usually the largest budget line. A paid-off home lowers required spending; extra repayments compete with investing. There is no universal right split — only a split that matches your numbers and risk tolerance.",
        ],
      },
      {
        heading: "The boring answer: both",
        paragraphs: [
          "The honest answer to 'super or ETFs?' is 'yes'. Use super for the decades-long compounding where the tax advantage compounds too, and use ETFs for the flexible middle period. A common starting point is arranging the super contributions that make sense at your income level first, then directing anything left over into ETFs. The exact split depends on your age, your spending and how many years you need to bridge.",
          "Anyone selling you a one-vehicle answer is selling you simplicity at the cost of your own numbers. Run both through a projection, check the current ATO contribution caps, and let your exit date — not a debate on the internet — decide the split for your own situation and your own timeline.",
        ],
      },
    ],
  },
  "4-percent-rule": {
    sections: [
      {
        heading: "The rule in one sentence",
        paragraphs: [
          "The 4% rule of thumb says you withdraw 4% of the portfolio in the first year of retirement, adjust that dollar amount for inflation each year, and use historical studies as a guide to whether the money lasted. It is a shortcut. The next section explains where the figure came from and why it is not a guarantee.",
          "Its appeal is obvious: it converts the terrifying question 'how much can I safely spend?' into one multiplication sum. Whatever your annual spending is, the rule suggests a portfolio roughly 25 times that size — then a 4% withdrawal each year, adjusted for inflation, should keep the whole machine running.",
        ],
      },
      {
        heading: "Where it came from",
        paragraphs: [
          "The rule comes from the Trinity study, a 1990s American analysis of historical market returns that tested different withdrawal rates over 30-year periods. Four percent was the rate that survived the worst historical stretches — including the crashes and flat decades that tend to feature in Australian retirement nightmares.",
          "The original work is usually read as a 30-year US retirement. Many Australian FIRE plans are longer than that, and local returns, franking, and super access rules differ. Treat 4% as a starting assumption to stress-test, not a rule that appears on a super statement.",
        ],
      },
      {
        heading: "Australian wrinkles: preservation age and the pension",
        paragraphs: [
          "The first local wrinkle is that your money arrives in two instalments: outside super for the gap years, then super once you hit preservation age. The 4% rule doesn't care which bucket the money is in, but your drawdown strategy absolutely does.",
          "The second wrinkle is the Age Pension. A part pension later in life can reduce how much you need to withdraw from your own money. Current income and asset tests are on the Services Australia website. It will not apply to every household; ignoring it entirely models a harder retirement than some people will have.",
          "HELP/HECS repayments are income-based. If taxable income falls after you exit, compulsory repayments can fall with it. Check current ATO thresholds for your situation.",
        ],
      },
      {
        heading: "How to use it without worshipping it",
        paragraphs: [
          "Use 4% as a planning assumption and then test a lower rate (for example 3% or 3.5%). If the plan only works at 5%, the margin is thin. A rate that still works under conservative assumptions is more useful than one that only works in a best case.",
          "The historical studies assume spending can flex when markets are weak. The rule is not a reason to ignore the portfolio for decades.",
        ],
      },
    ],
  },
  "five-money-habits": {
    sections: [
      {
        heading: "Habit one: automate your super before you see the money",
        paragraphs: [
          "The single most effective money habit in Australia is also the most boring: arrange for extra super contributions to leave your bank account the day your pay arrives, before you can spend it on anything delightful. What you never see, you never miss, and your future self gets decades of compounding on it. Automation removes willpower from the equation, and willpower is the least reliable part of any money plan.",
          "Check the current ATO contribution caps first, because there's a limit to how much concessional super you can add each year — overshooting it turns a tax win into an administrative headache.",
        ],
      },
      {
        heading: "Habit two: run a subscription autopsy",
        paragraphs: [
          "Once a year, list recurring charges from bank and card statements. Unused subscriptions are a direct cut to annual expenses, which lowers a 25× FIRE target by 25 times each dollar removed.",
          "This isn't about denying yourself everything — it's about paying for what you use and stopping the quiet bleed. A handful of forgotten subscriptions each month is real money over a decade, and it's been moving your exit date backwards without you noticing.",
        ],
      },
      {
        heading: "Habit three: treat HECS like a decision, not a fact",
        paragraphs: [
          "HECS is often treated as an immovable fact of Australian life, but it responds to strategy. The indexation rate, your income-based repayments and whether voluntary payments make sense for you all depend on your personal situation and the current ATO rates.",
          "For some people, extra HECS payments are a guaranteed, debt-reducing win. For others, the same money in super earns more over the long run. The habit isn't picking a side — it's running the comparison each year instead of assuming the debt sorts itself out.",
        ],
      },
      {
        heading: "Habit four: negotiate the big line items",
        paragraphs: [
          "Housing is the largest line in most Australian budgets. When a fixed-rate period ends, the revert rate is a starting offer. Comparing rates or refinancing can change the largest outgoing.",
          "The same logic applies to your income. A raise you negotiate once keeps paying you every year until you retire, which makes it one of the highest-return conversations you'll ever have. Ask for the thing; the worst they can say is no, and then you're exactly where you started.",
        ],
      },
      {
        heading: "Habit five: have a monthly money date",
        paragraphs: [
          "Once a month, spend twenty minutes with your finances: check your spending against your plan, look at your super and investments, and update your FIRE projection. It's not budgeting as punishment — it's a status check, like a service light for your exit plan.",
          "The habit that moves an exit date is regular review: notice leaks, keep the contribution path, and let compounding work on a known savings rate. That is process, not a one-off sacrifice.",
        ],
      },
    ],
  },
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.s === slug)
  return {
    title: post ? `${post.t} | ${siteConfig.name}` : `Blog | ${siteConfig.name}`,
    description: post?.e,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.s === slug)
  if (!post) notFound()

  const sections = articleBodies[slug]?.sections ?? []
  const related = posts.filter((p) => p.s !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.d)}
            </span>
            <span>{post.r} read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{post.t}</h1>
          <p className="text-lg text-slate-300">{post.e}</p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-12">
        {sections.map((section, si) => (
          <div key={section.heading}>
            <h2 className="text-xl font-bold mt-10 mb-4 text-white">{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base text-slate-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <div className="mt-10">
          <Disclaimer variant="full" />
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 mt-10">
          <h2 className="text-lg font-bold text-white mb-4">Keep reading</h2>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.s}
                href={`/blog/${r.s}`}
                className="rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              >
                {r.t}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
