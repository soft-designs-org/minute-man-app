//Imports
import React from "react";
//Includes
import fbIcon from "../../assets/img/social-media-icons/white/facebook-icon.png";
import twitterIcon from "../../assets/img/social-media-icons/white/twitter-icon.png";
import igIcon from "../../assets/img/social-media-icons/white/instagram-icon.png";

const Footer = () => {
  return (
    <div className="page-footer text-center">
      <div className="social-items">
        <a href="/">
          <img className="social-link" src={fbIcon} alt="facebook-icon" />
        </a>
        <a href="/">
          <img  className="social-link" src={twitterIcon} alt="twitter-icon"/>
        </a>
        <a href="/">
          <img className="social-link" src={igIcon} alt="instagram-icon"/>
        </a>
      </div>
      <small>Copyright &copy; 2020, Minute Man. All Rights Reserved.</small>
    </div>
  );
};

export default Footer;
