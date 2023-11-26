import React from 'react';
import logo from './logo.jpg'
import "./Welcome.css";
function Welcome() {
  return(
    <div>
      <h1>Welcome to Music Influence</h1>
      <img className="img-logo" src={logo} alt="logo life"/>
      
    </div>
  )
}

export default Welcome;