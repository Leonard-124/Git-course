
import React from "react";
import { Link } from "react-router-dom";

//import "../styles/styles.css";

const Projects = () => {
    
  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on.</p>

      <h3>Click to view one of them</h3>

      <div> <p>Check it out: <Link to="/Calculator">Calculator</Link></p>
      <h4>A simple calculator that is user-friendly and easy to use.</h4>
      <p>Technologies: HTML, CSS, XML,JS, REACT</p>
       </div>

      <div>  <p>Check it out: <Link to="/Map">GoogleMaps realtime</Link></p>
      <h4>A sleek app displaying real-time location. Anywhere you  are we can find you.</h4>
      <p>Technologies: HTML, CSS,REACT and JS API's</p>

       </div>
     
      <div>
      <p>Check it out: <Link to="/App">Simple Ecommerce Website</Link></p>
      <h4>A simple E-commerce website for start-up businesses that is easy to use and manage by both customers and the owner.</h4>
      <p>Technologies: HTML, CSS,REACT,JS and Figma.</p>
      </div>
     
      <div>
      <p>Check it out: <Link to="/MindGame">A MindGame</Link></p>
      <h4>A simple mind-game that is easy to play. Users click cards to flip them over. They match pairs of symbols to win.</h4>
      <p>Technologies: HTML, CSS,REACT,JS and Figma.</p>
      </div>
     
      <div>
      <p>Check it out <Link to="/ToDoList">My To-Do list</Link></p>
      <h4>A simple To-Do-List that helps you to manage your day to day activities in a much efficient way</h4>
      <p>Technologies: HTML, CSS,REACT,JS and Figma.</p>
      <h4>Note:many more projects are still being built and will soon be posted.</h4>
      </div>
    </div>
  );
};

export default Projects;
