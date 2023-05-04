import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
    const [IsOpen, setIsOpen] = useState(false)

    function menu() {
        setIsOpen(!IsOpen)
    }
    
    return (
        <nav className="navbar">
            <h1 className='logo'>Logo</h1>
            <ul className= {IsOpen ? 'nav active open-menu' : 'nav active'}>
                <Link to='homepage' spy={true} smooth={true} duration={500} className='nav-item'>home</Link>
                <li className='nav-item'>about</li>
                <li className='nav-item'>education</li>
                <li className='nav-item'>skill</li>
                <li className='nav-item'>contact</li>
                
            </ul>
            <i class='ri-menu-line' onClick={menu}></i>
        </nav>
    )
}

export default Navbar