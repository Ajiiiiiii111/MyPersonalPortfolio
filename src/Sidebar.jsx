import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
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

export default Sidebar;
