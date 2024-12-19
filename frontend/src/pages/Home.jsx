import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';  // Assuming the styles are in Home.css

const Home = () => {
  return (
    <div className="home">
      
      {/* Image Section */}
      <section className="home-image-section">
        <div className="home-image-container">
          <img 
            src="images/picture.png" 
            alt="Empower Your Health Journey" 
            className="home-rectangle-image"
          />
          <div className="home-image-overlay">
            <h1 className="home-image-text">Empower Your Health Journey</h1>
            <p className="home-image-subtext">
              Welcome to our health-focused platform, where expert knowledge meets practical application. 
              Explore research-driven insights and solutions crafted to elevate your well-being.
            </p>
            <Link to="/about" className="home-learn-more-btn">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="home-content-section">
        <div className="home-left-text">
          <p>
            Welcome to The Life Voyage, a holistic cancer support business dedicated to empowering 
            individuals on their healing journey. We provide natural, evidence-based solutions to 
            complement traditional treatments, including personalized nutrition, mindfulness, gentle 
            movement, and emotional support for overall well-being.
          </p>
        </div>
        <div className="home-right-text">
          <p>
            At The Life Voyage, we recognize that each cancer journey is unique. Our compassionate, 
            personalized approach is designed to support you every step of the way—whether you’re 
            looking to strengthen your immune system, enhance your quality of life, or find balance during treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
