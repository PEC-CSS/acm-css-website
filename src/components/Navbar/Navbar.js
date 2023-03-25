import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import {useState} from 'react';
import firebaseConfig from '../../config/firebase-config';

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

  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [authorizedUser,setAuthorizedUser] = useState(false || sessionStorage.getItem("accessToken"));

  const items = [
    <div to={"/about"} className="navbar__nav-item" data-original="About">
      About
    </div>,
    <div to={"/branches"} className="navbar__nav-item" data-original="Branches">
      Branches
    </div>,
    <div to={"/team"} className="navbar__nav-item" data-original="Team">
      Team
    </div>,
    <div to={"/Events"} className="navbar__nav-item" data-original="Events">
      Events
    </div>,
    <div className="navbar__nav-item" data-original="Login">
    {authorizedUser ? (
      <button style={{ background: "none", border: "none", color: "#0075FF", fontWeight: "500" }} onClick={logoutUser}>
        Logout
      </button>) : (
      <button style={{ background: "none", border: "none", color: "#0075FF", fontWeight: "500" }} onClick={signInwithGoogle}>
        Login
      </button>)}
    </div>,
  ];

  function signInwithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        if(user){
          user.getIdToken().then((tkn)=>{
            sessionStorage.setItem("accessToken", tkn);
            setAuthorizedUser(true);
          })
        }
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  }
  
  function logoutUser(){
    signOut(auth).then(() => {      
      sessionStorage.clear();
      setAuthorizedUser(false);
      // window.location.replace("/");
    }).catch((error) => {
      alert(error);
    });
  }

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
