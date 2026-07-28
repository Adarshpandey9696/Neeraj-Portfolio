import { useState } from 'react'
import './Pages.css'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, phone, message } = form

    if (!name || !email || !message) {
      setStatus('Please enter your name, email, and message before sending.')
      return
    }

    const subject = encodeURIComponent(`Contact request from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:neerajtiwari11800@gmail.com?subject=${subject}&body=${body}`
    setStatus('please set default mail for browser')
  }

  return (
    <section className="page container contact-page">
      <div className="contact-header">
        <div>
          <h1>Contact</h1>
          <p>Reach out to schedule a consultation or request plan details. We are here to guide you on LIC policies, investments, and financial planning.</p>
          <div className="about-badges">
            <span className="about-badge">Quick response</span>
            <span className="about-badge">Personal help</span>
            <span className="about-badge">Friendly consultation</span>
          </div>
        </div>
        <div className="contact-card">
          <h3>Contact Details</h3>
          <p><strong>Name:</strong> Neeraj Tiwari</p>
          <p><strong>Phone:</strong> <a href="tel:7850013022">7850013022</a></p>
          <p><strong>Email:</strong> <a href="mailto:neerajtiwari11800@gmail.com">neerajtiwari11800@gmail.com</a></p>
          <p><strong>Office:</strong> Local LIC agency office</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={handleChange} required /></label>
        <label>Phone<input name="phone" type="tel" value={form.phone} onChange={handleChange} /></label>
        <label>Message<textarea name="message" rows={6} value={form.message} onChange={handleChange} required></textarea></label>
        {status ? <p className="form-status">{status}</p> : null}
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  )
}
