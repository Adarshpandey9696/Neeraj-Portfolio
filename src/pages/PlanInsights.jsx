import './Pages.css'

const planStats = [
  { name: 'Endowment Plus', people: 240, color: 'linear-gradient(180deg, #4f4aa8, #7b5ad4)' },
  { name: 'Term Protect', people: 180, color: 'linear-gradient(180deg, #cfa33b, #f3c96b)' },
  { name: 'New Jeevan Anand', people: 150, color: 'linear-gradient(180deg, #2b2a7a, #4f4aa8)' },
]

export default function PlanInsights(){
  return (
    <section className="page container">
      <div className="insights-shell">
        <div className="insights-hero">
          <div>
            <h1>Plan Insights</h1>
            <p>See which plans are most popular among families and download a simple brochure for each option.</p>
          </div>
          <div className="about-badge">Popular plans</div>
        </div>

        <div className="stats-chart-card">
          <h3>How many people choose each plan</h3>
          <div className="chart-grid">
            {planStats.map((plan) => (
              <div key={plan.name} className="bar-item">
                <div className="bar-track">
                  <div className="bar-fill" style={{ height: `${Math.max((plan.people / 300) * 100, 18)}%`, background: plan.color }} />
                </div>
                <strong>{plan.name}</strong>
                <span>{plan.people} people</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-chart-card">
          <h3>Plan brochures</h3>
          <table className="download-table">
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {planStats.map((plan) => (
                <tr key={plan.name}>
                  <td>{plan.name}</td>
                  <td>
                    <a href={`/plan-pdfs/${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.pdf`} download>
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
