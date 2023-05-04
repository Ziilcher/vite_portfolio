import './Homepage.css'
import hero from '../assets/IMG_20211104_180149_232.jpg'
function Homepage() {
  return (
    <section className="homepage">
      <div className="hero">
        <div className="hero-content hero-info">
          <h1>Front-end React <br />
          Developer.</h1>
          <p>Hi, I'm Passakorn Poomsophonmetha. <br /> A junior and passionate Front-end React Developer.</p>
        </div>
        <div className="hero-img hero-info">
          <img src= {hero} alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Homepage