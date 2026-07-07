"use client";

import { useState } from "react";

function formatAUD(n: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);
}

function computeFIRE(
  annualExpenses: number,
  swrPct: number,
  currentSavings: number,
  annualSavings: number,
  growthRatePct: number
): {
  fireNumber: number;
  yearsToFIRE: number;
  targetDate: string;
  monthlySavingsNeeded: number;
} {
  const fireNumber = swrPct > 0 ? annualExpenses / (swrPct / 100) : 0;

  let balance = currentSavings;
  let years = 0;
  const maxYears = 200;

  if (balance < fireNumber && (annualSavings > 0 || growthRatePct > 0)) {
    while (balance < fireNumber && years < maxYears) {
      balance += annualSavings;
      balance *= 1 + growthRatePct / 100;
      years++;
    }
  } else if (balance >= fireNumber) {
    years = 0;
  } else {
    years = maxYears;
  }

  const today = new Date();
  const targetYear = today.getFullYear() + years;
  const targetDate =
    years >= maxYears
      ? "Not reachable"
      : `${today.toLocaleString("en-AU", { month: "long" })} ${targetYear}`;

  // Monthly savings needed to reach FIRE in same number of years if starting fresh
  // Using future value of annuity formula: FV = PMT * [((1+r)^n - 1) / r]
  // We need: fireNumber - currentSavings * (1+r)^n = PMT * [((1+r)^n - 1) / r]
  let monthlySavingsNeeded = 0;
  if (years > 0 && years < maxYears) {
    const monthlyRate = growthRatePct / 100 / 12;
    const months = years * 12;
    if (monthlyRate > 0) {
      const futureCurrentSavings =
        currentSavings * Math.pow(1 + growthRatePct / 100, years);
      const remainingNeeded = fireNumber - futureCurrentSavings;
      if (remainingNeeded > 0) {
        monthlySavingsNeeded =
          (remainingNeeded * monthlyRate) /
          (Math.pow(1 + monthlyRate, months) - 1);
      }
    } else {
      monthlySavingsNeeded =
        (fireNumber - currentSavings) / months;
    }
  }

  return {
    fireNumber,
    yearsToFIRE: Math.min(years, maxYears),
    targetDate,
    monthlySavingsNeeded: Math.max(0, monthlySavingsNeeded),
  };
}

export function FIRENumber() {
  const [annualExpenses, setAnnualExpenses] = useState(60000);
  const [swr, setSwr] = useState(4);
  const [currentSavings, setCurrentSavings] = useState(150000);
  const [annualSavings, setAnnualSavings] = useState(30000);
  const [growthRate, setGrowthRate] = useState(7);

  const { fireNumber, yearsToFIRE, targetDate, monthlySavingsNeeded } =
    computeFIRE(annualExpenses, swr, currentSavings, annualSavings, growthRate);

  const progressPct =
    fireNumber > 0
      ? Math.min((currentSavings / fireNumber) * 100, 100)
      : 0;

  const inputClass =
    "bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 focus:outline-none w-full";
  const labelClass = "text-sm text-slate-400 mb-1 block";

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-teal-400">
            FIRE Number Calculator
          </h1>
          <p className="text-slate-400 mt-2">
            Calculate your Financial Independence, Retire Early target and how
            long it will take to reach it.
          </p>
        </div>

        {/* Inputs */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Annual Expenses (AUD)</label>
              <input
                type="number"
                className={inputClass}
                value={annualExpenses}
                onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                min={0}
              />
            </div>
            <div>
              <label className={labelClass}>Safe Withdrawal Rate (%)</label>
              <input
                type="number"
                className={inputClass}
                value={swr}
                onChange={(e) => setSwr(Number(e.target.value))}
                min={0.5}
                max={10}
                step={0.25}
              />
            </div>
            <div>
              <label className={labelClass}>Current Savings (AUD)</label>
              <input
                type="number"
                className={inputClass}
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                min={0}
              />
            </div>
            <div>
              <label className={labelClass}>Annual Savings (AUD)</label>
              <input
                type="number"
                className={inputClass}
                value={annualSavings}
                onChange={(e) => setAnnualSavings(Number(e.target.value))}
                min={0}
              />
            </div>
            <div>
              <label className={labelClass}>Expected Growth Rate (%)</label>
              <input
                type="number"
                className={inputClass}
                value={growthRate}
                onChange={(e) => setGrowthRate(Number(e.target.value))}
                min={0}
                max={20}
                step={0.5}
              />
            </div>
          </div>
        </div>

        {/* Summary Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">Your FIRE Number</p>
            <p className="text-2xl font-bold text-teal-400">
              {formatAUD(fireNumber)}
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">Years to FIRE</p>
            <p className="text-2xl font-bold text-amber-400">
              {yearsToFIRE >= 200 ? "200+" : yearsToFIRE}
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">Target Date</p>
            <p className="text-2xl font-bold text-teal-400">{targetDate}</p>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">Monthly Savings Needed</p>
            <p className="text-2xl font-bold text-amber-400">
              {formatAUD(monthlySavingsNeeded)}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-teal-400 mb-4">
            Progress to FIRE
          </h2>
          <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
            <span>{formatAUD(currentSavings)}</span>
            <span>{formatAUD(fireNumber)}</span>
          </div>
          <div className="w-full h-6 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progressPct}%`,
                background:
                  progressPct >= 100
                    ? "linear-gradient(90deg, #0f766e, #2dd4bf)"
                    : "linear-gradient(90deg, #f59e0b, #fbbf24)",
              }}
            />
          </div>
          <p className="text-sm text-slate-400 mt-2 text-center">
            {progressPct.toFixed(1)}% of your FIRE Number
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-500 text-center">
          This calculator is for illustrative purposes only. It does not
          constitute financial advice. Consult a licensed financial adviser.
        </p>
      </div>
    </div>
  );
}
