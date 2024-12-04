import React from 'react';
import '../styles/Services.css'; 
import Header from "../components/Header";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Header />
      <div className="services-intro">
        <h1>Our Services</h1>
        <p>Explore our personalized packages and programs designed to support your health and well-being.</p>
      </div>

      {/* Service Cards */}
      <div className="services-container">
        {/* Package 1 */}
        <div className="service-card">
          <h2>Comprehensive Cancer Care Package</h2>
          <p>For individuals navigating life with cancer, tailored for every stage of the journey.</p>
          <ul>
            <li>90 min initial appointment - fact gathering</li>
            <li>2 x 45 min follow-up sessions (spaced 3-4 weeks apart)</li>
            <li>30 min final session</li>
            <li>Customized recommendation plan after the initial appointment</li>
            <li>Test & supplement recommendations</li>
            <li>Plan revisions as needed within three months</li>
            <li>Email & text support as required</li>
          </ul>
          <p><strong>Standard Price:</strong> £800</p>
          <p><strong>Payment Plan:</strong> £400 upfront, followed by £200/month for 2 months</p>
        </div>

        {/* Package 2 */}
        <div className="service-card">
          <h2>Returning Customers Package</h2>
          <p>For returning clients, enjoy the same comprehensive package at a discounted rate.</p>
          <p><strong>Contact us for pricing details.</strong></p>
        </div>

        {/* Package 3 */}
        <div className="service-card">
          <h2>Holistic Cancer Prevention Program: "Empower & Prevent"</h2>
          <p>Adopt sustainable lifestyle changes with our 6-month online coaching program.</p>
          <div className="program-timeline">
            <div className="program-month">
              <h3>Month 1</h3>
              <p><strong>Revamping the Pantry</strong></p>
              <p>Replace unhealthy foods with nutrient-dense alternatives.</p>
            </div>
            <div className="program-month">
              <h3>Month 2</h3>
              <p><strong>Healthier Meals & Hydration</strong></p>
              <p>Focus on balanced meals and proper hydration.</p>
            </div>
            <div className="program-month">
              <h3>Month 3</h3>
              <p><strong>Low-Intensity Exercise</strong></p>
              <p>Introduce sustainable physical activities.</p>
            </div>
            <div className="program-month">
              <h3>Month 4</h3>
              <p><strong>Supplementation & Strength</strong></p>
              <p>Incorporate evidence-based supplements and moderate exercise.</p>
            </div>
            <div className="program-month">
              <h3>Month 5</h3>
              <p><strong>Integration & Planning</strong></p>
              <p>Combine elements into a cohesive plan.</p>
            </div>
            <div className="program-month">
              <h3>Month 6</h3>
              <p><strong>Household & Personal Care Detox</strong></p>
              <p>Transition to non-toxic household and beauty products.</p>
            </div>
          </div>
          <p><strong>1-on-1 Pricing:</strong> £720 for 6 months</p>
          <p><strong>Group Pricing:</strong> £480 for 6 months (max 5 people)</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;


