import React from 'react'
import { FaArrowDown } from "react-icons/fa";

function Home() {
  return (
    <section className='homepage'>
      <div className="container" data-aos="fade-up" data-aos-duration="">
        <div className="home-content">
          <h1 className='text-white'>Hello World!</h1>
          <h2>I'm Kamaleshwaran</h2>
          <div>
            <span>Frontend-Developer & </span><span>Backend-Developer</span>
          </div>
          <div className='scroll-bar' data-aos="fade-up" data-aos-duration="2000">
            <span>Scroll</span>
            <FaArrowDown className='text-white ms-1'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home