import React from 'react';
import "./Footer.css"; // Import Footer.css
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer"> {/* Make sure the class name matches */}
      <div className="footer-left">
        <p className="copyright">&copy; Talup 2023. All rights reserved</p>
      </div>
      <div className="footer-right">
        <Link to="/terms" className="footer-link">Terms and Conditions</Link> {/* Add appropriate class name */}
    
        <Link to="/privacy" className="footer-link">Privacy Policy</Link> {/* Add appropriate class name */}
      </div>
    </footer>
  );
}

export default Footer;
