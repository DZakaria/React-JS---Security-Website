import React,{ useState } from 'react'
import {SiDatabricks} from 'react-icons/si'
import {FaBars} from 'react-icons/fa'
import './NavbarStyles.css';
import { Link } from 'react-router-dom';




const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                <SiDatabricks className='icon' />
                    <h1>Secure</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/recovery'>Recovery</Link></li>
                    <li><Link to='/cloud'>Cloud</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <button>Sign in</button>
                </ul>
                <div className="hamburger" onclick={handleNav}>
                
                    <FaBars className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
