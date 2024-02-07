import React from 'react'

const Titan = () => {
  return (
    <div className='planets-div'>
        <div className='planet-img-div'>
        <img src='/images/destination/image-titan.png' alt='titan' className='planet-img'/>

        </div>
        <div className='planet-content'>
            <h1>TITAN</h1>
            <p>
            Titan, Saturn's largest moon, features methane lakes and a dense atmosphere. Its unique chemistry offers insights into the origins of life. Scientists are intrigued by Titan's potential for harboring prebiotic chemistry.
            </p>
            <div className='planet-line' ></div>

            <div className='avg-travel-div'>
                <div>
                    <p>AVG. DISTANCE</p>
                    <h2>1.2 BIL KM</h2>
                </div>
                <div>
                    <p>EST. TRAVEL TIME</p>
                    <h2>84 MONTHS</h2>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Titan