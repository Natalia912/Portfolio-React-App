import { Link } from "react-router-dom"
import projectsArr from "../../projectsInfo"
import "./projects.css"

function Projects() {


    const projectsEl = projectsArr.map(project => {
      return (
        <div className={`project project-${project.id}`} key={project.id}>
          <div className="project__hero">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project__info">
            <Link to={`/${project.id}`} className="project__title">{project.title}</Link>
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