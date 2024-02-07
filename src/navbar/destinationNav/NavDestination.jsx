import React, { useEffect, useState } from 'react'
import './NavDestination.css'
import { Link, useLocation } from 'react-router-dom';


const NavDestination = () => {
    const [activeItem,setActiveItem] = useState(0);
    const location  = useLocation();

    useEffect(() => {
      if(location.pathname === "/Destination"){
        setActiveItem(0)
      }
    },[location.pathname])

  return (
    <nav className='navbar-destination'>
          <ul className='nav-ul-destination'>
            
            <Link to="Moon" className='link'>
                <li className={activeItem === 0 ? 'active' : ''} onClick={() => setActiveItem(0)}>
                <span>MOON</span>
                </li>
            </Link>
            
            <Link to="Mars" className='link'>   
            <li className={activeItem === 1 ? 'active' : ''} onClick={() => setActiveItem(1)}>
              <span>MARS</span>
            </li>
            </Link>

            <Link to="Europa" className='link'>   

            <li className={activeItem === 2 ? 'active' : ''} onClick={() => setActiveItem(2)}>

              <span>EUROPA</span>
            </li>
            </Link>

            <Link to="Titan" className='link'>
            <li className={activeItem === 3 ? 'active' : ''} onClick={() => setActiveItem(3)}>
              <span>TITAN</span>
            </li>
            </Link>

          </ul>

        </nav>
  )
}

export default NavDestination