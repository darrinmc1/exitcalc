import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Software Engineer, Sydney",
    avatar: "SM",
    stars: 5,
    quote:
      "I'd been putting off figuring out my FIRE number for years because it felt overwhelming. ExitCalc made it stupidly simple — I had my number in under 5 minutes. Now I actually have a plan.",
    highlight: "Had my number in under 5 minutes",
  },
  {
    name: "James T.",
    role: "Project Manager, Melbourne",
    avatar: "JT",
    stars: 5,
    quote:
      "The Coast FIRE calculator was a revelation. I realised I only need to save aggressively for another 4 years, then I can coast. That completely changed how I think about my career choices.",
    highlight: "Completely changed how I think about my career",
  },
  {
    name: "Priya K.",
    role: "Nurse, Brisbane",
    avatar: "PK",
    stars: 5,
    quote:
      "As someone who isn't great with spreadsheets, I love how clean and easy this is. I ran the super projection calculator and finally understand where I'll be at 60. No jargon, no confusion.",
    highlight: "No jargon, no confusion",
  },
  {
    name: "David R.",
    role: "Small Business Owner, Perth",
    avatar: "DR",
    stars: 5,
    quote:
      "I've tried other FIRE calculators but they're all built for Americans. ExitCalc actually accounts for Australian super and tax. It's the only one I recommend to my friends.",
    highlight: "The only one I recommend to my friends",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function AvatarInitials({ initials }: { initials: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center flex-shrink-0"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="w-full bg-muted/40 border-y"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Early User Stories
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold mb-4"
          >
            Real people. Real plans.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here's what Australians are saying after running their numbers for the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-background rounded-xl border p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <AvatarInitials initials={t.avatar} />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <StarRating count={t.stars} />
              </div>

              <blockquote className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-auto pt-2 border-t">
                <p className="text-xs font-medium text-primary">
                  ✓ &ldquo;{t.highlight}&rdquo;
                </p>
              </div>
            </figure>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground mb-4">
            Join them — it only takes a few minutes.
          </p>
          <a
            href="/tools"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
          >
            Calculate My FIRE Number →
          </a>
        </div>
      </div>
    </section>
  );
}
