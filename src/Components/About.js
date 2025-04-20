
import React from  "react";
import './About.css'

const About = () => {
    return (
        <div className="about-container">
             <div>
        <h1 id="me">About me:</h1>
        <img src="./images1/Leonard.jpg" alt="Leonard" height={200} width={200}></img>
       <p>Hi, I am Leonard Spencer a dedicated web developer(Specializing in frontend majorly). Am passionate about coding and creating user friendly websites. My goal is to use technology to solve everyday problems.</p>
       <p>I am self-taught, and still continuing to learn more everyday.Through my learning experience I have gained skills in frameworks like HTML, CSS, Bootstrap,Tailwind,JavaScrypt, Nodejs, React, Figma among others.<br/>Through my experience I believe that I can deliver the best to any of my clients. Feel free to reach out.</p>
       <img src="./images1/robot.jpg" alt="Book" height="150px" width="200px"></img>
       <p>It's all about Tech.</p>
        </div>
        </div>
       
    );
};
export default About;