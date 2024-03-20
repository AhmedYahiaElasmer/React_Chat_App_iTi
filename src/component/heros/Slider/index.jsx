import React, { useState } from 'react';
import './slider.css'; // Assume you have a CSS file for styling

const Slide = ({ imageUrl }) => {
  const [rotation, setRotation] = useState(0);
  const [paragraph, setParagraph] = useState('First paragraph'); // Initial paragraph text

  const rotateRight = () => {
    setRotation(rotation + 120);
    setParagraph('Next paragraph'); // Change the paragraph text
  };

  const rotateLeft = () => {
    setRotation(rotation - 120);
    setParagraph('Previous paragraph'); // Change the paragraph text
  };

  return (
    <div className="slider-container">
      <div className="slider-image" style={{ transform: `rotate(${rotation}deg)` }}>
        <img src={imageUrl} alt="Slider" />
      </div>
      <div className="slider-buttons">
        <button onClick={rotateLeft}>Left</button>
        <button onClick={rotateRight}>Right</button>
      </div>
      <p className="slider-paragraph">{paragraph}</p>
    </div>
  );
};

export default Slide;
