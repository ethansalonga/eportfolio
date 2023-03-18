import { useState } from "react"
import Landing from "./components/Landing"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    if (modalOpen) {
      setModalOpen(false)
      return document.body.classList.remove("modal--open")
    }
    setModalOpen(true)
    document.body.classList.add("modal--open")
  }

  return (
    <>
      <Landing toggleModal={toggleModal} />
      <Projects />
      <Footer toggleModal={toggleModal} />
    </>
  )
}

export default App
