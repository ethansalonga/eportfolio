import { useRef, FormEvent } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons"
import emailjs from "@emailjs/browser"

interface ModalProps {
  toggleModal: () => void
}

const Modal = ({ toggleModal }: ModalProps) => {
  const form = useRef(null)
  const contact = (e: FormEvent): void => {
    e.preventDefault()

    const loading = document.querySelector(".modal__overlay--loading")!
    const success = document.querySelector(".modal__overlay--success")!
    loading.classList.add("modal__overlay--visible")

    emailjs
      .sendForm(
        "service_ixruf82",
        "template_hdrdoj8",
        e.target as HTMLFormElement,
        "user_dAU3g6AZMCL24O4sHSoQu"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList.add("modal__overlay--visible")
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
          "The e-mail service is temporarily unavailable. Please contact me directly at ethan@ethansalonga.dev!"
        )
      })
  }

  return (
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">
          Here's a bit about me.
        </h3>
        <h4 className="modal__sub-title modal__sub-title--about">
          Frontend Developer
        </h4>
        <p className="modal__para">
          I'm a <b className="blue">professional frontend developer</b> with a
          strong passion for developing websites with{" "}
          <b className="blue">great user experiences.</b>
        </p>
        <p className="modal__para">
          I have experience building and maintaining production-level frontend software,
          and continue to work on exciting new projects, websites, and applications every day.
          Feel free to check out some of my work below!
        </p>

        <div className="modal__languages">
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
              alt=""
            />
            <span className="language__name">HTML</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
              alt=""
            />
            <span className="language__name">CSS</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
              alt=""
            />
            <span className="language__name">TypeScript</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
              alt=""
            />
            <span className="language__name">React</span>
          </figure>
        </div>
      </div>
      <div className="modal__half modal__contact">
        <FontAwesomeIcon
          className="modal__exit click"
          icon={faTimes}
          onClick={toggleModal}
        />
        <h3 className="modal__title modal__title--contact">
          Let's have a chat!
        </h3>
        <h4 className="modal__sub-title modal__sub-title--contact">
          I'm currently open to new opportunities.
        </h4>
        <form id="contact__form" ref={form} onSubmit={contact}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input className="input" name="user_name" type="text" required />
          </div>
          <div className="form__item">
            <label className="form__item--label">E-mail</label>
            <input className="input" name="user_email" type="email" required />
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea className="input" name="message" required></textarea>
          </div>
          <button type="submit" id="contact__submit" className="form__submit">
            Send it my way
          </button>
        </form>
        <div className="modal__overlay modal__overlay--loading">
          <FontAwesomeIcon icon={faSpinner} />
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking with you soon.
        </div>
      </div>
    </div>
  )
}

export default Modal
