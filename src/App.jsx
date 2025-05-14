import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import About from "./about";
import Skills from "./skill";
// import other pages like Skills, Projects, etc.

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/about" element={<About />} />
            {/* Add your other routes here */}
            {<Route path="/skills" element={<Skills />} />}
            {/* <Route path="/projects" element={<Projects />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


