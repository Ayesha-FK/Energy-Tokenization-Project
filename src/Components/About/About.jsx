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
        <h3>About Green Sync</h3>
        <h2>Nurturing A Decentralized Green Future</h2>
        <p> At GreenSync, we are committed to creating a sustainable energy future through innovation and collaboration. 
            Our platform serves as a bridge between energy producers and consumers, allowing individuals, businesses, and 
            organizations to trade renewable energy credits efficiently and transparently.</p>
        <p> GreenSync empowers users to take control of their energy consumption and production. 
            Whether you’re a consumer looking to reduce your carbon footprint or a producer seeking to contribute clean energy to the grid, 
            GreenSync provides a seamless experience for trading, tracking, and managing renewable energy credits.</p>
        <p> We believe in making renewable energy accessible to everyone. Our mission is to promote a greener planet by simplifying 
            the process of buying and selling clean energy. With a modern, responsive interface and secure back-end infrastructure, 
            GreenSync helps you monitor your energy usage and make informed, eco-friendly choices. Together, we can power a sustainable future.</p>
        </div>
        </div>
  )
}

export default About