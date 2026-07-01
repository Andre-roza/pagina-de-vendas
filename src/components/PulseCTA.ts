interface PulseCTAProps {
  href: string
  label: string
  icon?: string
  className?: string
}

export function PulseCTA({ href, label, icon, className = '' }: PulseCTAProps): string {
  return `
    <a
      href="${href}"
      class="inline-flex items-center justify-center gap-3 bg-primary-container text-on-primary-container font-label-caps text-label-caps px-8 py-4 rounded-full hover:scale-105 transition-transform ${className}"
    >
      ${label}
      ${icon ? `<span class="material-symbols-outlined">${icon}</span>` : ''}
    </a>
  `
}
