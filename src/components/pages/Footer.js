import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="social">
          <a href="https://www.facebook.com/paul.topham.50">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.twitter.com/paultopham2">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/paul-topham-706182120/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <p>Copyright &copy; 2021 PT Studios</p>
      </footer>
    </>
  );
}

export default Footer;
