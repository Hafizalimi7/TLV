import React from "react";
import "../styles/Contact.css";
import Header from "../components/Header";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import axios from "axios";

const ContactPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      contactNumber: event.target["contact-number"].value,
      source: event.target.source.value || "N/A",
      enquiry: event.target.enquiry.value,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/send-email", formData);
      if (response.status === 200) {
        alert("Your message has been sent successfully!");
        event.target.reset();
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <Header />

      <div className="contact-form-container">
        <div className="contact-hours">
          <span className="hours-text">
            Our opening hours are: <br />
            <FaCalendarAlt className="calendar-icon" /> Monday to Friday | <FaClock size={20} className="time-icon" /> 9am to 5pm (UK time)
          </span>
        </div>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          Our team is here to assist with any questions you may have. Simply complete the form below, and we'll get back to you as soon as
          possible.
        </p>
        <p className="required-fields-text">Fields marked with an * are required</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
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

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

