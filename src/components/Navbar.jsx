import { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import AOS from 'aos'

function Navbar() {
    const[Active,setActive] = useState(false)
    const [IsOpen, setIsOpen] = useState(false)

    function ActiveClick() {
        setActive(false)
        if(IsOpen){
            setIsOpen(false)
        }
    }

    useEffect(()=>{
        AOS.init({duration:500})
    },[])

    const menu = () => setIsOpen(!IsOpen)
    
    return (
        <nav className="navbar" data-aos='fade-down'>
            <h1 className='logo'>PP</h1>
            <ul className= {Active ? 'nav active' : 'nav'} id={IsOpen ? "open-menu":"close-menu"}>
                <li className='nav-item'><NavLink to='/' spy={true} onClick={ActiveClick}>home</NavLink></li>
                <li className='nav-item'><NavLink to='about' spy={true} onClick={ActiveClick}>about</NavLink></li>
                <li className='nav-item'><NavLink to='education' spy={true} onClick={ActiveClick}>education</NavLink></li>
                <li className='nav-item'><NavLink to='skill' spy={true} onClick={ActiveClick}>skill</NavLink></li>
                <li className='nav-item'><NavLink to='contact' spy={true} onClick={ActiveClick}>contact</NavLink></li>
                
            </ul>
            <i class='ri-menu-line' onClick={menu}></i>
        </nav>
    )
}

export default Navbar