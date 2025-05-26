

import "./about.css";

const About = () => {
  return (
    <div className="container-me"> 

     <div className="header-me">
      <h2>About Me</h2>
     </div>


     <div className="content-me">
       <div className="image-holder">
        <img src="src\assets\profile.jpg" alt="" />          
        </div>
       <div className="about-me">
        <p>Hi, My name is Alexander James Ian J. Fernandez, currently studying as a 3rd year college student in Cavite State University (Bacoor Campus). I'm a Computer Science student with a focus on web development. I have a strong foundation in programming languages such as Java, Python, and JavaScript, and I'm proficient in using frameworks like React and Node.js.
          I am a very positive person. I always smile even if there is a problem because for me, being positive can make big changes not just by on yourself but to the people around you.
          In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying updated with the latest trends in web development.
        </p>
        
        </div> 

        <div className="realme">
          <h2>Me</h2>
       

        <p>When I'm not in school, I was only in our house and sometimes if friends invite me somewhere i will go but if not i always stay at home.
        When I have a free time sometimes I play online games or watch a movie. I don't have a talent like singing and dancing but sometimes I write poetry.
      I When I was in highschool I was a fan of rap until now, when I have a free time I watch Rap Battles. So I think this is the reason why I write words with rhymes and deep meaning.
      Also, I want to be one of them. This is me when I was not in school. </p>
       </div>




<div className="header-hobbies">
  
<h2>Hobbies</h2>

       
          <div className="hobby-items">
          <img src="src\assets\game.jpg" alt="" />
          <img src="src\assets\listen.jpg" alt="" />
          <img src="src\assets\movie.jpg" alt="" />
          <img src="src\assets\write.jpg" alt="" />
       
        </div>
      </div>


      <div className="title-works">
        <h2>My Works</h2>
      </div>

      <div className="works">

        <img src="src\assets\iba.png" alt="" />
        <img src="src\assets\pagkakataon.png" alt="" />
        <img src="src\assets\panaginip.png" alt="" />
        <img src="src\assets\panahon.png" alt="" />
        <img src="src\assets\teledaan.png" alt="" />
        <img src="src\assets\unan.png" alt="" />

      </div>

      

     </div>

    </div>
  );
};

export default About;
