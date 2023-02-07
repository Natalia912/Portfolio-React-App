import { useParams } from "react-router-dom"

import Carousel from "../components/Carousel/Carousel"
import projectsArr from "../projectsInfo"

import "../projectsPage.css"

function ProjectPage() {

  const { id } = useParams()
  const projectEl = projectsArr.find(project => project.id === id)


  return ( 
    <section className="projects-page container">
      <Carousel>
        {projectEl.imageFull.map(image => (
            <img src={image} alt={projectEl.title} className="project__image"/>
        ))}
      </Carousel>
      <div className="projects-page__info">
        <h1 className="projects-page__title">{projectEl.title}</h1>
        <p className="projects-page__stack">{projectEl.stack}</p>
        <p className="projects-page__description">{projectEl.description}</p>
        <a href={projectEl.url} className="project__visit"  target="_blank" rel="noopener noreferrer">Visit Website</a>
      </div>
    </section>
   );
}

export default ProjectPage;