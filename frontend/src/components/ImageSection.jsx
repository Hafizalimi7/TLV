import React from 'react';
import './ImageSection.css';

const ImageSection = () => {
    return (
        <section className="image-section">
            <div className="image-container">
                <img 
                    src="images/picture.png" 
                    alt="Empower Your Health Journey" 
                    className="rectangle-image"
                />
                <div className="image-overlay">
                    <h1>Empower Your Health Journey</h1>
                </div>
            </div>
        </section>
    );
};

export default ImageSection;
