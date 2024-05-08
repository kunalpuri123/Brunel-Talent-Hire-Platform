import React, { useState } from 'react';
import './Carousel.css'; // Import CSS file

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-item"
        style={{
          cursor: 'pointer',
          backgroundColor: activeIndex === 0 ? '#2DA950' : hoverIndex === 0 ? '#CAD0CB' : '#E4E3E3'
        }}
        onClick={() => handleItemClick(0)}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="carousel-item"
        style={{
          cursor: 'pointer',
          backgroundColor: activeIndex === 1 ? '#2DA950' : hoverIndex === 1 ? '#CAD0CB' : '#E4E3E3'
        }}
        onClick={() => handleItemClick(1)}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="carousel-item"
        style={{
          cursor: 'pointer',
          backgroundColor: activeIndex === 2 ? '#2DA950' : hoverIndex === 2 ? '#CAD0CB' : '#E4E3E3'
        }}
        onClick={() => handleItemClick(2)}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      ></div>
    </div>
  );
};

export default Carousel;
