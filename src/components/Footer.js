import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import { ssBackToTop, ssSmoothScroll } from "../utils/utils";

export const Footer = ({ me }) => {
  useEffect(() => {
    ssSmoothScroll();
    ssBackToTop();
  }, []);

 

  return (
    <>
      <footer className="s-footer">
        <div className="row">
          <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
            <ul className="s-footer__social">
              {me.socialNetworks.map((s, i) => (
                <li key={i}>
                  <a href={s.url} target="_blanck" >
                    <i className={s.icon} aria-hidden="true"></i>
                  </a>
                </li>
              ))}

            </ul>
          </div>

          <div className="column large-7 medium-6 w-1000-stack ss-copyright">
            <span>Angel Fabricio González</span>
            {/* <span>
              Design by <a href="https://www.styleshout.com/">StyleShout</a>
            </span> */}
          </div>
        </div>

        <div className="ss-go-top link-is-visible">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};

Footer.prototype={
  me:PropTypes.object.isRequired
}