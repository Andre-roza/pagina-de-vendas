---
name: Obsidian Chronos
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#ffb4aa'
  on-secondary: '#690003'
  secondary-container: '#c5020b'
  on-secondary-container: '#ffd2cc'
  tertiary: '#ffb595'
  on-tertiary: '#571e00'
  tertiary-container: '#ef6719'
  on-tertiary-container: '#4c1a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#930005'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb595'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7c2e00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style
The brand personality is precise, elite, and high-performance. It targets tech-conscious professionals and fitness enthusiasts who value both engineering excellence and aesthetic sophistication. The UI must evoke a sense of "quiet luxury"—where the hardware is the hero, and the interface acts as its digital shadow.

The design style is a hybrid of **Minimalism** and **Glassmorphism**. By using heavy whitespace (or rather, "blackspace"), we create a cinematic focus on the product. Glassmorphism is utilized for data overlays and floating navigation to maintain a sense of depth and modernity without cluttering the visual field.

## Colors
This design system utilizes a "True Dark" palette. The background is a pure, deep black to make the OLED displays of the product shots blend seamlessly into the page. 

- **Primary (Electric Blue):** Used for technical data, connectivity features, and primary call-to-actions.
- **Secondary (Pulse Red):** Reserved strictly for health metrics (heart rate, blood oxygen) and urgent notifications to create high-contrast focal points.
- **Neutrals:** A range of Slate Grays are used for secondary text and borders to maintain a sophisticated, low-noise environment.
- **Gradients:** Subtle radial gradients (from `#1A1A1A` to `#050505`) should be used behind product images to provide a sense of three-dimensional space.

## Typography
We use **Inter** for its neutral, technical clarity. The typographic scale is aggressive to ensure a high-contrast editorial feel. 

Large display titles should use tight letter spacing and heavy weights to command attention, while body copy remains spacious to ensure readability against dark backgrounds. Use "Label Caps" for overlines or small technical specifications to provide a "pro-tool" aesthetic.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

- **Section Gaps:** Significant vertical breathing room (160px+) is required between major feature blocks to maintain a premium, unhurried pace.
- **Alignment:** Content should oscillate between centered "hero" layouts and asymmetrical "split" layouts (image on one side, technical specs on the other).
- **Sticky Elements:** The "Buy Now" CTA should be housed in a sticky header or a bottom-fixed glassmorphic bar on mobile to ensure the conversion path is always accessible.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.

1.  **Level 0 (Base):** Deep black `#050505`.
2.  **Level 1 (Section):** Subtle dark gray `#0F0F0F` with 1px border `#1A1A1A`.
3.  **Level 2 (Float):** Glassmorphic surfaces using `backdrop-filter: blur(20px)` and a `20%` white opacity fill. This is used for floating specs and the sticky navigation.
4.  **Accents:** Use a 1px "inner glow" or "rim light" stroke on buttons and cards to simulate the chamfered edges of high-end hardware.

## Shapes
The shape language mirrors the hardware of the smartwatch. Since the watch face is circular, UI elements use **Rounded** (0.5rem) to **Pill-shaped** corners. 

Avoid sharp 0px corners, as they feel too aggressive and industrial; instead, use smooth "squircle" radius values for cards and containers to suggest a more ergonomic, wearable feel.

## Components
- **Buttons:** Primary buttons are pill-shaped with a solid Electric Blue fill. Secondary buttons use a glassmorphic background with a white "thin-line" border.
- **Thin-Line Icons:** Use 1.5pt stroke weight icons. Icons should never be filled; they must remain airy and precise.
- **Pulse Elements:** Health metrics (HRM) should feature a "Pulse" animation—a soft, radiating glow behind the value that expands and fades at 60-80bpm.
- **Feature Chips:** Small, semi-transparent capsules used to highlight technical specs (e.g., "5ATM Water Resistant").
- **Product Cards:** No background color; use high-resolution PNGs of the watch with a subtle radial shadow underneath to "ground" the product in the 3D space.
- **Interactive Graphs:** Use "Pulse Red" for heart rate trends, rendered as a thin, anti-aliased vector line with a soft glow.