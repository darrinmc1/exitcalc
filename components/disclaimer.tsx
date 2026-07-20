export function Disclaimer({ variant = "full" }: { variant?: "full" | "short" }) {
  if (variant === "short") {
    return (
      <p className="text-xs text-slate-500 leading-relaxed">
        General information only — not personal financial advice. Super and tax
        rules change regularly; confirm current figures at{" "}
        <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">ato.gov.au</a>{" "}
        and{" "}
        <a href="https://moneysmart.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">moneysmart.gov.au</a>,
        and consider advice from a licensed financial adviser before acting.
      </p>
    )
  }
  return (
    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-slate-400 leading-relaxed">
      <strong className="text-amber-400/90">General information only.</strong> The
      calculators, lessons, and workbook on this site provide factual and general
      information about superannuation and financial independence. They do not
      take into account your objectives, financial situation, or needs, and are
      not personal financial, tax, or legal advice. Superannuation and tax rules
      change frequently and depend on your circumstances. Before acting, verify
      current figures with the{" "}
      <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">ATO</a>{" "}
      and{" "}
      <a href="https://moneysmart.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">MoneySmart</a>,
      and consider seeking advice from a licensed financial adviser or registered
      tax agent.
    </div>
  )
}
