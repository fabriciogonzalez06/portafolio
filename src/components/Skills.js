import React from "react";
import PropTypes from 'prop-types';

import { Cards } from "./Card/Cards";

export const Skills = ( {skills} ) => {
  return (
    <section   id="skills" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-12">
          <h3>Habilidades</h3>
        </div>
        <div className="column large-12">
            <img width="200px" src="images/certificate.svg" alt="habilidades"/>
          </div>
      </div>
      <Cards data={skills} />
    </section>
  );
};


Skills.prototype={
  skills:PropTypes.object.isRequired
}