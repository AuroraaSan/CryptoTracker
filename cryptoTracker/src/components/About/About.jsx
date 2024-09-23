import React from 'react';
import './About.css'; // Ensure this is the correct path for the CSS file

const About = () => {
  return (
    <div className="about">
      <h2>About CryptoTracker</h2>
      <p>
        Welcome to CryptoTracker, your ultimate companion for navigating the exciting world of cryptocurrencies! Our platform offers real-time tracking of cryptocurrency prices, market trends, and valuable insights to help you make informed investment decisions.
      </p>
      
      <h3>What We Offer</h3>
      <div className="offers">
        <div className="offer-card">
          <h4>Real-Time Data</h4>
          <p>Access live prices and market data for a wide range of cryptocurrencies.</p>
        </div>
        <div className="offer-card">
          <h4>Comprehensive Analytics</h4>
          <p>Analyze price changes, market caps, and trading volumes to identify opportunities.</p>
        </div>
        <div className="offer-card">
          <h4>User-Friendly Interface</h4>
          <p>Our intuitive design ensures that both beginners and experienced traders can navigate easily.</p>
        </div>
      </div>

      <h3>Why Choose Us?</h3>
      <p>
        At CryptoTracker, we are committed to providing the best user experience. Our platform is built with the latest technologies to ensure speed, reliability, and security. We source data from reputable exchanges, ensuring that you receive accurate and up-to-date information.
      </p>

      <h3>Contact Us</h3>
      <p>
        If you have any questions or feedback, feel free to reach out to us at <a href="mailto:arwaorbany2001@gmail.com">support@cryptotracker.com</a>. We would love to hear from you!
      </p>
    </div>
  );
};

export default About;
