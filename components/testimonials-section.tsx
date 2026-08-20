import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechFlow SaaS",
    initials: "SC",
    rating: 5,
    quote:
      "ExitCalc completely changed how I think about my company's valuation. I went into investor meetings with real numbers and closed our Series A at a 40% higher valuation than I expected.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Co-Founder",
    company: "DataPulse Analytics",
    initials: "MR",
    rating: 5,
    quote:
      "I used to guess at exit scenarios. Now I run the numbers in minutes and can show my co-founders and investors exactly what different growth paths mean for everyone's payout.",
  },
  {
    name: "Priya Patel",
    role: "Startup Advisor",
    company: "Venture Studio 42",
    initials: "PP",
    rating: 5,
    quote:
      "I recommend ExitCalc to every founder I work with. The waterfall analysis alone has saved several of my portfolio companies from signing term sheets that would have crushed their returns.",
  },
  {
    name: "James Whitfield",
    role: "Serial Entrepreneur",
    company: "3x Exits",
    initials: "JW",
    rating: 5,
    quote:
      "On my first exit I left money on the table because I didn't understand the cap table math. ExitCalc makes it dead simple — I wish this existed a decade ago.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Founders trust ExitCalc
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of founders who use ExitCalc to negotiate better deals and maximize their exit outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-colors duration-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-foreground/90 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            ★★★★★{" "}
            <span className="font-medium text-foreground">4.9/5</span> from early
            access users
          </p>
        </div>
      </div>
    </section>
  )
}
