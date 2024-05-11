import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

      </div>
      <div className="about-right">
         <h3>ABOUT UNIVERSITY </h3>
         <h2>Nurturing Tomorrows Leaders Today </h2>
         <p>Real-World Relevance: Our curriculum is designed in 
            collaboration with industry experts, ensuring that 
            what you learn is current, practical, and directly applicable to your future career.</p>
         <p>Industry Partnerships: We have established partnerships
             with leading companies in various sectors. 
             These partnerships provide opportunities for internships, 
             co-op programs, and research collaborations that give our 
             students hands-on experience and networking opportunities.
         </p>
         <p>Cutting-Edge Facilities: We invest in state-of-the-art
             facilities and technology to simulate real industry 
             environments. This exposure gives our graduates a competitive
              edge in the job market.
              </p>
              </div>
    </div>
  )
}

export default About
