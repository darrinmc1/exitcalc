import { getSupportEmail } from "@/lib/support-email"

export function SupportEmailLink({
  className = "text-cyan-400 hover:underline",
}: {
  className?: string
}) {
  const email = getSupportEmail()
  if (!email) return null
  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  )
}
