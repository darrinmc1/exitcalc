import type { Metadata } from "next"
import { siteConfig } from "@/config/site.config"

/** Production host. Canonicals stay on this origin, including preview deploys. */
export const CANONICAL_ORIGIN = `https://${siteConfig.domain}`

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "ExitCalc — AU superannuation and FIRE planning tools",
} as const

export function canonicalUrl(path: string): string {
  if (!path || path === "/") return CANONICAL_ORIGIN
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${CANONICAL_ORIGIN}${normalized}`
}

/** Per-page canonical. Title and description are passed through unchanged. */
export function withCanonical(path: string, metadata: Metadata = {}): Metadata {
  return {
    ...metadata,
    alternates: {
      canonical: canonicalUrl(path),
    },
  }
}
