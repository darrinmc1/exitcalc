"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { FIRENumberCalculator } from "@/components/calculators/fire-number"
import { Disclaimer } from "@/components/disclaimer"
import { NewsletterForm } from "@/components/newsletter-form"
import { ALL_TOOLS } from "@/data/tools"
import type { Module } from "@/data/modules"
import { Reveal, useParallax } from "@/components/home/motion"

const WHAT_YOU_GET = [
  {
    n: "01",
    title: "FIRE Number calculator",
    body: "Two-bucket AU model: gap fund until preservation age, plus a super target from the 4% rule of thumb.",
  },
  {
    n: "02",
    title: "Super projection",
    body: "Salary, employer SG, and salary sacrifice compounded to a target age. Tax inside super is factored in.",
  },
  {
    n: "03",
    title: "Coast-FIRE",
    body: "See whether existing balances can grow to the target without further contributions.",
  },
  {
    n: "04",
    title: "Written lessons",
    body: "Guided explainers that pair with the tools — method, assumptions, and how to read the result.",
  },
  {
    n: "05",
    title: "General information only",
    body: "Not personal financial advice. Confirm current super and tax figures with the ATO and MoneySmart before acting.",
  },
]

export function ScrollCraftHome({
  featuredLessons,
}: {
  featuredLessons: Module[]
}) {
  const { layer } = useParallax()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070b14] text-slate-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="sc-dots absolute inset-0" style={layer(0.08, 80)} />
        <div
          className="absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-[120px]"
          style={layer(0.18, 100)}
        />
        <div
          className="absolute right-[-6rem] top-24 h-[32rem] w-[32rem] rounded-full bg-teal-400/12 blur-[130px]"
          style={layer(-0.12, 90)}
        />
        <div
          className="absolute bottom-[20%] left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]"
          style={layer(0.22, 70)}
        />
      </div>

      <HeroFold layer={layer} />

      <WhatYouGet />

      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Calculators
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            FIRE number, super projection, Coast-FIRE.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400">
            Open any tool and change the inputs. No account required.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ALL_TOOLS.map((tool, i) => (
            <Reveal key={tool.id} delayMs={i * 80}>
              <Link
                href={`/tools/${tool.id}`}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-emerald-500/30"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400/90">
                  Calculator
                </p>
                <h3 className="mt-3 text-xl font-bold text-white group-hover:text-emerald-300">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {tool.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Lessons
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            How the two-bucket numbers are built
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400">
            Short written explainers that sit next to the calculators: method, assumptions, and how to read the result.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredLessons.map((mod, i) => (
            <Reveal key={mod.id} delayMs={i * 70}>
              <Link
                href={`/lessons/${mod.id}`}
                className="block rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-emerald-500/30"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400/90">
                  Written · {mod.duration} · free
                </p>
                <h3 className="mt-3 text-xl font-bold text-white">{mod.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{mod.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link
            href="/lessons"
            className="text-sm font-medium text-emerald-400 underline-offset-4 hover:text-emerald-300 hover:underline"
          >
            Browse all lessons
          </Link>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
            {siteConfig.copy.emailCaptureHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
            {siteConfig.copy.emailCaptureSubheading}
          </p>
          <div className="mt-8">
            <NewsletterForm source="homepage" />
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Want a structured plan?{" "}
            <Link
              href="/products/exit-plan-workbook"
              className="text-slate-300 underline-offset-2 hover:text-emerald-400 hover:underline"
            >
              Exit Plan Workbook (Coming Soon)
            </Link>
          </p>
        </Reveal>
      </section>
    </div>
  )
}

function HeroFold({
  layer,
}: {
  layer: (factor: number, cap?: number) => { transform: string }
}) {
  return (
    <section
      id="calculator"
      className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col justify-center px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:py-10 xl:gap-14"
    >
      <div
        className="relative z-10 shrink-0 lg:w-[44%] lg:max-w-xl"
        style={layer(-0.04, 36)}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
          FIRE / exit calculators · method lessons
        </p>
        <h1 className="mt-2 font-display text-[1.7rem] font-extrabold leading-[1.15] tracking-tight text-white sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.15rem]">
          {siteConfig.copy.heroTitle}
        </h1>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-base">
          {siteConfig.copy.heroSubtitle}
        </p>
        <p className="mt-2 hidden max-w-lg text-sm text-slate-500 sm:mt-3 sm:block">
          Illustrative two-bucket model — gap fund to preservation age, then
          expenses times twenty-five for the super target.{" "}
          <Link
            href="/lessons/what-is-fire-number"
            className="text-emerald-400/90 underline underline-offset-2 hover:text-emerald-300"
          >
            How it&apos;s calculated
          </Link>
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-6">
          <a
            href="#fold-calculator"
            className="inline-flex rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:from-emerald-400 hover:to-teal-500 sm:px-7 sm:py-3.5"
          >
            {siteConfig.copy.ctaButton}
          </a>
          <Link
            href="/lessons"
            className="inline text-sm font-medium text-slate-400 underline-offset-4 hover:text-emerald-400 hover:underline"
          >
            {siteConfig.copy.ctaSecondary}
          </Link>
        </div>
      </div>

      <div className="relative mt-3 min-h-0 flex-1 lg:mt-0">
        <div
          className="pointer-events-none absolute -inset-6 hidden rounded-[2rem] bg-emerald-400/20 blur-3xl sm:block"
          style={layer(0.1, 50)}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-6 top-6 hidden h-[calc(100%-1.5rem)] rounded-2xl border border-white/10 bg-slate-900/50 sm:block"
          style={layer(0.16, 40)}
          aria-hidden="true"
        />
        <div
          id="fold-calculator"
          className="relative z-10 max-h-[min(58svh,34rem)] overflow-y-auto rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-[0_0_0_1px_rgba(16,185,129,0.12),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:max-h-none sm:overflow-visible sm:p-5 md:p-6"
        >
          <FIRENumberCalculator variant="fold" />
          <div className="mt-3 hidden sm:block">
            <Disclaimer variant="short" />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatYouGet() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-28">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                What you get
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                Gap fund, super target, and the method behind both.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                Change the inputs on the live calculators. Read how the
                two-bucket result is built.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mt-10 space-y-4 lg:col-span-7 lg:mt-0">
          {WHAT_YOU_GET.map((item, i) => (
            <Reveal key={item.n} delayMs={i * 70}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-7">
                <p className="text-xs font-semibold tracking-[0.18em] text-emerald-400">
                  {item.n}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
