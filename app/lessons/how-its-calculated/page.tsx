import Link from 'next/link';

export default function HowItsCalculatedPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline text-sm">
          &larr; Back to Dashboard
        </Link>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        How Your Score Is Calculated
      </h1>
      <p className="text-gray-500 text-sm mb-10">
        A transparent, step-by-step breakdown of the methodology behind your financial health score.
      </p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          Your financial health score is a single number between <strong>0 and 100</strong> that
          summarises how well your current financial habits align with long-term financial
          wellbeing. It is recalculated every time you complete a lesson, update your profile,
          or log new financial data.
        </p>
      </section>

      {/* The Five Pillars */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">The Five Pillars</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Your score is built from five equally weighted pillars. Each pillar contributes
          up to <strong>20 points</strong>, giving a maximum total of 100.
        </p>

        <div className="space-y-6">
          {/* Pillar 1 */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💰</span>
              <h3 className="font-semibold text-gray-800">1. Savings Rate (20 pts)</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Measures the percentage of your monthly take-home pay that you save or invest.
              A savings rate of <strong>20 % or more</strong> earns the full 20 points.
              Below 20 %, points scale linearly — for example, a 10 % savings rate earns 10 points.
            </p>
            <div className="mt-3 bg-gray-50 rounded-lg p-3 text-xs text-gray-500 font-mono">
              Points = (savings rate % / 20) × 20 &nbsp;|&nbsp; capped at 20
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🛡️</span>
              <h3 className="font-semibold text-gray-800">2. Emergency Fund (20 pts)</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Assesses how many months of essential expenses your liquid savings can cover.
              The benchmark is <strong>3–6 months</strong>. Reaching 3 months earns 10 points;
              reaching 6 months earns the full 20 points. Points scale proportionally between
              those milestones.
            </p>
            <div className="mt-3 bg-gray-50 rounded-lg p-3 text-xs text-gray-500 font-mono">
              Points = (months covered / 6) × 20 &nbsp;|&nbsp; capped at 20
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📉</span>
              <h3 className="font-semibold text-gray-800">3. Debt-to-Income Ratio (20 pts)</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Compares your total monthly debt repayments to your monthly take-home pay.
              A ratio <strong>below 15 %</strong> earns the full 20 points. A ratio of 43 % or
              above (the common lending threshold) earns 0 points. Points scale linearly between
              those bounds.
            </p>
            <div className="mt-3 bg-gray-50 rounded-lg p-3 text-xs text-gray-500 font-mono">
              Points = ((43 − DTI %) / 28) × 20 &nbsp;|&nbsp; floored at 0, capped at 20
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📚</span>
              <h3 className="font-semibold text-gray-800">4. Financial Knowledge (20 pts)</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reflects the lessons and modules you have completed on this platform. Each
              completed lesson contributes a small number of points. Finishing all core modules
              earns the full 20 points. This pillar rewards continuous learning and engagement.
            </p>
            <div className="mt-3 bg-gray-50 rounded-lg p-3 text-xs text-gray-500 font-mono">
              Points = (lessons completed / total lessons) × 20
            </div>
          </div>

          {/* Pillar 5 */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🎯</span>
              <h3 className="font-semibold text-gray-800">5. Goal Progress (20 pts)</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tracks how close you are to the financial goals you have set (e.g. saving for a
              house deposit, paying off a credit card). Points are awarded proportionally based
              on the average percentage completion across all active goals.
            </p>
            <div className="mt-3 bg-gray-50 rounded-lg p-3 text-xs text-gray-500 font-mono">
              Points = (average goal completion %) × 20
            </div>
          </div>
        </div>
      </section>

      {/* Score Bands */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Score Bands</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Score</th>
                <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Band</th>
                <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">What it means</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <td className="border border-gray-200 px-4 py-2">80 – 100</td>
                <td className="border border-gray-200 px-4 py-2">
                  <span className="inline-block bg-green-100 text-green-700 rounded-full px-2 py-0.5 text-xs font-medium">Excellent</span>
                </td>
                <td className="border border-gray-200 px-4 py-2">Strong habits across all pillars. Keep it up!</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">60 – 79</td>
                <td className="border border-gray-200 px-4 py-2">
                  <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-xs font-medium">Good</span>
                </td>
                <td className="border border-gray-200 px-4 py-2">Solid foundation with room to improve in one or two areas.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">40 – 59</td>
                <td className="border border-gray-200 px-4 py-2">
                  <span className="inline-block bg-yellow-100 text-yellow-700 rounded-full px-2 py-0.5 text-xs font-medium">Fair</span>
                </td>
                <td className="border border-gray-200 px-4 py-2">Some positive habits, but key gaps need attention.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">0 – 39</td>
                <td className="border border-gray-200 px-4 py-2">
                  <span className="inline-block bg-red-100 text-red-700 rounded-full px-2 py-0.5 text-xs font-medium">Needs Work</span>
                </td>
                <td className="border border-gray-200 px-4 py-2">Focus on the fundamentals — small steps make a big difference.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Data & Privacy */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Data &amp; Privacy</h2>
        <p className="text-gray-600 leading-relaxed">
          All calculations happen locally in your browser session. We do not share your
          financial figures with third parties, and no raw financial data is stored on our
          servers. Only your aggregated score and lesson progress are saved to your account.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-xl p-4 group">
            <summary className="cursor-pointer font-medium text-gray-800 list-none flex justify-between items-center">
              Why did my score go down even though I saved more money?
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Your score is a composite of five pillars. If your savings rate improved but
              your debt-to-income ratio worsened (e.g. you took on new debt), or you have not
              completed recent lessons, the overall score can dip slightly even as one pillar
              improves.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-4 group">
            <summary className="cursor-pointer font-medium text-gray-800 list-none flex justify-between items-center">
              How often is the score updated?
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Your score is recalculated in real time whenever you complete a lesson, update
              your financial profile, or mark a goal as progressed. There is no fixed refresh
              cycle — changes are reflected immediately.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-4 group">
            <summary className="cursor-pointer font-medium text-gray-800 list-none flex justify-between items-center">
              Is this score the same as a credit score?
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              No. Your financial health score is an educational tool designed to help you
              understand and improve your financial habits. It is not reported to any credit
              bureau and has no impact on your credit file or borrowing ability.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-4 group">
            <summary className="cursor-pointer font-medium text-gray-800 list-none flex justify-between items-center">
              What is the fastest way to improve my score?
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Start with the pillar where you score lowest — that is where you will see the
              biggest gains. Completing lessons in the Financial Knowledge pillar is often the
              quickest win because progress is immediate. Building an emergency fund and
              reducing high-interest debt tend to have the largest long-term impact.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
        <p className="text-gray-700 font-medium mb-3">Ready to improve your score?</p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
