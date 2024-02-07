import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [activeNavItem, setActiveNavItem] = useState(0);

  
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
        case '/':
            setActiveNavItem(0);
            break;
        case '/Destination':
            setActiveNavItem(1);
            break;
        case '/Destination/Moon':
            setActiveNavItem(1);
            break;
        case '/Destination/Mars':
                setActiveNavItem(1);
                break;
        case '/Destination/Europa':
            setActiveNavItem(1);
            break;
        case '/Destination/Titan':
            setActiveNavItem(1);
            break;
        case '/Crew':
            setActiveNavItem(2);
            break;  
        case '/Technology/Launch':
            setActiveNavItem(3);
            break;
        case '/Technology/SpacePort':
                setActiveNavItem(3);
                break;
        case '/Technology/SpaceCapsule':
            setActiveNavItem(3);
            break;
        case '/Technology':
            setActiveNavItem(3);
            break;      
        
        default:
            setActiveNavItem(null);
    }
}, [location.pathname]);


const [click, setClick] = useState(false);

    
  return (
    <div className='navbar' >
        <img id='star-logo' src={`${process.env.PUBLIC_URL}/images/shared/logo.svg`} alt='logo'/>
        <div className='line'></div>
        <nav className={click ? 'navbar-nav active-m' : 'navbar-nav'}>
            <ul className='nav-ul'>

                    <li className={activeNavItem === 0 ? 'active' : ''} onClick={() => setActiveNavItem(0)}>
                        <Link to="/" className='link'>
                            <b>00</b><span>HOME</span>
                        </Link>
                        
                    </li>

                    <li className={activeNavItem === 1 ? 'active' : ''} onClick={() => setActiveNavItem(1)}>
                        <Link to="/Destination" className='link'>
                            <b>01</b><span>DESTINATION</span>                           
                        </Link>
                    </li>


                    <li className={activeNavItem === 2 ? 'active' : ''} onClick={() => setActiveNavItem(2)}>
                        <Link to="/Crew" className='link'>
                            <b>02</b><span>CREW</span>
                        </Link>                   
                    </li>


                    <li  className={activeNavItem === 3 ? 'active' : ''} onClick={() => setActiveNavItem(3)}>
                        <Link to="/Technology" className='link'>
                            <b>03</b><span>TECHNOLOGY</span>
                        </Link>                    
                    </li>

            </ul>
        </nav>

            <div className='menu-icon' >
                <img onClick={() => setClick(!click)} src={click ? `${process.env.PUBLIC_URL}/images/shared/icon-close.svg`  : `${process.env.PUBLIC_URL}/images/shared/icon-hamburger.svg`} alt='menu' />
            </div>
    </div>
  )
}

export default Navbar