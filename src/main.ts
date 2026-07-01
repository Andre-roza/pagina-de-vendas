import './style.css'
import { Navbar } from './components/Navbar'
import { BottomBar } from './components/BottomBar'
import { Footer } from './components/Footer'
import { HeroSection } from './sections/HeroSection'
import { PerformanceSection } from './sections/PerformanceSection'
import { MetricsSection } from './sections/MetricsSection'
import { SupportSection } from './sections/SupportSection'
import { observeRevealElements } from './hooks/useIntersectionObserver'

function mountApp(): void {
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const footerContainer = document.querySelector('footer')

  if (header) header.prepend(Navbar())
  if (main) {
    main.append(HeroSection())
    main.append(PerformanceSection())
    main.append(MetricsSection())
    main.append(SupportSection())
    main.append(BottomBar())
  }
  if (footerContainer) {
    footerContainer.replaceWith(Footer())
  }

  observeRevealElements()
}

document.addEventListener('DOMContentLoaded', mountApp)
