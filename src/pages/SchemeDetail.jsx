import { useParams, Link } from 'react-router-dom'
import schemes from '../data/schemes'
import './Pages.css'

export default function SchemeDetail(){
  const { id } = useParams()
  const scheme = schemes.find(s=>s.id===id)
  if(!scheme) return (
    <section className="page container">
      <h2>Plan not found</h2>
      <p><Link to="/schemes">Back to plans</Link></p>
    </section>
  )

  return (
    <section className="page container">
      <div className="detail-shell">
        <div className="detail-meta">
          <span className="detail-chip">LIC Plan</span>
          <span className="detail-chip">Personalised support</span>
        </div>
        <h1>{scheme.title}</h1>
        <img src={scheme.image} alt="" className="detail-image" />
        <p>{scheme.details}</p>
        <h4>Eligibility</h4>
        <p>{scheme.eligibility}</p>
        <h4>Benefits</h4>
        <ul>{scheme.benefits.map((b,i)=>(<li key={i}>{b}</li>))}</ul>
        <h4>Premium Example</h4>
        <p>{scheme.premiumExample}</p>
        <p><Link to="/schemes">Back to plans</Link></p>
      </div>
    </section>
  )
}
