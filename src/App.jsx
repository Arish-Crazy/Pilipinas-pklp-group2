import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import RegionSelector from './components/RegionSelector.jsx'
import RegionSection from './components/RegionSection.jsx'

function App() {
  const [activeRegion, setActiveRegion] = useState('luzon')
  const regionOrder = useMemo(() => ['luzon', 'visayas', 'mindanao'], [])

  const handleNavigate = (id) => {
    if (id === 'home') {
      window.location.hash = '#home'
      return
    }
    setActiveRegion(id)
    window.location.hash = `#${id}`
  }

  return (
    <div className="min-h-screen bg-[#fffdfb] text-slate-900">
      <Navbar activeRegion={activeRegion} onNavigate={handleNavigate} />
      <main>
        <Hero />
        <RegionSelector activeRegion={activeRegion} onChange={setActiveRegion} />
        {regionOrder.map((region) =>
          activeRegion === region ? <RegionSection key={region} activeRegion={region} /> : null,
        )}
        <footer className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-slate-900 px-6 py-8 text-white sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-rose-300">PKLP GROUP 2</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/80">
              Interactive na paglalakbay sa heograpiya at kulturang Pilipino — mula Luzon, Visayas, hanggang Mindanao.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
