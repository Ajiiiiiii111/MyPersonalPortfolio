import "./skill.css";

const Skill = () => {
  return (
    <div className="container-skill">

      <div className="header-skill">

        <h2>Skill</h2>
      </div>

      <p>Thru the years as a computer science student in Cavite State University Bacoor Campus, I learn or accomplish to gain skills that I can use to build projects and in my future work. </p>


<h1>Frontend Development</h1> 

  <div className="skill">
           
        <div className="skill-item">
          <h2>HTML</h2>
          <img src="src/assets/html.jpg" alt="HTML" />
        </div>

        <div className="skill-item">
          <h2>CSS</h2>
          <img src="src/assets/css.jpg" alt="CSS" />
        </div>

        <div className="skill-item">
          <h2>Java</h2>
          <img src="src/assets/java.jpg" alt="JavaScript" />
        </div>

        <div className="skill-item">
          <h2>JavaScript</h2>
          <img src="src/assets/js.jpg" alt="JavaScript" />
        </div>

        <div className="skill-item">
          <h2>Python</h2>
          <img src="src/assets/py.jpg" alt="React" />
        </div>

        <div className="skill-item">
          <h2>React</h2>
          <img src="src/assets/react.jpg" alt="React" />
        </div>

        <div className="skill-item">
          <h2>Node.js</h2>
          <img src="src/assets/node.jpg" alt="Node.js" />
        </div>
      </div>

      <div className="certificate">
      <div className="certi">
        <h2>Certificates</h2>
        <p>Dean's Lister</p>
        <img src="src/assets/cert.png" alt="Dean's Lister" />

        <h2>Other is ongoing.</h2>

        </div>



      </div>
      </div>
   
  );
};

export default Skill;