import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-extrabold mb-8">Privacy Policy</h1>
        <article className="prose prose-invert prose-slate max-w-none">
          {/* TODO(SITE_NAME): Replace with your privacy policy */}
          <p>
            {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to
            protecting your privacy. This policy explains how we collect, use, and
            safeguard your personal information.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly, such as an email address
            for the waitlist or newsletter. Checkout is not live, so we do not
            currently collect payment card details on this site.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use your information to operate the site, send updates you have
            opted into, and improve the calculators and lessons.
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
