import Navbar from "./Navbar"
import Header from "./Header"
import Modal from "./Modal"
import Shapes from "./Shapes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

interface LandingProps {
  toggleModal: () => void
}

const Landing = ({ toggleModal }: LandingProps) => {
  const scaleFactor = 1 / 20

  const moveBackground = (event: MouseEvent): void => {
    const shapes = document.querySelectorAll(
      ".shape"
    ) as unknown as HTMLCollectionOf<HTMLElement>
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; i++) {
      const isOdd = i % 2 !== 0
      const boolInt = isOdd ? -1 : 1
      shapes[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px)`
    }
  }

  return (
    <section
      id="landing-page"
      onMouseMove={() => moveBackground(event as MouseEvent)}
    >
      <Navbar toggleModal={toggleModal} />
      <Header toggleModal={toggleModal} />
      <a href="#">
        <button className="mail__btn click" onClick={toggleModal}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </a>
      <a href="#projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>
      <Modal toggleModal={toggleModal} />
      <Shapes />
    </section>
  )
}

export default Landing
