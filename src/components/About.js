import React from "react";

export const About = ({about}) => {
  return (
    <>
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img
              className="s-about__pic"
              src={about.img}
              alt={about.nombre}
            />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>Sobre Mí</h3>
            <p>
              {about.description}
            </p>

            <hr />

            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Datos de contacto</h3>

                <p>
                  {about.nombre} <br />
                   {about.ciudad} <br />
                  {/* Mountain View, CA 94043 US <br /> */}
                  <a href="tel:+1975432345"> {about.celular} </a> <br />
                  <a href="mailto:#0"> {about.correo} </a>
                </p>
              </div>
              {/* <div className="column w-1000-stack">
                <a href="#0" className="btn btn--download">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
                  Download CV
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
