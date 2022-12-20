import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

import "./intro.css"

function Intro() {
  return ( 
  <section className="intro container">
    <div className="intro__container">
      <h1 className="intro__title">
        <span className="notMoving">I am</span> 
        <TypeAnimation 
          sequence={["Natalia Tretiakova", 2000, "Frontend Developer", 2000, "glad you're here :)", 2000, " "]} wrapper="span"
          cursor={false}
          repeat={Infinity}
          className="typingAnimation"
          
        />
      </h1>
    </div>
  </section>
  );
}

export default Intro;