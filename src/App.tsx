import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import SolutionComparison from './components/SolutionComparison'
import TrustBuilding from './components/TrustBuilding'
import FAQ from './components/FAQ'
import BetaAccess from './components/BetaAccess'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px' // Triggers slightly before it enters the viewport fully
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark-canvas text-text-primary font-sans overflow-x-hidden selection:bg-accent-blue/30 selection:text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SolutionComparison />
        <TrustBuilding />
        <FAQ />
        <BetaAccess />
      </main>
      <Footer />
    </div>
  )
}

export default App

