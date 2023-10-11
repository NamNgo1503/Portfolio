import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation()
  let bgColor;
  switch(location.pathname) {
    case '/projects':
      bgColor = '#11100e';  
      break;
    default:
      bgColor = 'transparent';  
  }
  return (
    <div className="footer" style={{ backgroundColor: bgColor}}>
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/namsonngo/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
      </div>
      <p> &copy; 2023</p>
    </div>
  );
}

export default Footer;
