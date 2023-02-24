import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

import items from "./items";

const navLinkAnimation = (e) => {
  const currentChild = e.target.childNodes[0];
  const originalHeader = currentChild.dataset.original;

  if (originalHeader === "Login") return;

  const getRandomCharacter = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return characters[Math.floor(Math.random() * 26)];
  };

  let start = 0;
  const interval = setInterval(() => {
    try {
      currentChild.innerText = currentChild.innerText
        .split("")
        .map((letter, index) => {
          if (index < start) return originalHeader[index];
          else if (index < 1) return getRandomCharacter();
          else return getRandomCharacter().toLowerCase();
        })
        .join("");

      if (start >= originalHeader.length) {
        clearInterval(interval);
        currentChild.innerText = originalHeader;
      }

      start += 1 / 2;
    } catch (e) {
      currentChild.innerText = originalHeader;
    }
  }, 30);
};

const returnLinkAnimation = (e) => {
  try {
    const currentChild = e.target.childNodes[0];
    currentChild.innerText = currentChild.dataset.original;
  } catch (e) {}
};

const NavigationMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">pecacm</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {items.map((item, key) => (
              <Nav.Link
                key={key}
                onMouseEnter={navLinkAnimation}
                onMouseLeave={returnLinkAnimation}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
