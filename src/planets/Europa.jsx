import React from 'react'

const Europa = () => {
  return (
    <div className='planets-div'>
        <div className='planet-img-div'>
        <img src={`${process.env.PUBLIC_URL}/images/destination/image-europa.png`} alt='europa' className='planet-img'/>

        </div>
        <div className='planet-content'>
            <h1>EUROPA</h1>
            <p>
            Europa, Jupiter's moon, harbors a subsurface ocean, sparking interest in potential life beyond Earth. Its icy surface conceals a watery world, enticing exploration for signs of alien life.
            </p>
            <div className='planet-line' ></div>

            <div className='avg-travel-div'>
                <div>
                    <p>AVG. DISTANCE</p>
                    <h2>0.6 MIL KM</h2>
                </div>
                <div>
                    <p>EST. TRAVEL TIME</p>
                    <h2>72 MONTHS</h2>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Europa