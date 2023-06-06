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
                <form className="left-contact" action="">
                    <h2 className="section-subtitle">Let's work <span>together.</span></h2>
                    
                    <div className="input-box">
                      <input type='text' className="input" required/>
                      <label for=''>Name</label>
                    </div>

                    <div className="input-box">
                      <input type="email" className="input" required/>
                      <label for=''>Email</label>
                    </div>

                    <div className="input-box">
                      <input type="tel" className="input" required/>
                      <label for=''>Phone</label>
                    </div>

                    <div className="input-box">
                      <textarea name="" className="input" required id="message" cols="30" rows="10"></textarea>
                      <label for=''>Message</label>
                    </div>

                    <input className="submit-btn" type="submit" value="SUBMIT"/>
                </form>
                
                <div className="right-contact">
                    <div>image</div>
                </div>                
            </div>
        </section>
    </main>
  )
}

export default Contactpage