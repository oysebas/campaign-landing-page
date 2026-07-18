import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import SolutionComparison from './components/SolutionComparison'
import TrustBuilding from './components/TrustBuilding'
import FAQ from './components/FAQ'
import BetaAccess from './components/BetaAccess'
import Footer from './components/Footer'

function App() {
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
