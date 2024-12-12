import React, { useState } from 'react' 
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title'
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
const App = () => {

  const[playState, setPlayState] = useState(false);
  
  
  return(
    <div>
     <NavBar /> 
     <Hero /> 
     <div className="container">
      <Title subTitle='Our Products' title='What We Offer'/>
     <Programs/>    
     <About setPlayState={setPlayState}/> 
     <Title subTitle='Marketplace' title='Produce or Buy!'/>
     <Campus/>
     <Title subTitle='Testimonials' title='What Producers Say!'/>
     <Testimonials/>
     <Title subTitle='Contact Us' title='Get In Touch'/>
     <Contact/>
     <Footer/>
     </div>
<VideoPlayer playState={playState} setPlayState={setPlayState}/>
  </div>
  )
}

export default App