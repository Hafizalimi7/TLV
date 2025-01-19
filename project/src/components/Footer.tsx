import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { images } from '../assets';
import FootModal from './FootModal';

export default function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modaltitle, setModaltitle] = useState("");
  
  // Open the modal with different content
  const handleOpenModal = (content:any, title:any) => {
    setModalContent(content);
    setModaltitle(title);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center">
            <img 
              src={images.logo} 
              alt="The Life Voyage Logo" 
              className="h-16 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-[#2B4C7E]">The Life Voyage</span>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-500 hover:text-[#2B4C7E]">Home</Link>
            <Link to="/about" className="text-gray-500 hover:text-[#2B4C7E]">About</Link>
            <Link to="/services" className="text-gray-500 hover:text-[#2B4C7E]">Services</Link>
            <Link to="/contact" className="text-gray-500 hover:text-[#2B4C7E]">Contact</Link>
            <Link to="/terms" className="text-gray-500 hover:text-[#2B4C7E]">Terms and Conditions</Link>
            <button 
            onClick={() => handleOpenModal(privacyPolicy, "Privacy")}
            className="text-gray-500 hover:text-[#2B4C7E]">Privacy Policy</button>
            <button 
              onClick={() => handleOpenModal(disclaimer, "Disclaimer")}
            className="text-gray-500 hover:text-[#2B4C7E]">Disclaimer</button>
          </div>
          <FootModal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} title={modaltitle} />

          {/* <div className="footer-secondary-links">
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
      )} */}

          <div className="flex space-x-6">
            <a href="https://www.instagram.com/the.life.voyage" className="text-gray-400 hover:text-[#2B4C7E] transition transform hover:scale-110">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://web.facebook.com/people/The-life-voyage/61570073396968/" className="text-gray-400 hover:text-[#2B4C7E] transition transform hover:scale-110">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-[#2B4C7E] transition transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com" className="text-gray-400 hover:text-[#2B4C7E] transition transform hover:scale-110">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400">© {new Date().getFullYear()} The Life Voyage, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}