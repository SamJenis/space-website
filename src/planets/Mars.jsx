import React from 'react'
import './planet.css'


const Mars = () => {
  return (
    <div className='planets-div'>
        <div className='planet-img-div'>
        <img src='/images/destination/image-mars.png' alt='mars' className='planet-img'/>

        </div>
        <div className='planet-content'>
            <h1>MARS</h1>
            <p>
                Don't forget to packyour hiking boots. you'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half thims the size of Everest!
            </p>
            <div className='planet-line' ></div>

            <div className='avg-travel-div'>
                <div>
                    <p>AVG. DISTANCE</p>
                    <h2>225 MIL KM</h2>
                </div>
                <div>
                    <p>EST. TRAVEL TIME</p>
                    <h2>9 MONTHS</h2>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Mars