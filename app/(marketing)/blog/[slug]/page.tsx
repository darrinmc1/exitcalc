import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import posts from "@/lib/blog"
import { siteConfig } from "@/config/site.config"

type Section = { heading: string; paragraphs: string[] }

const articleBodies: Record<string, { sections: Section[] }> = {
  "fire-number": {
    sections: [
      {
        heading: "What exactly is a FIRE number?",
        paragraphs: [
          "Your FIRE number is the lump sum of invested money that can pay for your life indefinitely — the point where your portfolio works harder than you do, and the 9-to-5 becomes a lifestyle choice rather than a life sentence. For Australians it usually lives partly inside super and partly outside it, which is exactly the kind of complication we'll get to shortly.",
          "Every FIRE plan on this site ultimately funnels into one figure. Not your super balance, not your savings rate, not how many smashed avocados you've bravely declined. One number that says: this is what financial independence costs, in your dollars, at your spending level.",
        ],
      },
      {
        heading: "The 25x shortcut",
        paragraphs: [
          "The classic shortcut is to multiply your annual spending by 25. The logic runs through the 4% rule: if you can safely withdraw 4% of your portfolio each year, then a portfolio 25 times your annual spending produces exactly that spending. It's elegant, it's easy, and it's a rule of thumb rather than a law of physics.",
          "Two things to note before you get excited. First, the 4% figure assumes a diversified portfolio and a long time horizon — not a fortnight in cash under the mattress. Second, your spending is the variable you actually control, which is why the number feels intimidating but is secretly negotiable.",
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
          "Your spending will wobble. There will be a year with a new car, a year with a new roof, a year with a wedding that somehow costs more than the roof. So don't treat your FIRE number as a single sacred figure — calculate a lean version and a comfortable version, and know which one you're actually aiming at.",
          "That range is also your sanity saver. Markets move, inflation nibbles, life happens. A target range absorbs all of that; a single number just stresses you out whenever the share market has a bad week — which, if you're in this for the long haul, it will.",
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
          "The name makes it sound like a holiday on the Gold Coast. It is not. You still work. The difference is the work becomes optional-ish: you can take a lower-paying job you actually like, because the compounding is already doing your heavy lifting.",
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
          "Let's be honest about the catch, because every Coast-FIRE article that skips it is doing you a disservice. Coast-FIRE does not mean quitting. It means quitting the job you hate — ideally for one that pays less but hurts less. You still need income to cover today's spending; the portfolio only covers the future.",
          "If your plan is to coast at 35 by moving to part-time, run the numbers on housing first. Australians with a mortgage tend to discover that 'coast' is harder with a home loan attached. The good news: that's a solvable maths problem, not a personality flaw.",
        ],
      },
      {
        heading: "Coasting to a number, not a feeling",
        paragraphs: [
          "The trick is to coast towards a specific number, not a vague sense of relaxation. Calculate your Coast-FIRE age, check it against the current super rules and ATO rates for your situation, and then decide what kind of work you'd actually do with the pressure off.",
          "Coast-FIRE isn't early retirement — it's early relief. And for a lot of people, that's the version of the dream that's actually achievable, which makes it worth taking seriously.",
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
          "ETFs are the flexible option — a single trade gets you a slice of hundreds of companies, and you can sell whenever you like. A broad-market ETF gives you diversification without needing to become an expert in any single company — the financial equivalent of buying the whole menu. That makes ETFs the natural home for the bridge money that has to last from your exit date to your super access date.",
          "The trade-off is tax: dividends and capital gains are taxable in your own name at your marginal rate, which for a high earner is a meaningful drag. It's not a reason to avoid ETFs — it's a reason to hold them deliberately and know when you're selling.",
        ],
      },
      {
        heading: "Where HECS and housing fit in",
        paragraphs: [
          "Your HECS debt sits in the background of all of this, because extra super contributions don't shrink your repayments the way some people hope, and your marginal rate influences which vehicle wins. It's worth checking the current ATO rules for your situation before choosing sides.",
          "Housing complicates the picture further. A paid-off home is a powerful retirement asset that lowers your required spending, but paying off the mortgage and investing for FIRE at the same time means choosing between two good options — which, to be fair, is a nicer problem than most people have. There's no universal right answer; there's just your answer, calculated with your numbers.",
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
          "The 4% rule says you can withdraw 4% of your investment portfolio in your first year of retirement, adjust that amount for inflation each year, and have a very good chance of your money outlasting you. That's the whole rule. One sentence, no Greek letters, no maths degree required. If that sounds too good to be true, you're right to be suspicious — which is why the next section explains where the number actually came from.",
          "Its appeal is obvious: it converts the terrifying question 'how much can I safely spend?' into one multiplication sum. Whatever your annual spending is, the rule suggests a portfolio roughly 25 times that size — then a 4% withdrawal each year, adjusted for inflation, should keep the whole machine running.",
        ],
      },
      {
        heading: "Where it came from",
        paragraphs: [
          "The rule comes from the Trinity study, a 1990s American analysis of historical market returns that tested different withdrawal rates over 30-year periods. Four percent was the rate that survived the worst historical stretches — including the crashes and flat decades that tend to feature in Australian retirement nightmares.",
          "It was designed for a 30-year US retirement, which matters for two reasons. Australians often retire earlier than 65, which stretches the time horizon, and our market has its own personality. The rule is a well-tested starting point, not a divine commandment carved into a super statement.",
        ],
      },
      {
        heading: "Australian wrinkles: preservation age and the pension",
        paragraphs: [
          "The first local wrinkle is that your money arrives in two instalments: outside super for the gap years, then super once you hit preservation age. The 4% rule doesn't care which bucket the money is in, but your drawdown strategy absolutely does.",
          "The second wrinkle is the Age Pension. Many Australians will receive at least a part pension later in life, which effectively lowers how much you need to withdraw from your own money. A sensible plan models this — the current income and asset tests are on the Services Australia website and are worth a read with a cup of tea. It won't apply to everyone, but ignoring it entirely means modelling a retirement that's deliberately harder than the one you'll actually have.",
          "HECS deserves a mention too: if you still have a debt when you stop working, your repayments shrink with your income — one of the few times a government debt politely scales down for you.",
        ],
      },
      {
        heading: "How to use it without worshipping it",
        paragraphs: [
          "Use 4% as a planning assumption and then stress-test it. If your plan survives a 3% withdrawal rate as well, you'll sleep better. If it only works at 5%, you have a hobby, not a retirement plan. A withdrawal rate that survives your worst-case assumptions is worth more than one that merely survives your best-case spreadsheet.",
          "And remember the rule assumes you'll adjust spending when markets misbehave — which is exactly what most Australians actually do. The 4% rule isn't a licence to ignore your portfolio for 40 years; it's a licence to stop panicking every quarter.",
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
          "Once a year, open your bank statements and list every recurring charge. Streaming services, gyms, app subscriptions, that productivity tool you bought in a moment of January optimism. You will find at least one subscription you forgot existed, and cancelling it is the closest thing finance has to free money.",
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
          "Housing is the biggest line in most Australian budgets, so it deserves the most attention. When your fixed-rate home loan period ends, the bank's default rate is not a personality trait — it's a starting offer. A quick call to compare rates, or switching lenders, can shave real money off your biggest cost.",
          "The same logic applies to your income. A raise you negotiate once keeps paying you every year until you retire, which makes it one of the highest-return conversations you'll ever have. Ask for the thing; the worst they can say is no, and then you're exactly where you started.",
        ],
      },
      {
        heading: "Habit five: have a monthly money date",
        paragraphs: [
          "Once a month, spend twenty minutes with your finances: check your spending against your plan, look at your super and investments, and update your FIRE projection. It's not budgeting as punishment — it's a status check, like a service light for your exit plan.",
          "The habit that actually moves your exit date forward isn't any single heroic sacrifice. It's showing up monthly, noticing the leaks, and letting compounding do its job. Do that for a decade and the 9-to-5 starts looking very optional indeed.",
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
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-xl font-bold mt-10 mb-4 text-white">{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base text-slate-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

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
