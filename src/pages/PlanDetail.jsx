import { useParams, Link } from 'react-router-dom'
import plansData from '../data/schemes'
import './Pages.css'

export default function PlanDetail(){
  const { id } = useParams()
  const plan = plansData.find(item => item.id === id)
  if(!plan) return (
    <section className="page container">
      <h2>Plan not found</h2>
      <p><Link to="/plans">Back to plans</Link></p>
    </section>
  )

  return (
    <section className="page container">
      <div className="detail-shell">
        <div className="detail-meta">
          <span className="detail-chip">LIC Plan</span>
          <span className="detail-chip">Personalised support</span>
        </div>
        <h1>{plan.title}</h1>
        <img src={plan.image} alt="" className="detail-image" />
        <p>{plan.details}</p>
        <h4>Eligibility</h4>
        <p>{plan.eligibility}</p>
        <h4>Benefits</h4>
        <ul>{plan.benefits.map((b,i)=>(<li key={i}>{b}</li>))}</ul>
        <h4>Premium Example</h4>
        <p>{plan.premiumExample}</p>
        <p><Link to="/plans">Back to plans</Link></p>
      </div>
    </section>
  )
}
