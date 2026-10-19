import { SignIn } from "@clerk/nextjs"
import { siteConfig } from "@/config/site.config"
import { withCanonical } from "@/lib/seo"

export const metadata = withCanonical("/sign-in", {
  title: `Sign In | ${siteConfig.name}`,
  description: "Sign in to ExitCalc to open your dashboard, lessons, and account.",
})

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 px-4 py-16">
      <SignIn />
    </div>
  )
}
