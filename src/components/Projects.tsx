import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import projectsArr from "../projectsArr"

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="blue">projects</span>
          </h1>
          <ul className="project__list">
            {projectsArr.map((project, index) => (
              <li className="project" key={index}>
                <div className="project__wrapper">
                  <img
                    src={project.screenshot}
                    className="project__img"
                    alt=""
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">
                      {project.title}
                    </h3>
                    <h4 className="project__description--sub-title">
                      {project.languages}
                    </h4>
                    <p className="project__description--para">
                      {project.description}
                    </p>
                    <div className="project__description--links">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="project__description--link"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      )}
                      <a
                        href={project.projectLink}
                        className="project__description--link"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
