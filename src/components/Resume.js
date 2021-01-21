import React from "react";
import PropTypes from 'prop-types';

import { ResumeSection } from "./ResumeSection";

export const Resume = ({resumes}) => {
  return (
    <>
      <section id="resume" className="s-resume target-section">

        {
          resumes.map((data,i)=>(
          <ResumeSection  resume={data} key={i} />)
          )
        }
    
     
      </section>
    </>
  );
};

Resume.prototype={
  resumes:PropTypes.object.isRequired
}
