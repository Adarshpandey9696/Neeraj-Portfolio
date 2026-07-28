import { useLocation } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Carousel from '../components/Carousel'
import staticPages from '../data/staticPages'

export default function StaticPage(){
  const loc = useLocation()
  const path = loc.pathname
  const page = staticPages.find(p=> p.path.toLowerCase() === path.toLowerCase())
  const [calculatorValues, setCalculatorValues] = useState({ sumAssured: 500000, age: 32, term: 20, mode: 'Yearly' })

  const premiumEstimate = useMemo(() => {
    const sumAssured = Number(calculatorValues.sumAssured) || 0
    const age = Number(calculatorValues.age) || 0
    const term = Number(calculatorValues.term) || 0
    const modeFactor = {
      Yearly: 1,
      'Half Yearly': 0.52,
      Quarterly: 0.27,
      Monthly: 0.09
    }[calculatorValues.mode] || 1

    if (!sumAssured || !age || !term) return 0

    const baseRate = Math.min(0.0185 + (age / 10000), 0.024)
    const termFactor = 1 + (term - 10) * 0.012
    const premium = (sumAssured * baseRate * termFactor) / 1000 * modeFactor
    return Math.round(premium)
  }, [calculatorValues])
  if(!page) return (
    <section className="page container">
      <h1>Page not found</h1>
      <p>The page <strong>{path}</strong> is not available yet.</p>
    </section>
  )

  return (
    <section className="page container static-page">
      <div className="static-shell">
        <h1>{page.title}</h1>
        {page.subtitle && <p className="intro">{page.subtitle}</p>}
        {page.body.map((section, index) => {
          if (section.type === 'list') {
            return (
              <ul key={index}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )
          }
          if (section.type === 'link-list') {
            return (
              <ul key={index} className="link-list">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            )
          }
          if (section.type === 'gallery') {
            return (
              <div key={index} className="gallery-carousel-block">
                <Carousel items={section.items} />
              </div>
            )
          }
          if (section.type === 'calculator') {
            return (
              <div key={index} className="premium-calculator-card">
                <div className="premium-calculator-header">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
                <div className="premium-calculator-grid">
                  <div className="premium-form">
                    {section.fields.map((field) => (
                      <label key={field.name} className="premium-field">
                        <span>{field.label}</span>
                        {field.type === 'select' ? (
                          <select
                            value={calculatorValues[field.name]}
                            onChange={(e) => setCalculatorValues(prev => ({ ...prev, [field.name]: e.target.value }))}
                          >
                            {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            value={calculatorValues[field.name]}
                            onChange={(e) => setCalculatorValues(prev => ({ ...prev, [field.name]: e.target.value }))}
                          />
                        )}
                      </label>
                    ))}
                  </div>
                  <div className="premium-result">
                    <div className="premium-result-box">
                      <p className="premium-label">{section.resultLabel}</p>
                      <h2>₹{premiumEstimate.toLocaleString('en-IN')}</h2>
                      <p className="premium-note">Approximate amount per selected payment mode</p>
                    </div>
                    <ul>
                      {section.assumptions.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
          return <p key={index}>{section.text}</p>
        })}
        <p className="footer-note"><em>This page is built locally as part of your portfolio website.</em></p>
      </div>
    </section>
  )
}
