import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import 'font-awesome/css/font-awesome.min.css';

// Footer component
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (type) => {
    if (type === 'privacy') {
      setModalContent(privacyPolicy);
    } else if (type === 'disclaimer') {
      setModalContent(disclaimer);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const privacyPolicy = `
    <h2>Privacy Policy</h2>
    <p><strong>Effective Date:</strong> 26/12/2024</p>
    <p>At The Life Voyage, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you engage with our services, website, and other resources. By using our website or services, you agree to the practices described in this policy.</p>
    <h3>1. Information We Collect</h3>
    <p><strong>a. Personal Information</strong><br />
    When you voluntarily provide it, we may collect personal details such as:<br />
    - Name<br />
    - Email address<br />
    - Phone number<br />
    - Billing or payment information<br />
    - Any other details you share through forms or communication with us</p>
    <p><strong>b. Non-Personal Information</strong><br />
    We may automatically collect certain information when you interact with our website, including:<br />
    - IP address<br />
    - Browser type and version<br />
    - Pages viewed on our website<br />
    - Date and time of visits<br />
    - Device type</p>
    <h3>2. How We Use Your Information</h3>
    <p>We use the information we collect to:<br />
    - Provide and improve our services<br />
    - Communicate with you, including responding to inquiries and sending updates<br />
    - Process payments and transactions<br />
    - Customize your experience on our website<br />
    - Ensure compliance with legal and regulatory obligations</p>
    <p><strong>For full policy, please visit the website or contact us at Info@thelifevoyage.com.</strong></p>
  `;

  const disclaimer = `
    <h2>Disclaimer</h2>
    <p>At The Life Voyage, we are dedicated to supporting individuals on their holistic journey to well-being. However, the services, guidance, and information we provide are not intended to diagnose, treat, cure, or prevent any medical condition, including cancer. Our offerings are designed to complement—not replace—the advice and treatment provided by licensed medical professionals.</p>
    <p><strong>Important Note:</strong> Always follow the recommendations of your doctor or qualified healthcare professionals regarding your health and treatment. If you have a medical emergency, please seek immediate assistance.</p>
    <p>All content shared by The Life Voyage is protected by copyright and may not be reproduced without proper credit. Use is limited to personal, non-commercial purposes only.</p>
  `;

  return (
    <footer className="footer">
      <div className="social-media">
        {/* Social media icons */}
        <a href="https://www.instagram.com/the.life.voyage" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/people/The-life-voyage/61570073396968/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-twitter"></i> 
        </a>
      </div>

      <div className="footer-links">
        <Link to="/" className="footer-link">Home</Link> 
        <Link to="/about" className="footer-link">About</Link> 
        <Link to="/services" className="footer-link">Services</Link> 
        <Link to="/contact" className="footer-link">Contact</Link> 
      </div>

      <div className="footer-secondary-links">
        <button className="button-link" onClick={() => openModal('privacy')}>Privacy Policy</button>
        <button className="button-link" onClick={() => openModal('disclaimer')}>Disclaimer</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-content" dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}

      <div className="copyright">
        <p>© The Life Voyage, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
