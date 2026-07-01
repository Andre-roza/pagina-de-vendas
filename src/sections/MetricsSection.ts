import { images } from '../utils/images'
import { SpecsPanel } from '../components/SpecsPanel'

export function MetricsSection(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'py-section-gap w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop'
  section.id = 'metrics'

  const panels = [
    SpecsPanel({
      type: 'image-overlay',
      imageSrc: images.designPremium,
      imageAlt: 'Design Premium',
      title: 'Design Inigualável',
      description: 'Materiais premium e acabamento refinado.',
    }),
    SpecsPanel({
      type: 'table',
      title: 'Métricas de Acompanhamento',
      rows: [
        { label: 'Passos', value: 'Sim' },
        { label: 'Calorias', value: 'Sim' },
        { label: 'Distância', value: 'Sim' },
        { label: 'Sono (Profundo/Leve)', value: 'Avançado' },
      ],
    }),
    SpecsPanel({
      type: 'icon-card',
      icon: 'language',
      title: 'Suporte Multilíngue',
      description: 'Português, Inglês, Francês, Espanhol e mais.',
    }),
    SpecsPanel({
      type: 'image',
      imageSrc: images.watchFaces,
      imageAlt: 'Mostradores Personalizáveis',
    }),
    SpecsPanel({
      type: 'image',
      imageSrc: images.lifestyle,
      imageAlt: 'Estilo para cada momento',
    }),
  ]

  section.innerHTML = `
    <div class="text-center mb-16 space-y-4" data-reveal>
      <h2 class="font-headline-md text-headline-md text-on-surface">Engenharia de Precisão</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Especificações técnicas detalhadas para quem exige o melhor do design e funcionalidade.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal>
      <div id="design" class="contents">${panels[0]}</div>
      ${panels.slice(1).join('')}
    </div>
  `

  return section
}
