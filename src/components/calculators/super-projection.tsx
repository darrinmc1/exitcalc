"use client";

import { useState } from "react";

const SG_RATE = 11.5;

function formatAUD(n: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);
}

interface YearRow {
  age: number;
  employerContribution: number;
  employeeContribution: number;
  growth: number;
  balance: number;
}

function computeProjection(
  currentAge: number,
  salary: number,
  currentBalance: number,
  employeeContribPct: number,
  retirementAge: number,
  growthRatePct: number
): {
  rows: YearRow[];
  totalEmployer: number;
  totalEmployee: number;
  totalGrowth: number;
  finalBalance: number;
} {
  const rows: YearRow[] = [];
  let balance = currentBalance;
  let totalEmployer = 0;
  let totalEmployee = 0;
  let totalGrowth = 0;

  for (let age = currentAge; age < retirementAge; age++) {
    const employerContrib = salary * (SG_RATE / 100);
    const employeeContrib = salary * (employeeContribPct / 100);
    balance += employerContrib + employeeContrib;
    const growth = balance * (growthRatePct / 100);
    balance += growth;

    totalEmployer += employerContrib;
    totalEmployee += employeeContrib;
    totalGrowth += growth;

    rows.push({
      age: age + 1,
      employerContribution: employerContrib,
      employeeContribution: employeeContrib,
      growth,
      balance,
    });
  }

  return {
    rows,
    totalEmployer,
    totalEmployee,
    totalGrowth,
    finalBalance: balance,
  };
}

export function SuperProjection() {
  const [currentAge, setCurrentAge] = useState(35);
  const [salary, setSalary] = useState(100000);
  const [currentBalance, setCurrentBalance] = useState(80000);
  const [employeeContribPct, setEmployeeContribPct] = useState(0);
  const [retirementAge, setRetirementAge] = useState(60);
  const [growthRate, setGrowthRate] = useState(7);

  const { rows, totalEmployer, totalEmployee, totalGrowth, finalBalance } =
    computeProjection(
      currentAge,
      salary,
      currentBalance,
      employeeContribPct,
      retirementAge,
      growthRate
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
            Super Projection Calculator
          </h1>
          <p className="text-slate-400 mt-2">
            Project your Australian superannuation balance at retirement.
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
              <label className={labelClass}>Annual Salary (AUD)</label>
              <input
                type="number"
                className={inputClass}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                min={0}
              />
            </div>
            <div>
              <label className={labelClass}>Current Super Balance (AUD)</label>
              <input
                type="number"
                className={inputClass}
                value={currentBalance}
                onChange={(e) => setCurrentBalance(Number(e.target.value))}
                min={0}
              />
            </div>
            <div>
              <label className={labelClass}>Employee Contribution (%)</label>
              <input
                type="number"
                className={inputClass}
                value={employeeContribPct}
                onChange={(e) => setEmployeeContribPct(Number(e.target.value))}
                min={0}
                max={100}
                step={0.5}
              />
            </div>
            <div>
              <label className={labelClass}>Retirement Age</label>
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
          <p className="text-xs text-slate-500 mt-4">
            SG Rate: {SG_RATE}% (Superannuation Guarantee rate as of 2024-25)
          </p>
        </div>

        {/* Summary Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">
              Projected Balance at {retirementAge}
            </p>
            <p className="text-2xl font-bold text-teal-400">
              {formatAUD(finalBalance)}
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">
              Total Employer Contributions
            </p>
            <p className="text-2xl font-bold text-amber-400">
              {formatAUD(totalEmployer)}
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">
              Total Employee Contributions
            </p>
            <p className="text-2xl font-bold text-amber-400">
              {formatAUD(totalEmployee)}
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="text-sm text-slate-400 mb-1">
              Total Investment Growth
            </p>
            <p className="text-2xl font-bold text-teal-400">
              {formatAUD(totalGrowth)}
            </p>
          </div>
        </div>

        {/* Year-by-Year Table */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 overflow-x-auto">
          <h2 className="text-xl font-semibold text-teal-400 mb-4">
            Year-by-Year Projection
          </h2>
          <table className="border-collapse w-full text-sm">
            <thead>
              <tr className="bg-white/10 text-teal-400">
                <th className="px-4 py-3 text-left">Age</th>
                <th className="px-4 py-3 text-right">Employer Contrib.</th>
                <th className="px-4 py-3 text-right">Employee Contrib.</th>
                <th className="px-4 py-3 text-right">Growth</th>
                <th className="px-4 py-3 text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.age} className="even:bg-white/5">
                  <td className="px-4 py-2 text-left">{row.age}</td>
                  <td className="px-4 py-2 text-right">
                    {formatAUD(row.employerContribution)}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {formatAUD(row.employeeContribution)}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {formatAUD(row.growth)}
                  </td>
                  <td className="px-4 py-2 text-right font-medium text-teal-400">
                    {formatAUD(row.balance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
