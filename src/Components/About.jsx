import React from "react";
import "./About.css";
import AnimatedSentence from "./AnimatedSentence";

function About() {
  return (
    <div className="about">
      <div>
        <AnimatedSentence>
          <p className="aboutsentence" style={{marginBottom:0}}>
          I'm a passionate frontend developer specializing in React js and Next js. With a keen eye for user experience and a knack for crafting elegant solutions, I thrive on turning ideas into dynamic, interactive web applications. Let's connect and build something amazing together!
          </p>
        </AnimatedSentence>
      </div>
    </div>
  );
}

export default About;
