import { use, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { useCookies } from "react-cookie";
export function Navbar() {
  const navigation = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isHide, setHide] = useState(true);
  const [color, setColor] = useState(false);
  const [isNav, setNav] = useState(false);
  function toggler() {
    setHide((prev) => !prev);
    setColor((prev) => !prev);
  }

  function navToggler() {
    setNav((prev) => !prev);
  }

  function login() {
    setCookie("login", "true");
    navigation("/login");
  }

  return (
    <div className="hritik">
      <header className="navBar">
        <span className="title">
          MERNA-<span className="sub">D</span>ev
        </span>
        <span className="bi bi-list list-menu" onClick={navToggler}></span>
        <ul className={`${isNav ? "slipdown" : "slipup"} nav-menu`}>
          <Link to="about" smooth={true} duration={1000}>
            About
          </Link>
          <Link to="education" smooth={true} duration={1000}>
            Education
          </Link>
          <Link to="skill" smooth={true} duration={1000}>
            Skill's
          </Link>
          <Link to="project" smooth={true} duration={1000}>
            Project
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
          <li
            className={`${color ? "white" : "red-color"} bi bi-caret-down `}
            onClick={toggler}
          ></li>
          <i class="bi bi-x cross-sign" onClick={navToggler}></i>
        </ul>
        <button
          className={`${isHide ? "hide" : "show"} login-btn`}
          onClick={login}
        >
          <Link to="login" smooth={true} duration={500}   onClick={login}>
            Login
          </Link>
        </button>
      </header>
    </div>
  );
}
