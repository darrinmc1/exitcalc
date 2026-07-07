import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "FIRE",
    "financial independence",
    "retire early",
    "superannuation",
    "Australia",
    "FIRE number",
    "Coast FIRE",
    "super projection",
    "retirement calculator",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_AU",
  },
  metadataBase: new URL(`https://${siteConfig.domain}`),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-950 text-slate-50`}
      >
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
