import schemes from '../data/schemes'
import SchemeCard from '../components/SchemeCard'
import './Pages.css'

export default function Schemes(){
  return (
    <section className="page container">
      <div className="scheme-page-intro">
        <div>
          <h1>LIC Plans</h1>
          <p>Explore different LIC plans — click a card to view details and discover the right option for your goals.</p>
        </div>
        <span className="about-badge">Curated plans</span>
      </div>
      <div className="scheme-grid">
        {schemes.map(s=> <SchemeCard key={s.id} scheme={s} />)}
      </div>
    </section>
  )
}
