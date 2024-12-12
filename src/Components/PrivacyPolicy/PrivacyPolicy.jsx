// PrivacyPolicy.js
import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="privacy-container">
            <h1>Privacy Policy</h1>
            <p className="effective-date">Last Updated: <strong>10/27/2024</strong></p>

            <p>[Green Energy Marketplace Name] (“we,” “us,” or “our”) values your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and disclose your personal data when you access or use our platform (“Platform”).</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information to improve our services and to provide a seamless marketplace experience. The types of information we may collect include:</p>
            <ul>
                <li><strong>Personal Information:</strong> Name, email address, contact information, payment information, and other details provided during account registration.</li>
                <li><strong>Transaction Data:</strong> Records of purchases, sales, and other transactions conducted on the Platform.</li>
                <li><strong>Usage Data:</strong> Information about how you use our Platform, including IP addresses, browser type, device information, and usage patterns.</li>
                <li><strong>Communication Data:</strong> Content of your communications with us, including inquiries and customer support requests.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information for various purposes, including:</p>
            <ul>
                <li><strong>Platform Functionality:</strong> To provide and maintain the Platform, process transactions, and manage your account.</li>
                <li><strong>Communication:</strong> To respond to inquiries, provide support, and send updates or notifications about the Platform.</li>
                <li><strong>Marketing and Analytics:</strong> To analyze Platform usage, improve our services, and send you promotional information if you’ve opted in.</li>
                <li><strong>Compliance and Protection:</strong> To comply with legal obligations, protect against fraud, and enforce our terms of service.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
                <li><strong>With Service Providers:</strong> We may share information with third-party service providers who help us operate the Platform, such as payment processors, hosting providers, and analytics services.</li>
                <li><strong>Legal Requirements:</strong> If required by law, we may disclose information to comply with legal processes, respond to claims, or protect the rights, property, or safety of our users.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, we may transfer your information to the acquiring entity.</li>
            </ul>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to improve your experience on the Platform. These technologies help us remember your preferences, understand usage patterns, and enhance functionality. You can control cookies through your browser settings, but disabling them may affect certain Platform features.</p>

            <h2>5. Data Security</h2>
            <p>We implement reasonable security measures to protect your data from unauthorized access, alteration, or destruction. However, no system is completely secure, and we cannot guarantee the absolute security of your information.</p>

            <h2>6. Your Privacy Rights</h2>
            <p>Depending on your jurisdiction, you may have certain rights regarding your personal information, including the right to:</p>
            <ul>
                <li>Access, correct, or delete your information.</li>
                <li>Restrict or object to certain processing activities.</li>
                <li>Withdraw consent where processing is based on consent.</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided below.</p>

            <h2>7. Third-Party Links</h2>
            <p>Our Platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We recommend reviewing their privacy policies to understand how they collect, use, and share your information.</p>

            <h2>8. Retention of Data</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required by law.</p>

            <h2>9. Children’s Privacy</h2>
            <p>The Platform is not intended for children under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected such data, we will take steps to delete it.</p>

            <h2>10. Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date. Your continued use of the Platform following any changes signifies acceptance of those changes.</p>
        </div>
    );
};

export default PrivacyPolicy;
