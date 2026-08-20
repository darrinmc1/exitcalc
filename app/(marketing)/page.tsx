import { siteConfig } from "@/config/site.config"
import { TestimonialsSection } from "@/components/testimonials-section"
import Link from "next/link"

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Calculate Your Path to{" "}
            <span className="text-primary">Financial Independence</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/calculator"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              Calculate My FIRE Number
            </Link>
            <Link
              href="/learn"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Learn about FIRE <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Calculator CTA Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to find your number?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            It takes less than 2 minutes. No sign-up required.
          </p>
          <div className="mt-8">
            <Link
              href="/calculator"
              className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              Start the Calculator &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
