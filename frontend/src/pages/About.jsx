import React from "react";
import "../styles/About.css"; // Ensure to add appropriate styles
import Header from "../components/Header";

const AboutPage = () => {
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
        </div>
      </section>

      {/* Content Section */}
      <div className="about-content-section">
        <section className="about-intro">
          <h2>My Journey</h2>
          <p>
            My name is Tanya, and my journey to becoming a healthcare provider has been deeply shaped by my personal connection to cancer. Coming from a family with a significant history of cancer, I have seen firsthand the impact that cancer has on individuals and their families. This experience has fueled my passion to support and guide people who are navigating the challenges of cancer care.
          </p>
          <p>
            My mission is to create an environment where my patients feel heard, respected, and empowered to take control of their health. I believe in fostering open communication and making sure that every individual has the tools and knowledge they need to make informed decisions about their care.
          </p>
        </section>

        <section className="about-education">
          <h2>Educational Background and Professional Training</h2>
          <p>
            <strong>BSc in Radiotherapy and Oncology</strong><br />
            I earned my Bachelor’s degree in Radiotherapy and Oncology from St. George’s University of London in 2023. This program provided me with a solid foundation in the science and clinical practices of cancer treatment. During my three years of study, I completed placements at the Royal Marsden Hospital in Chelsea, a world-renowned institution specializing in cancer care. These placements allowed me to gain hands-on experience in patient care, treatment delivery, and the latest advances in oncology.
          </p>
          <p>
            <strong>MSc in Cancer and Clinical Oncology</strong><br />
            In 2024, I completed a Master’s degree in Cancer and Clinical Oncology at Queen Mary University of London. This advanced program deepened my understanding of cancer biology, treatment modalities, and clinical research. My dissertation focused on the efficacy of dual-targeted inhibitors in overcoming resistance in HER-2 positive breast cancer, a project that honed my research skills and contributed to the growing body of knowledge in targeted cancer therapies.
          </p>
          <p>
            <strong>Certification in Holistic Cancer Care</strong><br />
            Alongside my Master’s studies, I completed a holistic cancer care course with the American Institute of Holistic Oncology in 2024. This program provided me with the tools to integrate complementary therapies into cancer care, focusing on nutrition, stress management, and patient-centered approaches. This certification complements my academic and clinical background, enabling me to offer a well-rounded, integrative approach to cancer care.
          </p>
        </section>

        <section className="about-certificate">
          <h2>My Certification</h2>
          <p>Below is a picture of my certification in Holistic Cancer Care:</p>
          <div className="about-certificate-image">
            <img src="images/certificate.jpg" alt="Certificate" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

