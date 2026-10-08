import { siteConfig } from "@/config/site.config"
import { withCanonical } from "@/lib/seo"

export const metadata = withCanonical("/dashboard/settings", {
  title: `Settings | ${siteConfig.name}`,
  description: "The name and email on your ExitCalc account.",
})

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
