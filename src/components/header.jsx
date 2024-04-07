import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logoYellow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function MyNavbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState("false");
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateAtiveLink = (value) => {
    setActiveLink(value);
  };

  const handleBrandClick = () => {
    // Scroll to the "home" section
    const homeSection = document.getElementById("accueil");
    if (homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop,
        behavior: "smooth",
      });
    }
    // Update active link
    onUpdateAtiveLink("accueil");
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" onClick={handleBrandClick}>
          <img src={logo} alt="Logo" className="logo-with-margin" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="me-auto">
            <Nav.Link
              href="#accueil"
              className={
                activeLink === "accueil" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateAtiveLink("accueil")}
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              href="#carte"
              className={
                activeLink === "carte" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateAtiveLink("skills")}
            >
              Notre carte
            </Nav.Link>
            <Nav.Link
              href="#apropos"
              className={
                activeLink === "apropos" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateAtiveLink("projects")}
            >
              À propos
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateAtiveLink("contact")}
            >
              Contactez-nous
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


