import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
        
        <div className="slider">
    <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Sarah Thompson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>"As a forward-thinking platform, Green Sync has revolutionized how businesses like Edusity source and manage clean energy. 
                        Their intuitive energy listings, structured schema, and efficient workflow made the transition to renewable energy seamless. 
                        The transparency in pricing and the ability to monitor our energy consumption has empowered us to contribute to a sustainable 
                        future without the usual complexities. Green Sync is not just a marketplace; it's a movement toward a greener planet."</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Shreejeev Suntra</h3>
                            <span>Small Business Owner, USA</span>
                        </div>
                    </div>
                    <p>"As a small business owner committed to sustainability, Green Sync has been an incredible resource. 
                        The platform’s clean and easy-to-navigate homepage gave me exactly what I needed to get started. 
                        In just a few clicks, I was able to browse energy credits, compare prices, and choose the renewable energy option 
                        that aligned with my values and budget. It’s amazing to see how simple it is to contribute to a greener planet."</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emily Roberts</h3>
                            <span>Solar Energy Producer, USA</span>
                        </div>
                    </div>
                    <p>"Green Sync has made it effortless for producers like me to list energy credits and reach a wide audience. 
                        The dynamic energy listings page not only helps me showcase my solar energy output, but the seamless workflow 
                        also ensures that transactions are handled securely. Managing my listings through the user dashboard has been 
                        a breeze, and I appreciate the transparency and real-time updates the platform offers."</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Björn Kjellberg</h3>
                            <span>Environmental Consultant, USA</span>
                        </div>
                    </div>
                    <p>"Green Sync's detailed tracking and monitoring of energy consumption are what set it apart for me. As an environmental consultant, 
                        I need tools that provide real insights, and Green Sync’s platform does just that. The user dashboard allows me to easily view and 
                        manage energy purchases for my clients, giving them full control over their energy consumption. It's an essential platform for anyone 
                        serious about reducing their carbon footprint and embracing renewable energy."</p>
                </div>
            </li> 
    </ul>

        </div>
    </div>
  )
}

export default Testimonials