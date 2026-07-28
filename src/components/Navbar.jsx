import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const ref = useRef()

  const closeMenu = () => {
    setOpen(false)
    setMegaOpen(false)
  }

  useEffect(()=>{
    function onDoc(e){
      if(ref.current && !ref.current.contains(e.target)){
        setOpen(false)
        setMegaOpen(false)
      }
    }
    document.addEventListener('click', onDoc)
    document.body.classList.toggle('menu-open', open)
    return ()=>{
      document.removeEventListener('click', onDoc)
      document.body.classList.remove('menu-open')
    }
  },[open])

  return (
    <header className="nav-wrap" ref={ref}>
      <div className="container nav-inner">
        <div className="brand"><Link to="/">Neeraj tiwari </Link></div>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(v=>!v)}>☰</button>
        <nav className={open? 'open':''} aria-label="Main Navigation">
          <ul className="nav-list">
            <li><NavLink to="/" end className={({isActive})=>isActive? 'active':''} onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/plan-insights" className={({isActive})=>isActive? 'active':''} onClick={closeMenu}>Plan Insights</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=>isActive? 'active':''} onClick={closeMenu}>About</NavLink></li>
            <li className={`has-mega ${megaOpen? 'open':''}`} onMouseEnter={()=>setMegaOpen(true)} onMouseLeave={()=>setMegaOpen(false)}>
              <button className="mega-btn" aria-haspopup="true" onClick={(e)=>{e.stopPropagation(); setMegaOpen(v=>!v)}}>Information ▾</button>
              <div className="mega" role="menu">
                <div className="col">
                  <h4>Know Us</h4>
                  <Link to="/Home/About" onClick={closeMenu}>About Us</Link>
                  <Link to="/Gallery/PhotoGallery" onClick={closeMenu}>Photo Gallery</Link>
                  <Link to="/Gallery/CertificateGallery" onClick={closeMenu}>Certificates</Link>
                  <Link to="/Gallery/AwardsGallery" onClick={closeMenu}>Awards</Link>
                </div>
                <div className="col">
                  <h4>Life Insurance</h4>
                  <Link to="/Information/life_insurance" onClick={closeMenu}>Why Life Insurance?</Link>
                  <Link to="/Information/LifeInsuranceProducts" onClick={closeMenu}>Life Insurance Products</Link>
                  <Link to="/LIC/PremiumCalculator" onClick={closeMenu}>Premium Calculator</Link>
                  <Link to="/LIC/HLVCalculator" onClick={closeMenu}>HLV Calculator</Link>
                </div>
                <div className="col">
                  <h4>Mutual Funds & SIP</h4>
                  <Link to="/Information/Why_mutualfund" onClick={closeMenu}>Why Mutual Funds?</Link>
                  <Link to="/Funds/RecommendedFunds" onClick={closeMenu}>Our Favourite Funds</Link>
                  <Link to="/Funds/TopPerformingFund" onClick={closeMenu}>Industry Top Performers</Link>
                  <Link to="/sip-calculator" onClick={closeMenu}>SIP Calculator</Link>
                </div>
                <div className="col">
                  <h4>Tools & Resources</h4>
                  <Link to="/Calculator/GoalPlanner" onClick={closeMenu}>Goal Planner</Link>
                  <Link to="/Miscallenous/InsuranceNews" onClick={closeMenu}>Industry News</Link>
                  <Link to="/Miscallenous/Articles" onClick={closeMenu}>Articles</Link>
                  <Link to="/Miscallenous/faqs" onClick={closeMenu}>FAQs</Link>
                </div>
                <div className="col">
                  <h4>Downloads & Reach</h4>
                  <Link to="/Miscallenous/Forms" onClick={closeMenu}>Forms</Link>
                  <Link to="/Miscallenous/KycForm" onClick={closeMenu}>KYC Forms</Link>
                  <Link to="/Home/ContactUs" onClick={closeMenu}>Contact Us</Link>
                  <Link to="/Home/sitemap" onClick={closeMenu}>Site Map</Link>
                </div>
              </div>
            </li>
            <li><NavLink to="/plans" className={({isActive})=>isActive? 'active':''} onClick={closeMenu}>Plans</NavLink></li>
            <li><NavLink to="/contact" className={({isActive})=>isActive? 'active':''} onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
