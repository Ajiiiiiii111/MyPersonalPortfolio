import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
     
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/project">Projects</Link>
        <Link to="/challenge">Challenges</Link>
        <Link to="/future-plans">Future Plans</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>

    
  );
};

export default Navbar;
