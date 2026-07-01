import { images } from '../utils/images'
import { FeatureSplit } from '../components/FeatureSplit'

export function PerformanceSection(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'bg-surface-container-low py-section-gap w-full'
  section.id = 'performance'

  const connectivity = FeatureSplit({
    imageSrc: images.connectivity,
    imageAlt: 'Conectividade Total',
    icon: 'notifications_active',
    iconColor: 'text-primary-container',
    title: 'Nunca perca o que importa.',
    description:
      'Notificações instantâneas de WhatsApp, Instagram e chamadas diretamente no seu pulso. Mantenha-se conectado sem precisar tirar o telefone do bolso, com uma interface fluida e design sofisticado.',
    chips: [
      { icon: 'chat', label: 'WhatsApp' },
      { icon: 'call', label: 'Chamadas' },
      { icon: 'public', label: 'Redes Sociais' },
    ],
    containerClass: 'mb-section-gap',
  })

  const health = FeatureSplit({
    imageSrc: images.healthMonitor,
    imageAlt: 'Monitoramento de Saúde',
    icon: 'ecg_heart',
    iconColor: 'text-secondary-container',
    title: 'Seu assistente pessoal de bem-estar.',
    description:
      'Monitore sono, frequência cardíaca e pressão arterial. Lembretes inteligentes para água e medicamentos. Uma visão completa da sua saúde em tempo real.',
    listItems: [
      { icon: 'water_drop', text: 'Lembretes de Hidratação' },
      { icon: 'bedtime', text: 'Monitoramento de Sono Profundo' },
      { icon: 'monitor_heart', text: 'Ritmo Cardíaco 24/7' },
    ],
    imageOrder: 'last',
    imageContainerMode: 'wrapped',
  })

  section.innerHTML = `
    <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      ${connectivity}
      ${health}
    </div>
  `

  return section
}
