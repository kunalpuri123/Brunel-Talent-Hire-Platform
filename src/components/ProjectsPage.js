import React, { useState, useEffect } from 'react';
import "./ProjectsPage.css";
import { MdError } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo from './NavbarLogo/logo.png';
import accept from './accept.png'



const ProjectsPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true); // Track if email is valid
  const [countdown, setCountdown] = useState(5); // Initial countdown value

  useEffect(() => {
    let redirectTimer;
    if (submitted) {
      // Redirect to homepage after countdown
      redirectTimer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(redirectTimer); // Clear timer when countdown reaches 1
            window.location.href = "/"; // Redirect to homepage
          }
          return prevCountdown - 1;
        });
      }, 1000); // Update countdown every second
    }
    // Clear timer on component unmount or when the user navigates away
    return () => clearInterval(redirectTimer);
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email is valid
    if (!isValidEmailFormat(email)) {
      setIsValidEmail(false);
      return;
    }
    // Simulate form submission by setting submitted to true
    setSubmitted(true);
  };

  // Function to validate email format
  const isValidEmailFormat = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className='body-con'>
      <div className='navbar1'>
        <nav className='navbar_items1'>
          <div className='navbar_logo1'>
            <img src={logo} alt="Logo" />
          </div>
        </nav>
      </div>
      {!submitted && ( // Only render close icon if form is not submitted
        <div className="top-right-container">
          <IoCloseCircleOutline
            className="close-icon"
            style={{
              width: "32px",
              height: "32px",
              gap: "13.33px",
              opacity: "1",
              position: "absolute",
              top: "calc(80px + 20px)", // Adjusted top position
              right: "60px",
              cursor: "pointer",
            }}
            onClick={() => window.location.href = "/"}
          />
        </div>
      )}
      <div className="registration-form">
        {!submitted && ( // Hide registration heading and subheading if form is submitted
          <>
            <div className="registration-heading">
              <p>Registration Form</p>
            </div>
            <div className="registration-subheading">
              <p>Start your success <br/> journey here!</p>
            </div>
          </>
        )}
        {submitted ? (
          <div className="success-message">
            <img src={accept} className="check-circle-icon" alt='accept'/>

            <div className="success-heading">
              <p>Success Submitted</p>
            </div>
            <div className="success-content">
              <p className="success-congo">Congratulations</p>
              <p className="success-text">Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates.</p>
            </div>
            <div className="redirect-message">
  <p className="normal-text">
    Redirecting you to Homepage in <span className="span-text">{countdown} Second{countdown !== 1 ? 's' : ''}</span> 
  </p>
</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-input ${!isValidEmail && "invalid-input"}`}
              />
              {!isValidEmail && <p className="error-message"><MdError />Enter a valid email address</p>}
            </div>
            <button type="submit" className="submit-button" disabled={!email.trim()}>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
