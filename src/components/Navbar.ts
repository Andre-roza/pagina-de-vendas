import type { NavLink } from '../types'

const links: NavLink[] = [
  { href: '#performance', label: 'Performance' },
  { href: '#design', label: 'Design' },
  { href: '#metrics', label: 'Métricas' },
  { href: '#support', label: 'Suporte' },
]

export function Navbar(): HTMLElement {
  const nav = document.createElement('nav')
  nav.className =
    'fixed top-0 w-full z-50 backdrop-blur-xl bg-surface/20 border-b border-white/10 transition-all duration-300'

  nav.innerHTML = `
    <div class="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
      <div class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg tracking-tighter text-on-surface">
        AURA WATCH
      </div>
      <div class="hidden md:flex gap-8 items-center">
        ${links
          .map(
            (link) => `
          <a
            href="${link.href}"
            class="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md duration-300"
          >
            ${link.label}
          </a>`
          )
          .join('')}
        <a
          href="#buy"
          class="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-6 py-3 rounded-full hover:scale-105 transition-transform active:scale-90 flex items-center gap-2"
        >
          Compre Agora
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
        </a>
      </div>
      <button class="md:hidden text-on-surface p-2" aria-label="Abrir menu">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  `

  return nav
}
