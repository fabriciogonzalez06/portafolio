import React from "react";

export const ResumeBlock = ({ items }) => {

  return (
    <>
      {items.map((item,i) => (
        <div className="resume-block" key={i} >
          <div className="resume-block__header">
            <h4 className="h3"> {item.enterprise} </h4>
            <p className="resume-block__header-meta">
              <span> {item.jobTitle} </span>
              <span className="resume-block__header-date">
                {item.start} - {item.end}
              </span>
            </p>
          </div>

          <p>
            {item.description}
          </p>

          {
              item.img.map((img,i)=>(
                 <img src={img}  key={i} />
              ))
          }

        </div>
      ))}
    </>
  );
};
