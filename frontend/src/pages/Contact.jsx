import React from 'react';
import '../styles/Contact.css';  // Make sure to style the form
import Header from '../components/Header';
import { FaCalendarAlt, FaClock } from 'react-icons/fa'; // Calendar icon from react-icons

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      
      <div className="contact-form-container">
        {/* Opening Hours Section with Calendar Icon */}
        <div className="contact-hours">
          {/* <FaCalendarAlt className="calendar-icon" /> */}
          
          <span className="hours-text">
            
            Our opening hours are: <br/><FaCalendarAlt className="calendar-icon" />Monday to Friday | <FaClock size={20} className="time-icon" /> 9am to 5pm (UK time)
          </span>
          
        </div>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
        Our team is here to assist with any questions you may have. 
        Simply complete the form below, and we'll get back to you as soon as possible.
        </p>

        <p className="required-fields-text">
          Fields marked with an * are required
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-email">Confirm Email *</label>
            <input type="email" id="confirm-email" name="confirm-email" required placeholder="Confirm your email" />
          </div>

          <div className="form-group">
            <label htmlFor="contact-number">Contact Number *</label>
            <input type="tel" id="contact-number" name="contact-number" required placeholder="Enter your contact number" />
          </div>

          <div className="form-group">
            <label htmlFor="source">Where did you hear about us?</label>
            <input type="text" id="source" name="source" placeholder="Tell us how you found us" />
          </div>

          <div className="form-group">
            <label htmlFor="enquiry">Enquiry *</label>
            <textarea id="enquiry" name="enquiry" required placeholder="Your message" rows="4"></textarea>
          </div>

          {/* Include Google reCAPTCHA */}
          <div className="form-group recaptcha">
            <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
