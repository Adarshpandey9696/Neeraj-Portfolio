import Carousel from '../components/Carousel'
import schemes from '../data/schemes'
import './Pages.css'

export default function Home(){
  const highlights = schemes.slice(0,3).map(s=>({id:s.id,title:s.title,summary:s.summary,image:s.image}))
  return (
    <section className="page home">
      <div className="hero-royal">
        <div className="hero-inner container">
          <h1>Trusted LIC Agent — Secure Your Future</h1>
          <p>Creative, royal-themed insurance guidance across LIC plans. Plan smarter, protect better, and invest with confidence.</p>
          <div className="hero-actions">
            <a className="btn primary-btn" href="/plans">Explore Plans</a>
            <a className="btn secondary-btn" href="/Home/ContactUs">Book a Call</a>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Featured plans</h2>
        <Carousel items={highlights} />
        <div className="highlight-carousel-wrap">
          <div className="highlight-carousel" aria-label="Featured scheme highlights">
            {[
              {title:'Endowment Plus', summary:'Balanced savings with a guaranteed return and bonus benefits.'},
              {title:'Term Protect', summary:'Affordable life cover for your family at critical stages.'},
              {title:'New Jeevan Anand', summary:'Ideal plan for protection and regular income after maturity.'},
            ].concat([
              {title:'Endowment Plus', summary:'Balanced savings with a guaranteed return and bonus benefits.'},
              {title:'Term Protect', summary:'Affordable life cover for your family at critical stages.'},
              {title:'New Jeevan Anand', summary:'Ideal plan for protection and regular income after maturity.'},
            ]).map((item, index)=>(
              <div key={`${item.title}-${index}`} className="highlight-card">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
