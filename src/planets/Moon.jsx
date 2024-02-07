import React from 'react'

const Moon = () => {
  return (
    <div className='planets-div'>
        <div className='planet-img-div'>
        <img src={`${process.env.PUBLIC_URL}/images/destination/image-moon.png`} alt='moon' className='planet-img'/>

        </div>
        <div className='planet-content'>
            <h1>MOON</h1>
            <p>
            The Moon, Earth's closest neighbor, is the fifth largest natural satellite. Its low gravity and synchronous rotation offer potential for exploration and colonization. Recent discoveries of water ice hint at exciting prospects for future lunar missions.
            </p>
            <div className='planet-line' ></div>

            <div className='avg-travel-div'>
                <div>
                    <p>AVG. DISTANCE</p>
                    <h2>0.3 MIL KM</h2>
                </div>
                <div>
                    <p>EST. TRAVEL TIME</p>
                    <h2>3 DAYS</h2>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Moon