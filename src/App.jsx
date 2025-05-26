import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import About from "./about";
import Skills from "./skill";
import Project from "./project";
import Contact from "./contact";

// import other pages like Skills, Projects, etc.

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


