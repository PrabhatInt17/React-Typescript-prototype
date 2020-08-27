import React from 'react';
import './Loading.css';

export const Loading = () => (
  <div>
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
    <h1>Once spinner disappear start scrolling</h1>
  </div>
);
