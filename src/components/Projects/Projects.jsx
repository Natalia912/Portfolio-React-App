import { useState } from "react"
import "./projects.css"

function Projects() {

    const projectsArr = [
      {
        id: 1,
        image: "adoptimist.png",
        title: "Adoption Connect Technologies",
        stack: "HTML & CSS",
        description: "My goal was to make a fast and responsive 4-page website. It was my first commercial project, and I am proud of the work I've done there.",
        url: "https://adoptionconnecttech.com/index.html",
      },
      {
        id: 2,
        image: "decrowd.jpg",
        title: "Redesign implementation of the DeCrowd web app",
        stack: "React JS",
        description: "For this project I was provided with Figma files of the new design and the old version of the app. It was my first React JS project and the first time I used Metamask. I really enjoyed making it and learned a lot along the way!",
        url: "http://www.decrowdfund.com/",
      },
      {
        id: 3,
        image: "quizapp.png",
        title: "Quiz App",
        stack: "React JS & API",
        description: "It's my little personal project I made following a React JS course. It's a quiz app made with React JS and powered by Trivia API.",
        url: "https://effortless-pastelito-220f6a.netlify.app/",
        github: ""
      }
    ]

    const projectsEl = projectsArr.map(project => {
      const [isInfoShowed, setIsInfoShowed] = useState(false)
      return (
        <div className={`project project-${project.id}`} key={project.id}>
          <div 
            className="project__hero"
            style={{display: isInfoShowed ? "none" : "block"}}
            // onMouseEnter={() => setIsInfoShowed(true)} 
            // onMouseLeave={() => setIsInfoShowed(false)}
          >
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project__info">
            <p className="project__title">{project.title}</p>
            <p className="project__stack">{project.stack}</p>
            <p className="project__description">{project.description}</p>
            <a href={project.url} className="project__visit"  target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </div>
      )
    })

    return ( 
      <section className="projects container" id="projects">
        <h2 className="section__title">Projects</h2>
        <div className="projects-container">
          {projectsEl}
        </div>
      </section> );
}

export default Projects;