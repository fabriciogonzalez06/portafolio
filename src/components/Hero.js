import React from "react";
import PropTypes from "prop-types";
//import { SocialNetwork } from "./SocialNetwork";

export const Hero = ({ me }) => {

  return (
    <>
      <section id="hero" className="s-hero target-section">
        <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>

        <div className="row s-hero__content">
          <div className="column">
            <div className="s-hero__content-about">
              <h1> {me?.name} </h1>

              <h3 >
                {/* I'm a Manila based <span>graphic designer</span>,{" "}
                <span>illustrator</span> and <span>webdesigner</span> creating
                awesome and effective visual identities for companies of all
                sizes around the globe. Let's  */}
                {me?.description}
                <br></br>
                <a className="smoothscroll" href="#about">
                  {/* start scrolling */}
                  Empezar a desplazarse
                </a>
                <br></br>
                {/* and learn more{" "} */}
                y aprender más
                <br></br>
                <a className="smoothscroll" href="#about">
                  {/* about me */}
                  sobre mí
                </a>
                .
              </h3>

              {/* <SocialNetwork socialNetworks={me?.socialNetworks} /> */}

            </div>

          </div>
        </div>

        <div className="s-hero__scroll">
          <a href="#about" className="s-hero__scroll-link smoothscroll">
            <span className="scroll-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              // style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"
              >
                <path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path>
              </svg>
            </span>
            <span className="scroll-text">Scroll Down</span>
          </a>
        </div>
      </section>
    </>
  );
};

Hero.propTypes = {
  me: PropTypes.object.isRequired
};
