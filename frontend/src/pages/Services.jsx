import React from "react";
import "../styles/Service.css"; // Add the CSS for this page
import { Link } from "react-router-dom"; // For navigation between pages

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>

      {/* Package 1: Cancer Care Package */}
      <div className="package-container">
        <h2>Cancer Care Package</h2>
        <p>
          For cancer patients at any stage, from just diagnosed to life beyond cancer, this package includes:
        </p>
        <ul>
          <li>90 min initial appointment – fact gathering</li>
          <li>2 - 45min follow-up sessions (3-4 weeks apart)</li>
          <li>30 min final session</li>
          <li>Customized recommendation plan after initial appointment</li>
          <li>Test & supplement recommendations</li>
          <li>Revisions to the plan if needed (within three months)</li>
          <li>Email & text support as needed</li>
        </ul>
        <p><strong>Price: £800</strong></p>
        <div className="package-buttons">
          <Link to="https://calendly.com/your-link" target="_blank">
            <button className="btn-book-call">Book a Call</button>
          </Link>
          <button className="btn-buy-now">Buy Now</button>
        </div>
      </div>

      {/* Package 2: Returning Customer Package */}
      <div className="package-container">
        <h2>Returning Customer Package</h2>
        <p>This package is the same as the Cancer Care Package but at a discounted price for returning customers.</p>
        <p><strong>Discounted Price: £650</strong></p>
        <div className="package-buttons">
          <Link to="https://calendly.com/your-link" target="_blank">
            <button className="btn-book-call">Book a Call</button>
          </Link>
          <button className="btn-buy-now">Buy Now</button>
        </div>
      </div>

      {/* Package 3: Cancer Prevention Package */}
      <div className="package-container">
        <h2>Cancer Prevention Package: "Empower & Prevent"</h2>
        <p>
          A 6-month online coaching program focused on sustainable lifestyle changes to support cancer prevention. The program includes:
        </p>
        <ul>
          <li>Month 1: Revamping the Pantry</li>
          <li>Month 2: Healthier Meals and Hydration</li>
          <li>Month 3: Incorporating Low-Intensity Exercise</li>
          <li>Month 4: Supplementation and Strength</li>
          <li>Month 5: Integration and Planning</li>
          <li>Month 6: Household and Personal Care Detox</li>
        </ul>
        <p><strong>Price for 1-1: £720 (6 months)</strong></p>
        <p><strong>Price for Group (max 5 people): £480 (6 months)</strong></p>
        <div className="package-buttons">
          <Link to="https://calendly.com/your-link" target="_blank">
            <button className="btn-book-call">Book a Call</button>
          </Link>
          <button className="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;