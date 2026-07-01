import { images } from '../utils/images'
import { PulseCTA } from '../components/PulseCTA'

export function HeroSection(): HTMLElement {
  const section = document.createElement('section')
  section.className =
    'relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[80vh] flex flex-col md:flex-row items-center justify-between mb-section-gap'

  section.innerHTML = `
    <div class="md:w-1/2 z-10 space-y-8" data-reveal>
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-label-caps text-label-caps mb-4">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        100% Original e Autêntico. Qualidade garantida.
      </div>
      <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg tracking-tighter text-on-surface glow-text leading-tight">
        Conectividade Total, Saúde Sob Controle. <br/>
        <span class="text-primary-container">O Futuro no Seu Pulso.</span>
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
        O Smartwatch Premium que une tecnologia original, estilo inigualável e monitoramento de saúde em tempo real.
      </p>
      <div class="glass-panel p-6 rounded-xl inline-block mt-8">
        <p class="text-on-surface-variant line-through text-sm mb-1">De R$ 289,00</p>
        <p class="font-headline-md text-headline-md text-on-surface mb-6">
          por apenas <span class="text-primary-container">R$ 187,00</span>
        </p>
        ${PulseCTA({ href: '#buy', label: 'Compre Agora', icon: 'arrow_forward' })}
      </div>
    </div>
    <div class="md:w-1/2 relative mt-16 md:mt-0 h-[500px] w-full flex justify-center items-center" data-reveal>
      <img
        src="${images.hero}"
        alt="Aura Watch Premium"
        class="relative z-10 w-full max-w-md object-contain drop-shadow-[0_20px_50px_rgba(255,23,68,0.15)] pulse-element"
      />
    </div>
  `

  return section
}
