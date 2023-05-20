import { useEffect } from "react"
import AOS from "aos"
import './Contactpage.css'

function Contactpage() {
  useEffect(()=>{
    AOS.init({duration: 500})
  },[])
  return (
    <main className="section container" data-aos='fade'>
        <section className="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact-container grid">
                <div className="left-contact">
                    <h2 className="section-subtitle">Let's work together.</h2>
                    <input type="text" class='field' placeholder="Your name"/>
                    <input type="email" class='field' placeholder="Your email"/>
                    <input type="tel" class='field' placeholder="Your phone number"/>
                    <textarea cols="30" rows="10" placeholder="Message"/>
                </div>
                <div className="right-container">
                    
                </div>                
            </div>
        </section>
    </main>
  )
}

export default Contactpage