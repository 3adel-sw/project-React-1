import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo (1).png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />

      {menuOpen === false && mobile === true ? (
        <div
          className="bars"
          onClick={() => setMenuOpen(true)}
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="header"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="programs" spy={true} smooth={true} duration={500}>
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="reasons" spy={true} smooth={true} duration={500}>
              Why Us
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="plans" spy={true} smooth={true} duration={500}>
              Plans
            </Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="testimonials" spy={true} smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
