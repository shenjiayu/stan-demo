import React from 'react';
import '../App.css';

const Footer = () => (
  <footer className="app-footer-container">
    <p className="app-footer-info">
      Home&nbsp;&nbsp;|&nbsp;&nbsp;Terms and Conditions&nbsp;&nbsp;|&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Collection Statement&nbsp;&nbsp;|&nbsp;&nbsp;Help&nbsp;&nbsp;|&nbsp;&nbsp;Manage Account
    </p>
    <small style={{color: "#fff"}}>Copyright © 2016 DEMO Streaming. All Rights Reserved.</small>
    <div className="app-footer-social-container">
      <div className="app-footer-social-logo-container">
        <img src={require('../assets/social/facebook-white.svg')} height="30" alt="facebook" className="app-footer-social-logo" />
        <img src={require('../assets/social/twitter-white.svg')} height="30" alt="twitter" className="app-footer-social-logo" />
        <img src={require('../assets/social/instagram-white.svg')} height="30" alt="instagram" className="app-footer-social-logo" />
      </div>
      <div className="app-footer-social-store-container">
        <img src={require('../assets/store/app-store.svg')} height="30" alt="appstore" className="app-footer-social-store" />
        <img src={require('../assets/store/play-store.svg')} height="30" alt="playstore" className="app-footer-social-store" />
        <img src={require('../assets/store/windows-store.svg')} height="30" alt="windowsstore" className="app-footer-social-store" />
      </div>
    </div>
  </footer>
);

export default Footer;