import { useState } from "react"
import PersonalLogo from "../assets/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons"

interface NavbarProps {
  toggleModal: () => void
}

const Navbar = ({ toggleModal }: NavbarProps) => {
  const [contrastToggle, setContrastToggle] = useState(false)

  const toggleContrast = () => {
    setContrastToggle((prevState) => !prevState)
    if (!contrastToggle) {
      document.body.classList.add("dark-theme")
    } else {
      document.body.classList.remove("dark-theme")
    }
  }

  return (
    <nav>
      <figure>
        <img id="personal-logo" src={PersonalLogo} alt="" />
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link" onClick={toggleModal}>
          <a
            href="#"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            About
          </a>
        </li>
        <li className="nav__link">
          <a
            href="#projects"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Projects
          </a>
        </li>
        <li className="nav__link" onClick={toggleModal}>
          <a
            href="#"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Contact
          </a>
        </li>
        <li className="nav__link click" onClick={toggleContrast}>
          <FontAwesomeIcon
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
            icon={faCircleHalfStroke}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
