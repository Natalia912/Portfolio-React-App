import HTML from "../../assets/icons/html5.svg"
import CSS from "../../assets/icons/css.svg"
import Git from "../../assets/icons/square-git.svg"
import Javascript from "../../assets/icons/square-js.svg"
import ReactJS from "../../assets/icons/react.svg"
import Sass from "../../assets/icons/sass.svg"
import Typescript from "../../assets/icons/typescript.svg"

import "./about.css"

function About() {
  return ( 
    <section className="about container" id="about">
      <h2 className="section__title">About me</h2>
      <div className="section__box">
        <figure className="about__pic">
          <img 
            srcSet="/aboutDesktop.jpg 400w, /aboutmobile.jpg 200w" 
            sizes="(min-width:768px) 400px, 200px"
            alt="rainy days with me and my laptop"
          />
        </figure>
        <div className="about__content">
          <p className="text about__paragraph">Hi there! I'm Natalia, and I'm a frontend developer. I started my coding journey in April of 2022 and have spent every day learning and coding since then. In September 2022, my hobby turned into my first job in tech. </p>
          <p className="text about__paragraph">I love learning and solving tasks of different complexities. I always strive to do my best while making projects. I'm persistent and responsible, and, most importantly, I love what I'm doing.</p>
          <div className="about__stack">
            <p className="text">My current stack:</p>
            <ul className="stack-list">
              <li className="stack-item">
                <img src={HTML} alt="HTML logo" width="36" height="36"/>
                <span>HTML</span>
              </li>
              <li className="stack-item">
                <img src={CSS} alt="CSS logo" width="36" height="36"/>
                <span>CSS</span>
              </li>
              <li className="stack-item">
                <img src={Javascript} alt="Javascript logo" width="36" height="36"/>
                <span>Javascript</span>
              </li>
              <li className="stack-item">
                <img src={ReactJS} alt="React JS logo" width="36" height="36"/>
                <span>React JS</span>
              </li>
              <li className="stack-item">
                <img src={Sass} alt="Sass logo" width="36" height="36"/>
                <span>Sass</span>
              </li>
              <li className="stack-item">
                <img src={Git} alt="Git logo" width="36" height="36"/>
                <span>Git</span>
              </li>
              <li className="stack-item">
                <img src={Typescript} alt="Typescript logo" width="32" height="32"/>
                <span>Typescript</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
   );
}

export default About;