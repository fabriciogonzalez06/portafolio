import React from "react";


// import "./../../index.css";

export const Header = () => {

  const toogleMenuAction=()=>{
    document.querySelector('body').classList.toggle('menu-is-open');
    document.querySelector('a.s-header__menu-toggle').classList.toggle('is-clicked')
  }

  return (
   <>
          <header className="s-header">
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current">
                <a className="smoothscroll" href="#hero">
                  Inicio
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" onClick={toogleMenuAction}>
                  Sobre Mí
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume" onClick={toogleMenuAction} >
                  Resumen
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#skills" onClick={toogleMenuAction} >
                  Habilidades
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#newTech" onClick={toogleMenuAction} >
                  Estudiando
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio" onClick={toogleMenuAction}>
                  Portafolio
                </a>
              </li>
              {/* <li>
                <a className="smoothscroll" href="#testimonials" onClick={toogleMenuAction}>
                  Testimonios
                </a>
              </li> */}
              {/* <li>
                <a className="smoothscroll" href="#contact" onClick={toogleMenuAction}>
                  Saluda
                </a>
              </li> */}
            </ul>
          </nav>
        </div>

        <a className="s-header__menu-toggle " onClick={toogleMenuAction} href="#0" title="Menu">
          <span className="s-header__menu-icon"></span>
        </a>
      </header>

   </>
  );
};
