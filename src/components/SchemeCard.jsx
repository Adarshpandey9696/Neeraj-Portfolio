import { Link } from 'react-router-dom'
import './SchemeCard.css'
import heroImg from '../assets/hero.png'

export default function SchemeCard({plan}){
  return (
    <article className="scheme-card">
      <img src={plan.image} alt="" onError={(e)=>{e.currentTarget.src = heroImg}} />
      <div className="body">
        <h4>{plan.title}</h4>
        <p>{plan.summary}</p>
        <div className="actions">
          <Link to={`/plans/${plan.id}`}>View details</Link>
        </div>
      </div>
    </article>
  )
}
