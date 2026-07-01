interface SpecsPanelProps {
  type: 'image-overlay' | 'table' | 'icon-card' | 'image'
  imageSrc?: string
  imageAlt?: string
  title?: string
  description?: string
  icon?: string
  rows?: { label: string; value: string }[]
}

export function SpecsPanel({ type, imageSrc, imageAlt, title, description, icon, rows }: SpecsPanelProps): string {
  switch (type) {
    case 'image-overlay':
      return `
        <div class="md:col-span-2 glass-panel rounded-2xl overflow-hidden relative h-[400px]">
          <img src="${imageSrc}" alt="${imageAlt}" class="w-full h-full object-cover opacity-70" />
          <div class="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-background to-transparent w-full">
            <h3 class="font-headline-md text-on-surface">${title}</h3>
            <p class="text-on-surface-variant">${description}</p>
          </div>
        </div>
      `

    case 'table':
      return `
        <div class="glass-panel rounded-2xl p-8 flex flex-col justify-center space-y-6">
          <h3 class="font-body-lg text-body-lg text-on-surface border-b border-white/10 pb-4">${title}</h3>
          <div class="space-y-4 text-sm text-on-surface-variant">
            ${(rows || [])
              .map(
                (row) => `
              <div class="flex justify-between border-b border-white/5 pb-2">
                <span>${row.label}</span>
                <span class="text-primary">${row.value}</span>
              </div>`
              )
              .join('')}
          </div>
        </div>
      `

    case 'icon-card':
      return `
        <div class="glass-panel rounded-2xl p-8 flex flex-col items-center text-center justify-center gap-4">
          <span class="material-symbols-outlined text-3xl text-primary">${icon}</span>
          <h4 class="font-body-lg text-on-surface">${title}</h4>
          <p class="text-sm text-on-surface-variant">${description}</p>
        </div>
      `

    case 'image':
      return `
        <div class="glass-panel rounded-2xl overflow-hidden relative h-full">
          <img src="${imageSrc}" alt="${imageAlt}" class="w-full h-full object-cover opacity-80" />
        </div>
      `
  }
}
