import React from "react";
import PropTypes from 'prop-types';
import { ResumeBlock } from "./ResumeBlock";


export const ResumeSection = ({resume}) => {
  return (
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps"> {resume.title} </h3>
      </div>
      <div className="column large-9 tab-12">
          <ResumeBlock  items={resume.items} />
      </div>
    </div>
  );
};


ResumeSection.prototype={
  resume:PropTypes.object.isRequired
}