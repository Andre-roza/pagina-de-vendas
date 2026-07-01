export function BottomBar(): HTMLElement {
  const bar = document.createElement('div')
  bar.className =
    'fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] rounded-full backdrop-blur-2xl md:hidden border border-white/20 shadow-2xl z-50 px-margin-mobile flex justify-center bg-surface/30'

  bar.innerHTML = `
    <a
      href="#buy"
      class="bg-primary-container text-on-primary-container rounded-full px-6 py-3 flex items-center justify-center gap-2 font-label-caps text-label-caps w-full hover:scale-105 animate-pulse transition-transform"
    >
      Compre Agora
      <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
    </a>
  `

  return bar
}
