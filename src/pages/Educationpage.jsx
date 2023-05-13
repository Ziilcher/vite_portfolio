import { useEffect, useState } from 'react'
import './Educationpage.css'
import AOS from 'aos'
import EduTimeline from '../components/EduTimeline'
import ExpTimeline from '../components/ExpTimeline'

function Educationpage() {
  const [Edustate, setEdustate] = useState(true)
  const [Expustate, setExpustate] = useState(false)

  const OnClickEdu = ()=>{
    setEdustate(true)
    setExpustate(false)
  }

  const OnClickExp = ()=>{
    setExpustate(true)
    setEdustate(false)
  }

  useEffect(()=>{
    AOS.init({duration:500})
  },[])

  return (
    <main className="section container" data-aos='fade'>
        <section className="education">
            <h2 className="section-title">
                <pink>Education</pink> and <span>Experience</span> 
            </h2>

            <div className="tab-wrapper">
              <div className="tab grid">
                  <button className='tablinks' onClick={OnClickEdu}>Education</button>
                  <button className='tablinks' onClick={OnClickExp}>Experience</button>
              </div>
            </div>

            <div className={Edustate ? "tabcontent left-content" : "tabcontent left-content hide"}>
                <EduTimeline/>
            </div>

            <div className={Expustate ? "tabcontent right-content" : "tabcontent right-content hide"}>
                <ExpTimeline/>
            </div>
            
        </section>
    </main>
  )
}

export default Educationpage