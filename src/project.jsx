import "./project.css";

const Project = () => {
  return (
    
    <div className="container-project">

      <div className="header">
        <h2>Projects:</h2>

              <p>The things that I learn when the first time I start this course as a student is polish and use to create projects for school or personal to make a good portfolio.  </p>

      </div>

      

      <div className="content">
        <div className="proj-con">
          <div className="project-item">
            <h2 className="title-proj">Cvsu Website</h2>
            <p>This Project is make a website for our school.</p>
            <img src="src/assets/cvsuweb.png" alt="Cvsu Website" />
          </div>

          <div className="project-item">
            <h2 className="title-proj">Zyntax</h2>
            <p>This Project is make a It Company Website.</p>
            <img src="src/assets/zyntax.jpg" alt="Zyntax" />
          </div>

          <div className="project-item">
            <h2 className="title-proj">Zen Store</h2>
            <p>This project is Inventory Management System</p>
            <img src="src/assets/zen.jpg" alt="Zen Store" />
          </div>

          <div className="project-item">
            <h2 className="title-proj">Michiel's Beauty</h2>
             <p>This project is Inventory Management System</p>
            <img src="src/assets/mcbeauty.jpg" alt="Michiel's Beauty" />
          </div>

           <div className="project-item">
            <h2 className="title-proj">Enrollment System</h2>
            <p>This project is for our school enrollment System</p>
            <img src="src/assets/enrollment.png" alt="Enrollment" />
          </div>

          <div className="project-item">
            <h2 className="title-proj">Finding NeedMo</h2>
            <p>This project is a a repository for teachers and students</p>
            <img src="src/assets/finding.png" alt="NeedMo" />
          </div>

           <div className="project-item">
            <h2 className="title-proj">Case Reporting System</h2>
            <p>This project is a Case reporting in school violation</p>
            <img src="src/assets/report.png" alt="Reporting" />
          </div>

           


        </div>
      </div>
    </div>
  );
};

export default Project;
