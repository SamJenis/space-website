import React from 'react'
import Navbar from '../../navbar/homeNav/Navbar'
import './Destination.css'
import NavDestination from '../../navbar/destinationNav/NavDestination'
import Moon from '../../planets/Moon'
import {Outlet, useLocation} from 'react-router-dom'

const Destination = () => {

   const location  = useLocation();

  return (
    <div  style={{ backgroundImage: "url(/images/destination/background-destination-desktop.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: "100%", height: "120vh" }}>
      <div style={{ paddingTop: '40px' }}>
        <Navbar />
      </div>

      <div className='destination-heading'>
        <p ><span id='destination-no'>01</span> PICK YOUR DESTINATION</p>
      </div>

      <div className='desti-nav-grid'>
        <div></div>
        <NavDestination />
      </div>

      {location.pathname === '/Destination' ? 

        <Moon />
      
      : 
        <Outlet />
      }
      
      
    </div>
    
  )
  
}

export default Destination