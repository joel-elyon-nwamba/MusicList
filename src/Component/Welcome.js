import React from 'react';
import logo from '../logo.jpg'
import "../Welcome.css"
function Welcome() {
  return(
    <div className="flex justify-between items-center pt-5">
      <h1 className="text-center text-red-800 font-mono">Welcome to Music Influence</h1>
      <img className="w-20 rounded-full" src={logo} alt="logo life"/>
      
    </div>
  )
}

export default Welcome;