import React from 'react'
import './Aboutpage.css'
function Aboutpage() {
  return (
    <section className='Aboutpage'>
        <h1>about me</h1>
        <div className="container-about">
            <div className="wrapper-about">
                <div>
                    <h2>Personal infos</h2>
                    <div className="about-personal">
                        <ul className="personal-info">
                            <li className='info'><span>First name:</span> Passakorn</li>
                            <li className='info'><span>Age:</span> 25</li>
                            <li className='info'><span>Address:</span> Bangson</li>
                            <li className='info'><span>Phone:</span> +669-542-5462</li>
                        </ul>
                        <ul className="personal-info">
                            <li className='info'><span>Lastname:</span> Poomsophonmetha</li>
                            <li className='info'><span>Nationality:</span> Thai</li>
                            <li className='info'><span>Email:</span> Kla.passakorn@hotmail.com</li>
                            <li className='info'><span>Phone:</span> Passakorn</li>
                        </ul>
                    </div>
                </div>

                <div className="right-container">
                    <div className="card-exp">
                        <h2>1+</h2>
                        <div className="exp-detail">
                            <p>Years of Software Engineer <br />Experience</p>
                        </div>
                    </div>

                    <div className="card-exp">
                        <h2>5+</h2>
                        <div className="exp-detail">
                            <p>Completed <br />Project</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Aboutpage