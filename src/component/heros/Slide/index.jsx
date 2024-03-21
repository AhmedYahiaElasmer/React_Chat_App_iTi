import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './index.css'

const Slide = ({ imageUrl, paragraphs }) => {
  const [rotation, setRotation] = useState(0)
  const [index, setIndex] = useState(0)

  const rotateRight = () => {
    setRotation(rotation + 120)
    setIndex((index + 1) % paragraphs.length)
  }

  const rotateLeft = () => {
    setRotation(rotation - 120)
    setIndex((index - 1 + paragraphs.length) % paragraphs.length)
  }

  return (
    <div className="slider-container">
      <div className="slider-image" style={{ transform: `rotate(${rotation}deg)` }}>
        <img src={imageUrl} alt="Slider" />
      </div>
      <div className="slider-buttons">
        <button className="slider-button" onClick={rotateLeft}>
          <FiChevronLeft />
        </button>
        <button className="slider-button" onClick={rotateRight}>
          <FiChevronRight />
        </button>
      </div>
      <p className="slider-paragraph">{paragraphs[index]}</p>
    </div>
  )
}

export default Slide