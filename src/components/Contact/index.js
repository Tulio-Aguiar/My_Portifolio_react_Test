import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const refForm = useRef()
  useEffect(() => {
    //return
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_9e8twwh",
        "template_phskwiv",
        refForm.current,
        "N9V1P6YTuSYRNxc2c"
      )
      .then(
        () => {
          alert("Message successfully sent!")
          window.location.reload(false)
        },
        () => {
          alert("Failed to send the message. Please try again")
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Túlio Aguiar,
          <br />
          Deutschland
          <br />
          LuisenStrasse 11, PeterHaus,78464
          <br />
          Konstanz,
          <span>tullioaxe@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[47.674264, 9.189227]} zoom={13}>
            <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[47.674264, 9.189227]}>
              <Popup>Túlio Lives here, come over for a cup off coffe :) </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
