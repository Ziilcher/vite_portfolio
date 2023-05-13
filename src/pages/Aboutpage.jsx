import React, { useEffect } from 'react'
import Info from '../components/Info'
import Stats from '../components/Stats'
import './Aboutpage.css'
import AOS from 'aos'

function Aboutpage() {
  useEffect(()=>{
    AOS.init({duration:500})
  },[])

  return (
    <main className="section container" data-aos='fade'>
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-container grid">

          <div className="about-info">
            <div className="info-wrapper">
              <h3 className="section-subtitle">Personal Infos</h3>
              <ul className='info-list grid'>
                <Info />
              </ul>
            </div>
          </div>

          <div className="stats grid">
            <Stats />
          </div>

        </div>
      </section>
    </main>
  )
}

export default Aboutpage