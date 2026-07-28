import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Plans from './pages/Plans'
import PlanDetail from './pages/PlanDetail'
import Contact from './pages/Contact'
import PlanInsights from './pages/PlanInsights'
import SipCalculator from './pages/SipCalculator'
import StaticPage from './pages/StaticPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans/:id" element={<PlanDetail />} />
            <Route path="/schemes" element={<Plans />} />
            <Route path="/schemes/:id" element={<PlanDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plan-insights" element={<PlanInsights />} />
            <Route path="/sip-calculator" element={<SipCalculator />} />
            {/* catch-all for many sitemap pages rendered as static placeholders */}
            <Route path="*" element={<StaticPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
