

import "./about.css";

const About = () => {
  return (
    <div className="container"> 

     <div className="header">
      <h2>About Me</h2>
     </div>


     <div className="content">
       <div className="image-holder">
        <img src="./assets/profile.jpg" alt="Profile" />          
        </div>
       <div className="about-me">
        <p>Hi, My name is Alexander James Ian J. Fernandez, currently studying as a 3rd year college student in Cavite State University (Bacoor Campus).</p>
        <p>I'm a Computer Science student with a focus on web development and software engineering. I have a strong foundation in programming languages such as Java, Python, and JavaScript, and I'm proficient in using frameworks like React and Node.js.</p>
        <p>I'm a passionate web developer with a strong interest in creating dynamic and user-friendly web applications. I have experience in various programming languages and frameworks, and I'm always eager to learn new technologies.</p>
        <p>In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying updated with the latest trends in web development.</p>
        </div> 
     </div>

    </div>
  );
};

export default About;
