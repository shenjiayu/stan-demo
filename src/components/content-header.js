import React from 'react';
import '../App.css';

const ContentHeader = ({ pageName }) => (
  <div className="app-content-header">
    <div className="app-content-text">
      Popular { pageName }
    </div>
  </div>
);

export default ContentHeader;