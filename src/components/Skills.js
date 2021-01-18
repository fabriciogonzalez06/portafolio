import React from "react";
import { Cards } from "./Card/Cards";

export const Skills = ( {skills} ) => {
  return (
    <section   id="skills" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-12">
          <h3>Habilidades</h3>
        </div>
      </div>
      <Cards data={skills} />
    </section>
  );
};
