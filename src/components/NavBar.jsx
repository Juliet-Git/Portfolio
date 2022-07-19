import { useEffect, useState } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar= () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
         setScrolled(true)
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  const sendEmail = () => {
    const link =
      "mailto:julietmaingi1995@gmaiil.com"

    window.location.href = link;
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="text-white">JM</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="nabar-toggler-icon">
            <BiMenuAltRight className="text-white fs-1" />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home"
                  ? "active navbar-link py-3"
                  : "navbar-link py-3"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills"
                  ? "active navbar-link py-3"
                  : "navbar-link py-3"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skils
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects"
                  ? "active navbar-link py-3"
                  : "navbar-link py-3"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/julietmaingi/">
                <i>
                  <GrLinkedinOption />
                </i>
              </a>
              <a href="https://discordapp.com/users/825257136752689152">
                <i>
                  <SiDiscord />
                </i>
              </a>
              <a href="https://github.com/Juliet-Git">
                <i>
                  <BsGithub />
                </i>
              </a>
            </div>
            <button className="vvd" type="button" onClick={sendEmail}>
              <span>Contatta</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
