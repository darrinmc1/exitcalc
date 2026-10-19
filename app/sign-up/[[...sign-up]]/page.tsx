import { SignUp } from "@clerk/nextjs"
import { siteConfig } from "@/config/site.config"
import { withCanonical } from "@/lib/seo"

export const metadata = withCanonical("/sign-up", {
  title: `Create an Account | ${siteConfig.name}`,
  description: "Create an ExitCalc account to keep lesson progress and purchases.",
})

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 px-4 py-16">
      <SignUp />
    </div>
  )
}
