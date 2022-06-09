import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navigation">
      <div className='navbar-link-div'><Link className="navbar-link" to="/sell">SELL A DRAGON</Link></div>
      <div className='navbar-link-div'><Link className="navbar-link" to="/search">SEARCH FOR A DRAGON</Link></div>
    </nav>
  );
}

export default Navbar;