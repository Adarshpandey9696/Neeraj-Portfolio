import './Pages.css'

export default function About(){
  return (
    <section className="page container">
      <div className="about-hero">
        <div>
          <h1>About the Agent</h1>
          <p>Experienced LIC agent offering personalised advice on insurance and savings with a warm, joyful approach that makes planning feel easy.</p>
          <div className="about-badges">
            <span className="about-badge">Trusted guidance</span>
            <span className="about-badge">Tailored plans</span>
            <span className="about-badge">Friendly support</span>
          </div>
        </div>
        <div className="about-card">
          <h3>Why choose me?</h3>
          <ul>
            <li>Trusted LIC representative with years of experience</li>
            <li>Tailored plan recommendations for every life stage</li>
            <li>End-to-end support from application to claim</li>
          </ul>
          <p>Download resume: <a href="#">Resume (PDF)</a></p>
        </div>
      </div>
    </section>
  )
}
