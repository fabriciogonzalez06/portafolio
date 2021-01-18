import React from "react";
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
        


        {/* <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Skills</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore vero quidem nobis maxime dolorem aliquam quisquam eum
                ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus
                fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto
                dicta inventore tempora ratione quia odio.
              </p>

              <ul className="skill-bars-fat">
                <li>
                  <div className="progress percent85"></div>
                  <strong>HTML</strong>
                </li>
                <li>
                  <div className="progress percent85"></div>
                  <strong>CSS</strong>
                </li>
                <li>
                  <div className="progress percent65"></div>
                  <strong>Javascript</strong>
                </li>
                <li>
                  <div className="progress percent90"></div>
                  <strong>Figma</strong>
                </li>
                <li>
                  <div className="progress percent75"></div>
                  <strong>Illustrator</strong>
                </li>
                <li>
                  <div className="progress percent60"></div>
                  <strong>Photoshop</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      */}
     
      </section>
    </>
  );
};
