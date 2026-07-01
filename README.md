# AURA WATCH — Landing Page

Landing page premium do smartwatch **Aura Watch**, desenvolvida com foco em performance, acessibilidade e fidelidade ao design system **Obsidian Chronos**.

## Stack

| Tecnologia | Versão |
|---|---|
| [Vite](https://vitejs.dev) | 5.x |
| [TypeScript](https://www.typescriptlang.org) | 5.x |
| [Tailwind CSS](https://tailwindcss.com) | 3.x |
| [Inter Font](https://fonts.google.com/specimen/Inter) | Google Fonts |
| [Material Symbols](https://fonts.google.com/icons) | Google Icons |

## Estrutura

```
src/
├── components/     # Componentes reutilizáveis (Navbar, Footer, GlassPanel, etc.)
├── sections/       # Seções da página (Hero, Performance, Metrics, Support)
├── hooks/          # Custom hooks (useIntersectionObserver)
├── utils/          # Utilitários (cn, images)
├── types/          # Interfaces TypeScript
├── main.ts         # Entry point
└── style.css       # Tailwind directives + utilities customizadas
```

## Scripts

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção (tsc + vite build)
npm run preview  # Preview do build
```

## Design System

Cores, tipografia e espaçamentos seguem o design token definido em `tailwind.config.ts`, baseado no **Obsidian Chronos** (veja `old/stitch/DESIGN.md`).

## Imagens

Os assets estão em `public/assets/images/`. Para ambiente de produção, otimize as imagens antes do deploy.

## Estrutura de Commits

- `chore: initial project setup with Vite + Tailwind + TypeScript`
- `feat: add components, sections, and Intersection Observer animations`
- `docs: add README and .env.example`

## Deploy

Conecte ao repositório remoto:

```bash
git remote add origin https://github.com/Andre-roza/pagina-de-vendas.git
git push -u origin main
```
