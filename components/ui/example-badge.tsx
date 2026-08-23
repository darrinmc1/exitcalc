import { cn } from '@/lib/utils'

interface ExampleBadgeProps {
  className?: string
}

export function ExampleBadge({ className }: ExampleBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-amber-400/60 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-amber-700 dark:border-amber-500/40 dark:bg-amber-950/40 dark:text-amber-400',
        className
      )}
    >
      Example inputs
    </span>
  )
}
