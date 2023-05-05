import { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

function Navbar() {
    const [IsOpen, setIsOpen] = useState(false)

    function menu() {
        setIsOpen(!IsOpen)
    }
    
    return (
        <nav className="navbar">
            <h1 className='logo'>PP</h1>
            <ul className= {IsOpen ? 'nav active open-menu' : 'nav active'}>
                <li className='nav-item'><NavLink to='home'>home</NavLink></li>
                <li className='nav-item'><NavLink to='about'>about</NavLink></li>
                <li className='nav-item'><NavLink to='education'>education</NavLink></li>
                <li className='nav-item'><NavLink to='skill'>skill</NavLink></li>
                <li className='nav-item'><NavLink to='contact'>contact</NavLink></li>
                
            </ul>
            <i class='ri-menu-line' onClick={menu}></i>
        </nav>
    )
}

export default Navbar