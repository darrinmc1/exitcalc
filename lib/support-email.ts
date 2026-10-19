import { siteConfig } from "@/config/site.config"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isSafeEmail(value: string): boolean {
  if (!EMAIL_RE.test(value)) return false
  const domain = value.split("@")[1]?.toLowerCase() ?? ""
  if (
    domain === "example.com" ||
    domain === "example.org" ||
    domain === "example.net" ||
    domain.endsWith(".example.com")
  ) {
    return false
  }
  return true
}

/**
 * Public contact address. NEXT_PUBLIC_SUPPORT_EMAIL wins when it is a real
 * address. Otherwise the site config address is the fallback. Placeholder
 * domains such as example.com are never shown.
 */
export function getSupportEmail(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim()
  if (fromEnv && isSafeEmail(fromEnv)) return fromEnv
  const fallback = siteConfig.contact.email.trim()
  return isSafeEmail(fallback) ? fallback : null
}
