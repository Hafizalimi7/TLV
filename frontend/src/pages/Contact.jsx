import React from "react";
import "../styles/Contact.css"; // Add appropriate styling for this form
import Header from "../components/Header";


const ContactPage = () => {
 
  return (
    <div className="contact-page">
      <Header/>
      <div className="form-container">
        <h2>Book Your Free 15-Minute Consultation</h2>
        <p>Complete the form below, and we’ll get in touch to schedule your session.</p>
        <form className="consultation-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message or Questions:</label>
            <textarea id="message" name="message" placeholder="How can we help?" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
      <div className="contact-image-container">
        <img src="images/bg.jpg" alt="Consultation" className="consultation-image" />
      </div>
    </div>
  );
};

export default ContactPage;
