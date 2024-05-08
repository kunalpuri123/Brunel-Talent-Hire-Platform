import React from 'react';
import './BoxComponent.css'; // Make sure to import the CSS file
import fourty from './40_percent.png'

const BoxComponent = () => {
  return (
    <div className="box-container">
      <div className="box-content">
        <img className="box-image" src={fourty} alt="40 Percent" />
        <div className="box-text">
         <p>Achieved reduction in project execution time by optimising team availability</p> 
        </div>
      </div>
    </div>
  );
}

export default BoxComponent;
