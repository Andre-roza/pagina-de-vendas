export function SupportSection(): HTMLElement {
  const section = document.createElement('section')
  section.id = 'support'
  section.className = 'py-section-gap w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop'

  section.innerHTML = `
    <div class="glass-panel rounded-2xl p-12 md:p-20 text-center space-y-6" data-reveal>
      <span class="material-symbols-outlined text-5xl text-primary-container">support_agent</span>
      <h2 class="font-headline-md text-headline-md text-on-surface">Suporte Premium</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Suporte técnico dedicado 24 horas por dia, 7 dias por semana. Garantia estendida e assistência 
        especializada para garantir que sua experiência Aura Watch seja impecável.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <a href="mailto:suporte@aurawatch.com" class="glass-panel px-6 py-3 rounded-full font-label-caps text-label-caps text-on-surface hover:text-primary-container transition-colors inline-flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">mail</span>
          suporte@aurawatch.com
        </a>
        <a href="tel:+551140029022" class="glass-panel px-6 py-3 rounded-full font-label-caps text-label-caps text-on-surface hover:text-primary-container transition-colors inline-flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">call</span>
          (11) 4002-9022
        </a>
      </div>
    </div>
  `

  return section
}
