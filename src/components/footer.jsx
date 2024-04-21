import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/logoYellow.png";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function FooterComponenet() {
  return (
    <>
      <section id="footer" className="footerCss">
        <ul className="container">
          <li>
            <a href="">
              <img src={logo} alt="Logo" />
            </a>
          </li>
          <li>
            <p>© Lezzet GRill 74</p>
          </li>
          <li>
            <a href="https://www.instagram.com/lezzetgrill74?igsh=MWRsdWw0dGd3bWY5Mw%3D%3D&utm_source=qr">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
