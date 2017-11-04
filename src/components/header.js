import React from 'react';
import '../App.css';

const Header = () => (
  <header className="app-header-container">
    <div className="app-header-left-title">
      DEMO Streaming
    </div>
    <div className="app-header-right-container">
      <a href="" className="app-header-login">Log in</a>
      <button className="app-header-free-trial">Start your free trial</button>
    </div>
  </header>
);

export default Header;