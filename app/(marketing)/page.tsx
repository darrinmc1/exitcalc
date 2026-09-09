import Link from "next/link"
import { siteConfig } from "@/config/site.config"

const testimonials = [
  {
    quote: "Finally a budgeting tool that actually makes sense. I paid off $8,000 in debt in 6 months using the plan it created for me.",
    author: "Sarah M.",
    role: "Freelance Designer",
    avatar: "SM"
  },
  {
    quote: "I went from living paycheck to paycheck to having a 3-month emergency fund. The personalized insights changed everything.",
    author: "James T.",
    role: "Teacher",
    avatar: "JT"
  },
  {
    quote: "Set up my retirement contributions properly for the first time ever. Wish I had found this tool 10 years ago.",
    author: "Priya K.",
    role: "Software Engineer",
    avatar: "PK"
  }
]

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Take Control of Your{" "}
          <span className="text-primary">Financial Future</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
          >
            Get Started Free
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 px-8 py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Social Proof Testimonials */}
        <div className="w-full">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
            Trusted by early members
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
