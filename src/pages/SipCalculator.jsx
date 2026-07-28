import { useMemo, useState } from 'react'
import './Pages.css'

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [annualReturnRate, setAnnualReturnRate] = useState(12)
  const [investmentYears, setInvestmentYears] = useState(10)

  const results = useMemo(() => {
    const monthlyRate = annualReturnRate / 100 / 12
    const months = investmentYears * 12

    const futureValue = monthlyRate === 0
      ? monthlyInvestment * months
      : monthlyInvestment * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate)

    const totalInvested = monthlyInvestment * months
    const estimatedReturns = futureValue - totalInvested

    return {
      futureValue,
      totalInvested,
      estimatedReturns,
    }
  }, [monthlyInvestment, annualReturnRate, investmentYears])

  return (
    <section className="page sip-calculator-page">
      <div className="container">
        <div className="sip-hero">
          <div>
            <p className="eyebrow">Mutual funds • SIP planning</p>
            <h1>Systematic Investment Plan Calculator</h1>
            <p>
              Estimate how your monthly SIP can grow over time with compound returns.
              This calculator is designed to help you plan your long-term investment goals.
            </p>
          </div>
          <div className="sip-hero-card">
            <h3>Projected maturity value</h3>
            <div className="sip-large-value">{currencyFormatter.format(results.futureValue)}</div>
            <p>Based on your selected investment amount, tenure and expected return rate.</p>
          </div>
        </div>

        <div className="sip-grid">
          <div className="sip-card">
            <h2>Enter your SIP details</h2>
            <label className="sip-field">
              <span>Monthly investment (₹)</span>
              <input
                type="number"
                min="100"
                step="100"
                value={monthlyInvestment}
                onChange={(event) => setMonthlyInvestment(Number(event.target.value))}
              />
            </label>

            <label className="sip-field">
              <span>Expected annual return (%)</span>
              <input
                type="number"
                min="1"
                max="30"
                step="0.1"
                value={annualReturnRate}
                onChange={(event) => setAnnualReturnRate(Number(event.target.value))}
              />
            </label>

            <label className="sip-field">
              <span>Investment period (years)</span>
              <input
                type="number"
                min="1"
                max="40"
                step="1"
                value={investmentYears}
                onChange={(event) => setInvestmentYears(Number(event.target.value))}
              />
            </label>

            <div className="sip-hint">
              <p>Tip: A long-term SIP typically benefits from compounding and rupee cost averaging.</p>
            </div>
          </div>

          <div className="sip-results">
            <div className="sip-result-card primary">
              <span>Total invested</span>
              <strong>{currencyFormatter.format(results.totalInvested)}</strong>
            </div>
            <div className="sip-result-card">
              <span>Estimated returns</span>
              <strong>{currencyFormatter.format(results.estimatedReturns)}</strong>
            </div>
            <div className="sip-result-card">
              <span>Maturity value</span>
              <strong>{currencyFormatter.format(results.futureValue)}</strong>
            </div>

            <div className="sip-breakdown">
              <h3>How the estimate works</h3>
              <ul>
                <li>Monthly investment is added every month for the selected period.</li>
                <li>Returns are assumed to be compounded monthly.</li>
                <li>Actual returns may vary based on fund performance and market conditions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
