import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Know Your Number.
          <br />
          <span className="text-primary">Plan Your Exit.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-base font-medium shadow hover:bg-primary/90 transition-colors"
          >
            Try the Calculator Free
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            How It Works
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Tools / Calculator Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Free FIRE Calculators</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Run the numbers on your path to financial independence. No signup required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/tools/fire-number"
            className="group rounded-xl border bg-card p-6 hover:border-primary hover:shadow-md transition-all"
          >
            <div className="text-2xl mb-3">🔥</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              FIRE Number
            </h3>
            <p className="text-sm text-muted-foreground">
              Calculate exactly how much you need to retire early and never work again.
            </p>
          </Link>
          <Link
            href="/tools/coast-fire"
            className="group rounded-xl border bg-card p-6 hover:border-primary hover:shadow-md transition-all"
          >
            <div className="text-2xl mb-3">🏄</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              Coast FIRE
            </h3>
            <p className="text-sm text-muted-foreground">
              Find out when you can stop saving and let compound interest do the rest.
            </p>
          </Link>
          <Link
            href="/tools/super-projection"
            className="group rounded-xl border bg-card p-6 hover:border-primary hover:shadow-md transition-all"
          >
            <div className="text-2xl mb-3">📈</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              Super Projection
            </h3>
            <p className="text-sm text-muted-foreground">
              Project your superannuation balance and see when you hit your target.
            </p>
          </Link>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/tools"
            className="text-sm text-primary hover:underline font-medium"
          >
            View all calculators →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary/5 border-y">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to plan your exit?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of Australians who have already run their numbers and taken control of their financial future.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-base font-medium shadow hover:bg-primary/90 transition-colors"
          >
            Calculate My FIRE Number
          </Link>
        </div>
      </section>
    </main>
  );
}
