import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <div className="logo">PT STUDIOS</div>
          <ul className="nav-items">
            <Link
              to="Home"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
            <Link
              to="About"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT
            </Link>
            <Link
              to="Portfolio"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              PORTFOLIO
            </Link>
            <Link
              to="Contact"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              CONTACT
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
