import React from 'react';
import ImageSection from '../components/ImageSection';  // Import the Image Section
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Image Section */}
      <div id="home">
        <ImageSection />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="left-text">
          <p>
            Welcome to The Life Voyage, a holistic cancer support business dedicated to empowering 
            individuals on their healing journey. We provide natural, evidence-based solutions to 
            complement traditional treatments, including personalized nutrition, mindfulness, gentle 
            movement, and emotional support for overall well-being.
          </p>
        </div>
        <div className="right-text">
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


 