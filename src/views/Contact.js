import React from "react";
import contactImage from "../images/contact-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <main className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <div className="contact-image">
          <img src={contactImage} alt="Contact image" />
        </div>
        <div className="contact-details">
          <p>
            Bonjour ! Je m'appelle Ayoub Mouhssine et je serais ravi de vous
            rencontrer. Que vous ayez un projet en tête, que vous souhaitiez
            discuter de développement web, ou simplement échanger quelques mots,
            n'hésitez pas à me contacter !
          </p>
          <ul>
            <li>
              <a href="mailto:ayoub.mouhssine00@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                ayoub.mouhssine00@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ayoubMouhssine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> github.com/ayoubMouhssine
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ayoubMouhssine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />{" "}
                linkedin.com/in/ayoubMouhssine
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Lot riyad 351 rue 3 n 63
              av mer rouge rte sefrou fes
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +212 6 32 84 96 37
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Contact;
