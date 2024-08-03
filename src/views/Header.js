import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h3>
          <Link to="/">Ayoub Mouhssine</Link>
        </h3>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
          <li>
            <Link to="/experience">Expérience</Link>
          </li>
          <li>
            <Link to="/projets">Projets</Link>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <ul className="icons">
          <li>
            <a
              href="https://www.facebook.com/ayoub.mouhssine.75"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://github.com/AyoubMouhssine" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayoubMouhssine"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
