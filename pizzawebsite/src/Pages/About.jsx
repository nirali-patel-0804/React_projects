import React from 'react'
import about2 from "../assets/about2.jpg"
import '../Style/About.css'
const About = () => {
  return (
    <>
    <div className='about'>
      
      <div className="aboutButton">
        <h1>ABOUT US</h1>
        <p>At Taranovas Pizza Restaurant – Taste of Italy,<br />
         we are passionate about delivering the authentic <br/>flavors of Italy to our customers.<br/>
          Established in 2023, our family-owned restaurant<br/>
           has been a beloved destination for pizza lovers and<br/>
            Italian cuisine enthusiasts alike.<br/>
Thank you for creating lasting memories with us.</p>
      </div>

    </div>
    <div className='test'><img src={about2}/></div>
    </>
  )
}

export default About
