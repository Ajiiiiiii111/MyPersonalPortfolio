import React from "react";
import "./About.css"; // You can merge your about.css and skill.css into this file or keep them separate

const challenges = [
  { id: 1, title: "Hackathon", description: "Participate in our annual coding hackathon and win exciting prizes!" },
  { id: 2, title: "Bug Bounty", description: "Find bugs in our projects and get rewarded for your contributions." },
  { id: 3, title: "Open Source Sprint", description: "Contribute to open source and enhance your skills with real-world projects." },
  { id: 4, title: "Open Source Sprint", description: "Contribute to open source and enhance your skills with real-world projects." }
];

const futurePlans = [
  "Launch a mobile app for challenges",
  "Add community leaderboard and rewards",
  "Integrate social sharing features",
  "Offer personalized challenge recommendations",
];


const About = () => {
  return (
    <div>
      <div className="container-me-skill">

        {/* About Section */}
        <section className="container-me"> 
          <div className="header-me">
            <h2>About Me</h2>
          </div>

          <div className="content-me">
            <div className="image-holder">
              <img src="src/assets/profile.jpg" alt="Profile" />          
            </div>

            <div className="about-me">
              <p>
                Hi, My name is Alexander James Ian J. Fernandez, currently studying as a 3rd year college student in Cavite State University (Bacoor Campus). 
                I'm a Computer Science student with a focus on web development. I have a strong foundation in programming languages such as Java, Python, and JavaScript, 
                and I'm proficient in using frameworks like React and Node.js.
                I am a very positive person. I always smile even if there is a problem because for me, being positive can make big changes not just by on yourself but to the people around you.
                In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying updated with the latest trends in web development.
              </p>
            </div> 

            <div className="realme">
              <h2>Me</h2>
              <p>
                When I'm not in school, I was only in our house and sometimes if friends invite me somewhere I will go but if not I always stay at home.
                When I have free time sometimes I play online games or watch a movie. I don't have a talent like singing and dancing but sometimes I write poetry.
                When I was in highschool I was a fan of rap until now, when I have free time I watch Rap Battles. So I think this is the reason why I write words with rhymes and deep meaning.
                Also, I want to be one of them. This is me when I was not in school. 
              </p>
            </div>

            <div className="header-hobbies">
              <h2>Hobbies</h2>
              <div className="hobby-items">
                <img src="src/assets/game.jpg" alt="Gaming" />
                <img src="src/assets/listen.jpg" alt="Listening Music" />
                <img src="src/assets/movie.jpg" alt="Watching Movies" />
                <img src="src/assets/write.jpg" alt="Writing" />
              </div>
            </div>

            <div className="title-works">
              <h2>My Works</h2>
            </div>

            <div className="works">
              <img src="src/assets/iba.png" alt="Work 1" />
              <img src="src/assets/pagkakataon.png" alt="Work 2" />
              <img src="src/assets/panaginip.png" alt="Work 3" />
              <img src="src/assets/panahon.png" alt="Work 4" />
              <img src="src/assets/teledaan.png" alt="Work 5" />
              <img src="src/assets/unan.png" alt="Work 6" />
            </div>
          </div>
        </section>

        {/* Skill Section */}
        <section className="container-skill">
          <div className="header-skill">
            <h2>Skill</h2>
          </div>

          <p>
            Thru the years as a computer science student in Cavite State University Bacoor Campus, I learn or accomplish to gain skills that I can use to build projects and in my future work.
          </p>

          <h1>Frontend Development</h1> 

          <div className="skill">
            <div className="skill-item">
              <h2>HTML</h2>
              <img src="src/assets/html4.png" alt="HTML" />
            </div>

            <div className="skill-item">
              <h2>CSS</h2>
              <img src="src/assets/CSS2.jpg" alt="CSS" />
            </div>

            <div className="skill-item">
              <h2>Java</h2>
              <img src="src/assets/java.jpg" alt="Java" />
            </div>

            <div className="skill-item">
              <h2>JavaScript</h2>
              <img src="src/assets/JS2.jpg" alt="JavaScript" />
            </div>

            <div className="skill-item">
              <h2>Python</h2>
              <img src="src/assets/py.jpg" alt="Python" />
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
        </section>

      </div>

      {/* Projects Section */}
      <div className="container-project">
        <div className="header">
          <h2>Projects:</h2>
          <p>
            The things that I learn when the first time I start this course as a student is polish and use to create projects for school or personal to make a good portfolio.
          </p>
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

{/* Challenge Section */}
      <section className="challenge-section">
        <h2>Our Challenges</h2>
        <div className="challenge-grid">
          {challenges.map(({ id, title, description }) => (
            <div key={id} className="challenge-card">
              <h3>{title}</h3>
              <p>{description}</p>
              <button>Join Now</button>
            </div>
          ))}
        </div>
      </section>
  




      {/* Future Plans Section */}
      <section className="future-plans">
        <h2>Future Plans</h2>
        <ul>
          {futurePlans.map((plan, idx) => (
            <li key={idx} className="plan-item">
              {plan}
            </li>
          ))}
        </ul>
      </section>


























      
    </div>




  );
};




export default About;
