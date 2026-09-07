import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-extrabold mb-8">Terms of Service</h1>
        <article className="prose prose-invert prose-slate max-w-none">
          {/* TODO(SITE_NAME): Replace with your terms of service */}
          <p>
            By using {siteConfig.name}, you agree to these terms. Please read them
            carefully.
          </p>
          <h2>Not Financial Advice</h2>
          <p>
            Content on {siteConfig.name} — including calculators, lessons, and the
            workbook — is general information only. It is not personal financial,
            tax, or legal advice and does not take into account your objectives,
            financial situation, or needs. Superannuation and tax rules change;
            confirm current figures with the ATO and MoneySmart, and consider
            advice from a licensed financial adviser before acting.
          </p>
          <h2>Use of Service</h2>
          <p>
            You may use our platform for personal, non-commercial learning purposes.
            Redistribution of our content is prohibited.
          </p>
          <h2>Payments and Refunds</h2>
          <p>
            No digital product is for sale on this site yet. The Exit Plan
            Workbook is listed as Coming Soon. There is no live checkout and no
            downloadable file. When a purchase path exists, payment details will
            be published here.
          </p>
          <h2>Contact</h2>
          <p>
            Questions? Email us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>
        </article>
      </div>
    </div>
  )
}
