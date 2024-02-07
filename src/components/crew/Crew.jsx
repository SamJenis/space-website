import React from 'react'
import './Crew.css'
import Navbar from '../../navbar/homeNav/Navbar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Crew = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };
  return (
    <div style={{ backgroundImage: "url(/images/crew/background-crew-desktop.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: "100%", height: "120vh" }}>
        <div style={{ paddingTop: '40px' }}>
        <Navbar />
      </div>

      <div className='crew-heading'>
        <p ><span id='crew-no'>02</span>  MEET YOUR CREW</p>
      </div>

      <Carousel
        swipeable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[ "mobile"]}
        dotListClass="custom-dot-list-style"
        
>
      <div className='crew-grid-div'>
        <div className='crew-content'>
            <h2>FLIGHT ENGINEER</h2>
            <h1>ANOUSHEH ANSARI</h1>
            <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded womwn to fly to the ISS, and the first Iranian in space.</p>
        </div>

        <div className='crew-img-div'>
        
            <img src='/images/crew/image-anousheh-ansari.png' alt='Anousheh' className='anousheh-img'/>
            
        </div>
      </div>

      <div className='crew-grid-div'>
        <div className='crew-content'>
            <h2>ASTRONAUT</h2>
            <h1>DOUGLAS HURLEY</h1>
            <p>Douglas Hurley is an American astronaut known for piloting the final Space Shuttle mission and for being one of the first astronauts to fly on SpaceX's Crew Dragon spacecraft as part of the Demo-2 mission in 2020.</p>
        </div>

        <div className='crew-img-div'>
        
            <img src='/images/crew/image-douglas-hurley.png' alt='douglas' className='douglas-img'/>
            
        </div>
      </div>

      <div className='crew-grid-div'>
        <div className='crew-content'>
            <h2>NAVAL AVIATOR</h2>
            <h1>VICTOR GLOVER</h1>
            <p>
             Victor Glover, an American astronaut and naval aviator, was the first African American crew member on an extended ISS mission with Expedition 64/65 via SpaceX's Crew-1 in November 2020. He previously served as a U.S.</p>
        </div>

        <div className='crew-img-div'>
        
            <img src='/images/crew/image-victor-glover.png' alt='victor' className='victor-img'/>
            
        </div>
      </div>

      <div className='crew-grid-div'>
        <div className='crew-content'>
            <h2>SPACE TOURIST</h2>
            <h1>MARK SHUTTLEWORTH</h1>
            <p>Mark Shuttleworth, was the first citizen of an independent African country to travel to space in 2002 as a space tourist aboard Soyuz TM-34. He is also the founder of Canonical Ltd., the company behind the Ubuntu operating system.</p>
        </div>

        <div className='crew-img-div'>
        
            <img src='/images/crew/image-mark-shuttleworth.png' alt='mark' className='mark-img'/>
            
        </div>
      </div>
    </Carousel>

    </div>
  )
}

export default Crew