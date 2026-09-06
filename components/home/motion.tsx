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

/** ExitCalc homepage signature: 5–8s bucket fill + FIRE number count-up. */
export const PRODUCT_INTRO_MS = 6800

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

/**
 * Calculator-native intro clock. One shot, 6.8s. `skip()` jumps to the
 * settled result when the visitor edits an input. Reduced motion is off.
 */
export function useProductIntro(active: boolean) {
  const reduced = usePrefersReducedMotion()
  const startAt = reduced || !active ? 1 : 0
  const [t, setT] = useState(startAt)
  const [introDone, setIntroDone] = useState(startAt === 1)
  const skipped = useRef(false)
  const startedAt = useRef<number | null>(null)

  const skip = () => {
    skipped.current = true
    setT(1)
    setIntroDone(true)
  }

  useEffect(() => {
    if (!active || reduced || skipped.current) {
      setT(1)
      setIntroDone(true)
      return
    }

    if (startedAt.current == null) {
      startedAt.current = performance.now()
    }

    let frame = 0
    const start = startedAt.current
    const tick = (now: number) => {
      if (skipped.current) {
        setT(1)
        setIntroDone(true)
        return
      }
      const raw = Math.min(1, (now - start) / PRODUCT_INTRO_MS)
      setT(easeOutCubic(raw))
      if (raw < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setT(1)
        setIntroDone(true)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, reduced])

  return { t, introDone, skip, reduced }
}

export function motionAmount(target: number, t: number) {
  return Math.round(target * t)
}

export function formatAud(n: number) {
  return `$${Math.round(n).toLocaleString("en-AU")}`
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
