import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar.jsx'
import PricingSection from './Components/PricingSection.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/product/features" element={<Fe} />

      </Routes>
    </Router>
  )
}

export default App
