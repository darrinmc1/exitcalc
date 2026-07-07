"use client";

import { useState } from "react";

function formatAUD(n: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);
}

function computeCoastFIRE(
  currentAge: number,
  retirementAge: number,
  desiredRetirementIncome: number,
  currentSuperBalance: number,
  growthRatePct: number,
  swrPct: number
): {
  fireNumber: number;
  coastNumber: number;
  hasHitCoast: boolean;
  surplusDeficit: number;
  projectedSuperAtRetirement: number;
  yearsToRetirement: number;
} {
  const yearsToRetirement = Math.max(retirementAge - currentAge, 0);
  const fireNumber =
    swrPct > 0 ? desiredRetirementIncome / (swrPct / 100) : 0;

  const growthMultiplier = Math.pow(1 + growthRatePct / 100, yearsToRetirement);
  const coastNumber = growthMultiplier > 0 ? fireNumber / growthMultiplier : 0;

  const hasHitCoast = currentSuperBalance >= coastNumber;
  const surplusDeficit = currentSuperBalance - coastNumber;

  const projectedSuperAtRetirement = currentSuperBalance * growthMultiplier;

  return {
    fireNumber,
    coastNumber,
    hasHitCoast,
    surplusDeficit,
    projectedSuperAtRetirement,
    yearsToRetirement,
  };
}

export function CoastFIRE() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(60);
  const [desiredIncome, setDesiredIncome] = useState(50000);
  const [currentSuper, setCurrentSuper] = useState(100000);
  const [growthRate, setGrowthRate] = useState(7);
  const [swr, setSwr] = useState(4);

  const {
    fireNumber,
    coastNumber,
    hasHitCoast,
    surplusDeficit,
    projectedSuperAtRetirement,
    yearsToRetirement,
  } = computeCoastFIRE(
    currentAge,
    retirementAge,
    desiredIncome,
    currentSuper,
    growthRate,
    swr
  );

  const inputClass =
    "bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 focus:outline-none w-full";
  const labelClass = "text-sm text-slate-400 mb-1 block";

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-teal-400">
            Coast FIRE Calculator
          </h1>
          <p className="text-slate-400 mt-2">
            Find out if your current super balance can grow to your FIRE number
            on its own, with no further contributions.
          </p>
        </div>

        {/* Inputs */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Current Age</label>
              <input
                type="number"
                className={inputClass}
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                min={16}
                max={75}
              />
            </div>
            <div>
              <label className={labelClass}>Target Retirement Age</label>
              <input
                type="number"
                className={inputClass}
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                min={currentAge + 1}
                max={75}
              />
            </div>
            <div>
              <label className={labelClass}>
                Desired Retirement Income (AUD/yr)
              </label>
              <input
                type="number"
                className={inputClass}
                value={desiredIncome}
                onChange={(e) => setDesiredIncome(Number(e.target.value))}
                min={0}
              />
            </div>
            <div>
              <label className={labelClass}>
                Current Super Balance (AUD)
              </label>
              <input
                type="number"
                className={inputClass}
                value={currentSuper}
                onChange={(e) => setCurrentSuper(Number(e.target.value))}
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
          </div>
        </div>

        {/* Coast FIRE Status Banner */}
        {hasHitCoast ? (
          <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/40 p-6 text-center">
            <p className="text-2xl font-bold text-emerald-400">
              You've hit Coast FIRE!
            </p>
            <p className="text-slate-300 mt-2">
              Your current super balance of{" "}
              <span className="text-teal-400 font-semibold">
                {formatAUD(currentSuper)}
              </span>{" "}
              exceeds the Coast FIRE number of{" "}
              <span className="text-teal-400 font-semibold">
                {formatAUD(coastNumber)}
              </span>
              . You no longer need to make additional super contributions to
              reach your retirement target.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl bg-amber-900/30 border border-amber-500/30 p-6 text-center">
            <p className="text-2xl font-bold text-amber-400">
              Not yet at Coast FIRE
            </p>
            <p className="text-slate-300 mt-2">
              You need an additional{" "}
              <span className="text-amber-400 font-semibold">
                {formatAUD(Math.abs(surplusDeficit))}
              </span>{" "}
              in your super to reach Coast FIRE.
            </p>
          </div>
        )}

        {/* Summary Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">Coast FIRE Number</p>
            <p className="text-2xl font-bold text-teal-400">
              {formatAUD(coastNumber)}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Amount needed today
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">FIRE Number</p>
            <p className="text-2xl font-bold text-amber-400">
              {formatAUD(fireNumber)}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Target at retirement
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">
              {hasHitCoast ? "Surplus" : "Deficit"}
            </p>
            <p
              className={`text-2xl font-bold ${
                hasHitCoast ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {hasHitCoast ? "+" : "-"}
              {formatAUD(Math.abs(surplusDeficit))}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              vs Coast FIRE number
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">
              Projected Super at {retirementAge}
            </p>
            <p className="text-2xl font-bold text-teal-400">
              {formatAUD(projectedSuperAtRetirement)}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              No further contributions, {yearsToRetirement} years growth
            </p>
          </div>
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
