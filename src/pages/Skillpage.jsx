import { useEffect } from 'react'
import AOS from 'aos'
import SkillFront from '../components/SkillFront'
import './Skillpage.css'

function Skillpage() {
  
  useEffect(()=>{
    AOS.init({duration:500})
  },[])

  return (
    <main className="section container" data-aos='fade'>
        <section className="Skill">
            <h2 className="section-title">
                Skill
            </h2>

            <div className="skill-center">

              <div className="skill-container grid">

                <div className="skill-card">
                  <h3 className="section-subtitle">Frontend developer</h3>
                  <div className="skill-wrapper grid">
                    <SkillFront/>
                  </div>
                </div>

                {/* <div className="skill-card">
                  <h3 className="section-subtitle">Backend developer</h3>
                  <div className="skill-wrapper grid">
                    <SkillFront/>
                  </div>
                </div> */}


              </div>
            </div>
        </section>
    </main>
  )
}

export default Skillpage