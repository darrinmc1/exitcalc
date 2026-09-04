"use client"

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  return reduced
}

/** Layered scroll offsets for the homepage scene. */
export function useParallax() {
  const reduced = usePrefersReducedMotion()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (reduced) {
      setOffset(0)
      return
    }

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setOffset(window.scrollY))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [reduced])

  const layer = (factor: number, cap = 140) => {
    const y = Math.max(-cap, Math.min(cap, offset * factor))
    return {
      transform: `translate3d(0, ${y}px, 0)`,
    } satisfies CSSProperties
  }

  return { offset, layer, reduced }
}

export function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode
  className?: string
  delayMs?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])

  return (
    <div
      ref={ref}
      className={`sc-reveal ${visible ? "sc-reveal-in" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}
