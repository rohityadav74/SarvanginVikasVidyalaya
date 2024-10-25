import React from 'react'
import './About.css'
import about_img from '../../assets/sarvangin.jpeg'
import play_icon from '../../assets/playicon.png'
const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className='about-right'>
        <h3>About Sarvangin Vikas</h3>
        <h2>Dedicated for providing quality of education</h2>
        <p>We are going to take care of all round development of the student</p>
        <p>Help in choosing the carrier path that al</p>
        <p>colloborate with industry to provide hands on experience of real life implementation</p>
      </div>
    </div>
  )
}

export default About
