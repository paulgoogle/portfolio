import React from "react";
import "./About.css";
import html5 from "../../components/images/html5.png";
import css from "../../components/images/css.png";
import javascript from "../../components/images/javascript.png";
import react from "../../components/images/react.png";
import wordpress from "../../components/images/wordpress.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faDollarSign,
  faMobileAlt,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div>
        <h1 className="about-title" id="About">
          ABOUT ME!
        </h1>
        <p className="tagline">This is the part where i win you over......</p>
        <hr className="about-hr" />
        <div className="about-container">
          <p>What can i do for you:</p>
          <ul>
            <FontAwesomeIcon icon={faPencilRuler} className="faIcon" />
            <li>
              I can work with you to design the website you need for your
              business
            </li>
            <FontAwesomeIcon icon={faDollarSign} className="faIcon faIcon2" />
            <li>
              I can increase your business's profile/awareness on the internet,
              therefore increasing potential sales!
            </li>
            <FontAwesomeIcon icon={faMobileAlt} className="faIcon faIcon3" />
            <li>
              Ensure the website is fully responsive on mobiles <br />
              (Which is a must, as everyones on their phones nowadays!!)
            </li>
            <FontAwesomeIcon icon={faSearchLocation} className="faIcon" />
            <li>
              I can help with SEO (Search Engine Optimization) to make your site
              easier to find on search engines <br />
              (i.e Google)
            </li>
          </ul>
        </div>
        <h2 className="tech">TECHNOLOGIES I USE</h2>
        <div className="tech-container">
          <div className="html tech-item">
            <img src={html5} alt="html5" />
          </div>
          <div className="css tech-item">
            <img src={css} alt="css" />
          </div>
          <div className="javascript tech-item">
            <img src={javascript} alt="js" />
          </div>
          <div className="react tech-item">
            <img src={react} alt="react" />
          </div>
          <div className="wordpress tech-item">
            <img src={wordpress} alt="wordpress" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
