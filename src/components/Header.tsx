import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import Resume from "../assets/resume.pdf"

interface HeaderProps {
  toggleModal: () => void
}

const Header = ({ toggleModal }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title blue">I'm Ethan.</h1>
        <p className="header__para">
          I'm a professional <b className="blue">Frontend Developer</b> with a
          strong passion for building web applications with great user
          experiences.
          <br />
          Here's a bit more{" "}
          <b className="blue click" onClick={toggleModal}>
            about me
          </b>
          .
        </p>
        <div className="social__list">
          <a
            href="https://www.linkedin.com/in/ethan-salonga/"
            target="_blank"
            className="social__link click"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com/ethansalonga"
            target="_blank"
            className="social__link click"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={Resume} target="_blank" className="social__link click">
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
