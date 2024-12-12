import React from 'react' 
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return(
  <div className='hero container'>
   <div className="hero-text">
    <h1>Powering a Sustainable Future Together</h1>
    <p>GreenSync is a revolutionary online marketplace that connects consumers, businesses, and energy providers to trade and access clean, renewable energy.
       Our platform empowers you to contribute to a sustainable future, reduce your carbon footprint, and support a greener planet through innovative energy solutions.
       Join us on our mission to sync the world with eco-friendly power sources, making renewable energy accessible and affordable for all.
    </p>
    <button className='btn'>Explore More <img src={dark_arrow} 
     alt="" /></button>
   </div>
  </div>
  )
}

export default Hero