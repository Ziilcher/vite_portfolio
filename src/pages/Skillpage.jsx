import { useEffect } from 'react'
import AOS from 'aos'

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
        </section>
    </main>
  )
}

export default Skillpage