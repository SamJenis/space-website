import React, { useState } from 'react'
import Navbar from '../../navbar/homeNav/Navbar'
import './Technology.css'
import Launch from './Launch'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Technology = () => {

    const [activeItem, setActiveItem] = useState(0)
    const location = useLocation();
    return (

        <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/technology/background-technology-desktop.jpg)`, 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover', 
            width: '100%', 
            height: '120vh' 
          }}>
            <div style={{ paddingTop: '40px' }}>
                <Navbar />
            </div>


            <div className='destination-heading'>
                <p ><span id='destination-no'>03</span> SPACE LAUNCH 101</p>
            </div>

            <div className='launch-grid-div'>

                <div className='launch-buttons-div'>
                    <div className='launch-column-buttons'>
                        <Link to="Launch" className='link'>
                            <button
                                className={activeItem === 0 ? `tech-button ${'active1'}` : 'tech-button'}
                                onClick={() => setActiveItem(0)} >1
                            </button>
                        </Link>

                        <Link to="SpacePort" className='link'>
                            <button
                                className={activeItem === 1 ? `tech-button ${'active1'}` : 'tech-button'}
                                onClick={() => setActiveItem(1)}>2
                            </button>
                        </Link>

                        <Link to="SpaceCapsule" className='link'>
                            <button
                                className={activeItem === 2 ? `tech-button ${'active1'}` : 'tech-button'}
                                onClick={() => setActiveItem(2)}>3
                            </button>

                        </Link>


                    </div>
                </div>

                {location.pathname === '/Technology' ?

                    <Launch />

                    :
                    <Outlet />
                }

            </div>

        </div>
    )
}

export default Technology