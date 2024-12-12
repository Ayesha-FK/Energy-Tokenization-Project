// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import TermsOfService from './Components/TermsOfService/TermsOfService';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import DetailedInfo from './Components/DetailedInfo/DetailedInfo';
import SmartContractPage from './Components/SmartContractPage/SmartContractPage';

const App = () => {
    const [playState, setPlayState] = useState(false);

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={
                    <div>
                        <Hero />
                        <div className="container">
                            <Title subTitle="Our Products" title="What We Offer" />
                            <Programs />
                            <About setPlayState={setPlayState} />
                            <Title subTitle="Marketplace" title="Produce or Buy!" />
                            <Campus />
                            <Title subTitle="Testimonials" title="What Producers Say!" />
                            <Testimonials />
                            <Title subTitle="Contact Us" title="Get In Touch" />
                            <Contact />
                            <Footer />
                        </div>
                        <VideoPlayer playState={playState} setPlayState={setPlayState} />
                    </div>
                } />
                <Route path="/LoginSignup" element={<LoginSignup />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/detailed-info" element={<DetailedInfo />} />
                
                {/* Add Route for SmartContractPage */}
                <Route path="/smart-contract" element={<SmartContractPage />} />
            </Routes>
        </Router>
    );
};

export default App;
