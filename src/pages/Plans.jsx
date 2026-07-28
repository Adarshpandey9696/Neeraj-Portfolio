import plansData from '../data/schemes'
import PlanCard from '../components/SchemeCard'
import './Pages.css'

export default function Plans(){
  return (
    <section className="page container">
      <div className="plan-page-intro">
        <div>
          <h1>LIC Plans</h1>
          <p>Explore different LIC plans — click a card to view details and discover the right option for your goals.</p>
        </div>
        <span className="about-badge">Curated plans</span>
      </div>
      <div className="plan-grid">
        {plansData.map(plan => <PlanCard key={plan.id} plan={plan} />)}
      </div>
    </section>
  )
}
