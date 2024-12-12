// TermsOfService.js
import React, { useEffect } from 'react';
import './TermsOfService.css';


const TermsOfService = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-container">
            <h1>Terms of Service</h1>
            <p className="update-date">Last Updated: <strong>10/27/2024</strong></p>
            <p>Welcome to GreenSync! Please read these Terms of Service ("Terms") carefully before using our platform. By accessing or using GreenSync (“Platform”), you agree to comply with these Terms. If you do not agree, please refrain from using the Platform.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing, browsing, or using the Platform, you represent that you are at least 18 years old and have the legal authority to enter into this agreement. Your use of the Platform signifies your acceptance of these Terms and any future updates or changes.</p>

            <h2>2. Scope of Services</h2>
            <p>The Platform connects green energy producers and consumers, facilitating the buying, selling, and trading of sustainable energy products. The Platform does not own or manage the products sold but acts as a mediator in transactions.</p>

            <h2>3. User Registration</h2>
            <p>To use certain features of the Platform, users may be required to register and create an account. You agree to provide accurate, current, and complete information and keep this information updated. You are solely responsible for all activities that occur under your account.</p>

            <h2>4. Marketplace Conduct</h2>
            <p>Users agree to use the Platform responsibly and lawfully. Engaging in fraudulent activities, misrepresenting products, or violating others' rights is strictly prohibited. Any breach may result in the suspension or termination of your account.</p>

            <h2>5. Intellectual Property</h2>
            <p>The content, trademarks, logos, and all material on the Platform are protected by intellectual property laws and belong to [Green Energy Marketplace Name] or its licensors. You may not use, reproduce, or distribute any material from the Platform without permission.</p>

            <h2>6. Transaction Policies</h2>
            <p><strong>Pricing:</strong> Sellers determine the pricing for their energy products, and the Platform is not responsible for setting or controlling prices.</p>
            <p><strong>Payment:</strong> Payments are processed via secure third-party payment gateways, and by completing a transaction, users agree to abide by the terms of these payment providers.</p>
            <p><strong>Refunds & Cancellations:</strong> Each seller may have different refund and cancellation policies. Users are encouraged to review these before making a purchase.</p>
        </div>
    );
};

export default TermsOfService;
