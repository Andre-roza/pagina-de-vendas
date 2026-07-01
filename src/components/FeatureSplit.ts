interface FeatureSplitProps {
  imageSrc: string
  imageAlt: string
  icon: string
  iconColor?: string
  title: string
  description: string
  chips?: { icon: string; label: string }[]
  listItems?: { icon: string; text: string }[]
  imageOrder?: 'first' | 'last'
  imageContainerClass?: string
  imageContainerMode?: 'direct' | 'wrapped'
  imageClass?: string
  containerClass?: string
}

export function FeatureSplit({
  imageSrc,
  imageAlt,
  icon,
  iconColor = 'text-primary-container',
  title,
  description,
  chips,
  listItems,
  imageOrder = 'first',
  imageContainerClass = '',
  imageContainerMode = 'direct',
  imageClass = '',
  containerClass = '',
}: FeatureSplitProps): string {
  const imgTag = `
    <img
      src="${imageSrc}"
      alt="${imageAlt}"
      class="${imageClass || (imageContainerMode === 'direct' ? 'w-full rounded-2xl glass-panel object-cover' : 'w-full h-full object-cover')}"
    />
  `

  const imageColumn = imageContainerMode === 'direct'
    ? `
    <div class="md:w-1/2 ${imageOrder === 'first' ? 'order-2 md:order-1' : ''} relative">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-container/20 to-transparent blur-3xl -z-10 rounded-full"></div>
      ${imgTag}
    </div>`
    : `
    <div class="md:w-1/2 relative h-[400px] rounded-2xl glass-panel overflow-hidden ${imageContainerClass}">
      ${imgTag}
    </div>`

  const textColumn = `
    <div class="md:w-1/2 ${imageOrder === 'first' ? 'order-1 md:order-2' : ''} space-y-6">
      <span class="material-symbols-outlined text-4xl ${iconColor} p-4 glass-panel rounded-full inline-block">${icon}</span>
      <h2 class="font-headline-md text-headline-md text-on-surface">${title}</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">${description}</p>
      ${
        chips
          ? `
        <div class="flex gap-4 pt-4">
          ${chips
            .map(
              (chip) => `
            <div class="glass-panel px-4 py-2 rounded-lg flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">${chip.icon}</span>
              ${chip.label}
            </div>`
            )
            .join('')}
        </div>`
          : ''
      }
      ${
        listItems
          ? `
        <ul class="space-y-4 pt-4">
          ${listItems
            .map(
              (item) => `
            <li class="flex items-center gap-4 text-on-surface-variant">
              <span class="material-symbols-outlined text-primary">${item.icon}</span>
              ${item.text}
            </li>`
            )
            .join('')}
        </ul>`
          : ''
      }
    </div>
  `

  return `
    <div class="flex flex-col md:flex-row items-center gap-16 ${containerClass}" data-reveal>
      ${imageOrder === 'first' ? imageColumn + textColumn : textColumn + imageColumn}
    </div>
  `
}
