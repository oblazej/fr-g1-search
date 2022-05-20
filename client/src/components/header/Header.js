import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div id="header">
      <h1 id="header-title">
      <Link to="/">Flight Rising G1 Search Tool</Link></h1>
      <p id="header-description">This site is made for Gen 1 dragons lovers, who search for a specific dream dragon or look for profit.</p>
    </div>
  );
}

export default Header;