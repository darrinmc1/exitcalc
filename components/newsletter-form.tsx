"use client"

import { useState } from "react"
import { HoneypotField } from "@/components/HoneypotField"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [honeypot, setHoneypot] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (honeypot) return
    if (!email) return

    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus("success")
        setMessage(data.message || "You're on the list! Check your inbox.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">🎉</div>
        <p className="text-white font-semibold text-lg mb-1">You're in!</p>
        <p className="text-slate-400 text-sm">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <HoneypotField value={honeypot} onChange={setHoneypot} />
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-black font-bold text-sm transition-all whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing…" : "Get Weekly Tips"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{message}</p>
      )}
      <p className="text-xs text-slate-500 text-center">No spam. Unsubscribe anytime.</p>
    </form>
  )
}
