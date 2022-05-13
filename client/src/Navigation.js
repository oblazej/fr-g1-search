import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
  return (
       <nav className="navigation">
        <Link to="/sell">SELL A DRAGON</Link> |{" "}
        <Link to="/search">SEARCH FOR A DRAGON</Link>
      </nav>
  );
}

export default Navigation;
