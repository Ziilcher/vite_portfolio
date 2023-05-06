import './Homepage.css'
import hero from '../assets/IMG_20211104_180149_232.jpg'
import AOS from 'aos'
import { useEffect } from 'react'

function Homepage() {
  useEffect(()=>{
    AOS.init({duration:500})
  },[])

  return (
    <section className="homepage">
      <div className="hero" data-aos='fade'>
        <div className="hero-content hero-info">
          <h1>Front-end React <br />
          <span>Developer.</span></h1>
          <p>Hi, I'm Passakorn Poomsophonmetha.<br />A junior and passionate Front-end React Developer. </p>
        </div>
        <div className="hero-img hero-info">
          <img src= {hero} alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Homepage