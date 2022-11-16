import React from 'react';
import './index.scss';

function Navbar() {
  return (
    <div id="navbar">
      <div class="nav-logo">
        <h1>LOGO</h1>
      </div>
      <div class="nav-right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar