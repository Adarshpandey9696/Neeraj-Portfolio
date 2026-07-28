import { useEffect, useRef, useState } from 'react'
import './Carousel.css'
import heroImg from '../assets/hero.png'

export default function Carousel({items}){
  const trackRef = useRef(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateButtons = () => {
    if (!trackRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current
    setCanScrollPrev(scrollLeft > 0)
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1)
  }

  const scrollByAmount = (direction) => {
    if (!trackRef.current) return
    const cardWidth = trackRef.current.querySelector('.slide')?.getBoundingClientRect().width || 280
    trackRef.current.scrollBy({ left: direction * (cardWidth + 16), behavior: 'smooth' })
  }

  useEffect(() => {
    updateButtons()
    const node = trackRef.current
    if (!node) return
    node.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)
    return () => {
      node.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [items])

  return (
    <div className="carousel-shell">
      <button type="button" className="carousel-nav prev" onClick={() => scrollByAmount(-1)} aria-label="Scroll previous cards">‹</button>
      <div className="carousel" aria-roledescription="carousel">
        <div className="slides" ref={trackRef}>
          {items.map((it, idx)=> (
            <div className="slide" key={it.id} style={{'--i': idx}}>
              <img src={it.image}  alt={it.title} onError={(e)=>{
                  console.log("Failed image:", it.image);
                e.currentTarget.src = heroImg}} />
              <div className="slide-caption">
                <h3>{it.title}</h3>
                <p>{it.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="carousel-nav next" onClick={() => scrollByAmount(1)} aria-label="Scroll next cards">›</button>
    </div>
  )
}
