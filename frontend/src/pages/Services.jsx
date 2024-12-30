import React, { useState } from "react";
import "../styles/Services.css";
import Header from "../components/Header";

const ServicesPage = () => {
  const [showDetails, setShowDetails] = useState({
    package1: false,
    package2: false,
    package3: false,
  });

  const toggleDetails = (packageName) => {
    setShowDetails((prev) => ({
      ...prev,
      [packageName]: !prev[packageName],
    }));
  };

  return (
    <div className="services-page">
      <Header />
      
      {/* Background Image Section */}
      <section className="services-background">
  <div className="services-background-overlay">
    <h1 className="service-image-text">Our Services</h1>
    <p className="service-image-subtext">
      We offer personalized, compassionate care tailored to your needs. 
      Book a free 15-minute consultation to discuss how we can support your journey.
    </p>
    <a href="https://calendly.com/tanyafeuillet/30min" target="_blank" rel="noopener noreferrer">
      <button className="book-now-btn">Book Now</button>
    </a>
  </div>
</section>

      {/* Service Cards Section */}
      <div className="services-container">
  {/* Service Card 1 */}
  <div className="service-card">
    <div className="service-image-container">
      <img src="images/d.png" alt="Cancer Care" className="service-image" />
      <div className="service-image-overlay">
        <h2 className="service-title">Comprehensive Cancer Care</h2>
        <p className="service-price"><strong>Price:</strong> £800</p>
        <p className="service-description">Tailored support for individuals navigating life with cancer.</p>
        <button onClick={() => toggleDetails("package1")} className="service-toggle-button">
          {showDetails.package1 ? "Show Less" : "Show More"}
        </button>
        {showDetails.package1 && (
          <div className="service-details">
            <ul className="service-details-list">
              <li>90 min initial appointment - fact gathering</li>
              <li>2 x 45 min follow-up sessions</li>
              <li>30 min final session</li>
              <li>Customized recommendation plan</li>
            </ul>
            <p className="service-payment-plan"><strong>Payment Plan:</strong> £400 upfront, £200/month for 2 months</p>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Service Card 2 */}
  <div className="service-card">
    <div className="service-image-container">
      <img src="images/glass_lemon_water.png" alt="Returning Customers" className="service-image" />
      <div className="service-image-overlay">
        <h2 className="service-title">Returning Customers Package</h2>
        <p className="service-price"><strong>Contact us for pricing details.</strong></p>
        <p className="service-description">Exclusive discounted package for returning clients.</p>
        <button onClick={() => toggleDetails("package2")} className="service-toggle-button">
          {showDetails.package2 ? "Show Less" : "Show More"}
        </button>
        {showDetails.package2 && (
          <div className="service-details">
            <p>This package offers the same comprehensive care at a reduced rate.</p>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Service Card 3 */}
  <div className="service-card">
    <div className="service-image-container">
      <img src="images/a.png" alt="Holistic Prevention" className="service-image" />
      <div className="service-image-overlay">
        <h2 className="service-title">Holistic Cancer Prevention Program</h2>
        <p className="service-price"><strong>Price:</strong> £720 (1-on-1) / £480 (Group)</p>
        <p className="service-description">Sustainable lifestyle changes with our 6-month coaching program.</p>
        <button onClick={() => toggleDetails("package3")} className="service-toggle-button">
          {showDetails.package3 ? "Show Less" : "Show More"}
        </button>
        {showDetails.package3 && (
          <div className="service-details">
            <ul className="service-details-list">
              <li>Month 1: Revamping the Pantry</li>
              <li>Month 2: Healthier Meals & Hydration</li>
              <li>Month 3: Low-Intensity Exercise</li>
              <li>Month 4: Supplementation & Strength</li>
              <li>Month 5: Integration & Planning</li>
              <li>Month 6: Household & Personal Care Detox</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ServicesPage;
