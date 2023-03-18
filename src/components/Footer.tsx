import PersonalLogo from "../assets/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import Resume from "../assets/resume.pdf"

interface FooterProps {
  toggleModal: () => void
}

const Footer = ({ toggleModal }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <a href="#" className="footer__anchor">
            <figure className="footer__logo">
              <img className="footer__logo--img" src={PersonalLogo} alt="" />
            </figure>
            <span className="footer__logo--popper">
              Top
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </a>
          <div className="footer__social--list">
            <a
              href="https://github.com/ethansalonga"
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ethan-salonga/"
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              onClick={toggleModal}
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Contact
            </a>
            <a
              href={Resume}
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; Ethan Salonga {currentYear}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
