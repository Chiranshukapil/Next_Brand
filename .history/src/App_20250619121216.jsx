import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar.jsx'
import PricingSection from './Components/PricingSection.jsx'
import FeaturesSection from './Components/FeaturesSection.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <section className="relative min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 relative z-10 pt-36">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Work Together, Smarter.
          </h1>
          <p className="text-lg text-white/90">
            TeamSync helps remote and in-office teams collaborate, share updates, and ship faster—all in one platform.
          </p>
          <button className="bg-violet-600 text-white px-6 py-3 rounded-xl hover:bg-violet-700 hover:cursor-pointer transition font-semibold shadow-lg">
            Start for Free
          </button>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="/hero.jpg"
            alt="Team Collaboration"
            className="w-full mx-auto rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      </div>
    </section>
      <Routes>
        
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/product/features" element={<FeaturesSection/>} />

      </Routes>
    </Router>
  )
}

export default App
