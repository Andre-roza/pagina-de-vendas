import { cn } from '../utils/cn'

interface GlassPanelProps {
  className?: string
  children: string
  as?: 'div' | 'span'
}

export function GlassPanel({ className, children, as = 'div' }: GlassPanelProps): string {
  const base = 'glass-panel'
  const cls = cn(base, className)
  return `<${as} class="${cls}">${children}</${as}>`
}
