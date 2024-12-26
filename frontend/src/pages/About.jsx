import React, { useState, useRef } from "react";
import "../styles/About.css"; // Ensure to add appropriate styles
import Header from "../components/Header";

const AboutPage = () => {
  const contentSectionRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const scrollToContent = () => {
    contentSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="about">
      <Header />
      
      {/* About Image Section */}
      <section className="about-image-section">
        <div className="about-image-container">
          <img 
            src="images/d.png" 
            alt="My Journey" 
            className="about-rectangle-image"
          />
          <div className="about-image-overlay">
            <h1 className="about-image-text">About Me</h1>
            <p className="about-image-subtext">
              A holistic approach to cancer care shaped by personal experience, 
              professional training, and a passion for empowering patients.
            </p>
          </div>
          <div className="scroll-down-arrow" onClick={scrollToContent}>
            &#x25BC; {/* Unicode for down arrow */}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="about-content-section" ref={contentSectionRef}>
        <section className="about-intro">
          <h2>My Journey</h2>
          <p>
            My name is Tanya, and my journey to becoming a healthcare provider has been deeply shaped by my personal connection to cancer. Coming from a family with a significant history of cancer, I have seen firsthand the impact that cancer has on individuals and their families. This experience has fueled my passion to support and guide people who are navigating the challenges of cancer care.
          </p>
        </section>

        <section className="about-education">
          <h2>
            BSc in Radiotherapy and Oncology 
            <span 
              className="cert-icon" 
              title="View Certificate" 
              onClick={() => openModal("images/bsc.jpg")}
            >
              📄 {/* Example of an icon using Unicode */}
            </span>
          </h2>
          <p>
            I earned my Bachelor’s degree in Radiotherapy and Oncology from St. George’s University of London in 2023. This program provided me with a solid foundation in the science and clinical practices of cancer treatment. During my three years of study, I completed placements at the Royal Marsden Hospital in Chelsea, a world-renowned institution specializing in cancer care.
          </p>

          <h2>
            MSc in Cancer and Clinical Oncology 
            <span 
              className="cert-icon" 
              title="View Certificate" 
              onClick={() => openModal("images/msc.jpg")}
            >
              📄 {/* Example of an icon using Unicode */}
            </span>
          </h2>
          <p>
            In 2024, I completed a Master’s degree in Cancer and Clinical Oncology at Queen Mary University of London. This advanced program deepened my understanding of cancer biology, treatment modalities, and clinical research. My dissertation focused on the efficacy of dual-targeted inhibitors in overcoming resistance in HER-2 positive breast cancer, a project that honed my research skills and contributed to the growing body of knowledge in targeted cancer therapies.
          </p>

          <h2>Certified Practitioner
          <span 
              className="cert-icon" 
              title="View Certificate" 
              onClick={() => openModal("images/.jpg")}
            >
              📄 {/* Example of an icon using Unicode */}
            </span>
          </h2>
        </section>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={modalImage} alt="Certificate" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
