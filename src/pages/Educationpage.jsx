import React, { useEffect } from 'react'
import './Educationpage.css'
import AOS from 'aos'
import EduTimline from '../components/EduTimeline'

function Educationpage() {
  useEffect(()=>{
    AOS.init({duration:500})
  },[])

  return (
    <main className="section container" data-aos='fade'>
        <section className="education">
            <h2 className="section-title">
                Education
            </h2>

            <div className="tab grid">
                <button className='tablinks'>Education</button>
                <button className='tablinks'>Experience</button>
            </div>

            <div className="tabcontent">
                <EduTimline/>
            </div>

            {/* <div className="tabcontent">
                <ExpTimeline/>
            </div> */}
        </section>
    </main>
  )
}

export default Educationpage