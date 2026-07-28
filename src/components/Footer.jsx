import './Footer.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <strong>Neeraj Tiwari</strong>
          <p>Trusted LIC advisory with financial planning, protection, and personalized support.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Home/About">About</a></li>
            <li><a href="/plans">Plans</a></li>
            <li><a href="/Home/ContactUs">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Name: Neeraj Tiwari</p>
          <p>Phone: <a href="tel:7850013022">7850013022</a></p>
          <p>Email: <a href="mailto:neerajtiwari11800@gmail.com">neerajtiwari11800@gmail.com</a></p>
          <p>Address: Local LIC agency office</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">LinkedIn</a></p>
          <p><a style={{ color: 'black',fontWeight:'600 ' }} href="#">Twitter</a></p>
          <p><a style={{ color: 'red' }} href="https://youtube.com/@neerajtiwari2431?si=CCHL1RQyTeLurKf9">YouTube</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Neeraj Tiwari. All rights reserved.</span>
        <span><a href="/Home/sitemap">Site Map</a> · <a href="/Miscallenous/faqs">FAQ</a></span>
      </div>
    </footer>
  )
}
