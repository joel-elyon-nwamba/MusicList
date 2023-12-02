import React from 'react';
import logo from '../logo.jpg'
import "../Welcome.css"
function Welcome() {
  return(
    <div className="flex justify-between items-center pt-5">
      <h1 className="text-center text-red-800 font-mono">Welcome to Album Finder of Artist</h1>
      <p className="text-xs">Now please note though you able to find an album of an artist you ae not yet cabpable of listening to their song or add them to your own playList. But it's coming soon.</p>
      <img className="w-20 rounded-full" src={logo} alt="logo life"/>
      
    </div>
  )
}

export default Welcome;