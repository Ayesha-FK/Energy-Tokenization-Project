import React from 'react';
import './DetailedInfo.css';

const DetailedInfo = () => {
  return (
    <div className="detailed-info">
      <h1>About GreenSync</h1>
      <p>
        GreenSync is an innovative platform that connects consumers, businesses, and energy providers, enabling everyone to access and trade clean, renewable energy.
        Our mission is to make sustainable energy accessible, affordable, and impactful for individuals and businesses alike.
      </p>
      
      <section className="section">
        <h2>Our Mission</h2>
        <p>
          We envision a world where everyone can contribute to a greener future. Through GreenSync, we empower users to actively reduce their carbon footprint
          and support renewable energy sources by connecting with a community that shares the same values.
        </p>
      </section>
      
      <section className="section">
        <h2>How It Works</h2>
        <p>
          Our platform provides a marketplace where you can trade energy credits, monitor your energy consumption, and connect with renewable energy providers.
          By leveraging our technology, we make it easy for you to make sustainable choices that benefit both your wallet and the planet.
        </p>
      </section>

      <section className="section">
        <h2>Why Choose GreenSync?</h2>
        <ul>
          <li><strong>Transparency:</strong> Real-time data on your energy usage and savings</li>
          <li><strong>Community-Driven:</strong> Connect with like-minded users who are passionate about sustainability</li>
          <li><strong>Impactful:</strong> Directly contribute to reducing global emissions</li>
        </ul>
      </section>

    </div>
  );
};

export default DetailedInfo;
