import React from "react";
import "./Portfolio.css";
import gymlandingpage from "../images/gymlandingpage.PNG";
import restaurantsite from "../images/restaurantsite.PNG";
import portfolio from "../images/portfolio.PNG";

function Portfolio() {
  return (
    <>
      <div>
        <hr />
        <h1 className="placeholder" id="Portfolio">
          SOME PREVIOUS WORK I'VE DONE
        </h1>

        <div className="grid-container">
          <div className="grid-item item-1">
            <a
              href="https://pt-studios-gym-landing-page.netlify.app/"
              className="img"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gymlandingpage} alt="gym page" />
            </a>
          </div>
          <div className="grid-item item-2">
            <a
              href="https://pt-studios-mcburgerking.netlify.app/"
              className="img"
              target="_blank"
              rel="noreferrer"
            >
              <img src={restaurantsite} alt="restaurant page" />
            </a>
          </div>
          <div className="grid-item item-3">
            <a
              href="https://pt-studios-portfolio.netlify.app/"
              className="img"
              target="_blank"
              rel="noreferrer"
            >
              <img src={portfolio} alt="portfolio page" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
