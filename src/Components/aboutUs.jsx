import React, { useState } from 'react';
import '../styles/aboutUs.css';

const AboutPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [
    'h&m tee.jpeg',
    'h&m tee.jpeg',
    // Add more image URLs here
  ];

  return (
    <div className="about-page">
      {/* Your other content here */}
      
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}
    </div>
  );
};

export default AboutPage;
