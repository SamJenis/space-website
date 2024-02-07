import React from 'react'
import Navbar from '../../navbar/homeNav/Navbar'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/home/background-home-desktop.jpg)`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      width: '100%', 
      height: '110vh' 
    }}>
        <div style={{paddingTop:'40px'}}>
        <Navbar />
        </div>

    <div className='home-div'>
        <div className='desc-space'>
          <p id='heading1'>
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 id='heading-space'>
            SPACE
          </h1>
          <p id='heading-para'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>


        
          <div>
          
          <div className='explore'>
              <Link to="/Destination" className='link'>
                <p id='explore-p'>EXPLORE</p>
              </Link>
          </div>
          
          </div>
          
        
        
    </div>
        



    </div>
  )
}

export default Home