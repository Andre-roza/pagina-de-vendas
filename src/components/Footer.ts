export function Footer(): HTMLElement {
  const footer = document.createElement('footer')
  footer.className = 'w-full py-section-gap bg-surface border-t border-surface-container-lowest'

  footer.innerHTML = `
    <div class="flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-8 max-w-container-max mx-auto">
      <div class="font-display-lg-mobile md:font-headline-md text-headline-md text-on-surface tracking-tighter">
        AURA WATCH
      </div>
      <div class="flex gap-6 flex-wrap justify-center">
        <a href="#" class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md opacity-80 hover:opacity-100">
          Política de Privacidade
        </a>
        <a href="#" class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md opacity-80 hover:opacity-100">
          Termos de Serviço
        </a>
        <a href="#" class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md opacity-80 hover:opacity-100">
          Garantia
        </a>
        <a href="#" class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md opacity-80 hover:opacity-100">
          Sustentabilidade
        </a>
      </div>
      <div class="text-on-surface-variant font-body-md text-body-md text-sm">
        &copy; 2026 Aura Engineering. Todos os direitos reservados.
      </div>
    </div>
  `

  return footer
}
