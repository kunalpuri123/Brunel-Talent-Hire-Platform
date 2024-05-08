import React from 'react';
import { useNavigate } from "react-router";
import './NavbarStyles.css'
import logo from './NavbarLogo/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const onProjects = () => {
    navigate(`/projects`)
  }

  return (
 
    <div className='navbar'>
  
    <nav className='navbar_items'>
      <div className='navbar_logo'>
        <img src={logo} alt="Logo" />

      </div>
      <div className='navbar_button'>
        <button onClick={onProjects} className='get_project_button' style={{cursor: 'pointer'}}>Get Projects</button>
        <button className='onboard_button' style={{cursor: 'pointer'}}>Onboard Talent</button>
      </div>
        
        

    </nav>
    </div>
    
  )
}

export default Navbar