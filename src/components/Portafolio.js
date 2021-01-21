import React, { useEffect } from "react";

import {ssLightbox,ssAlertBoxes} from './../utils/utils';
import { FolioItem } from "./Folio/FolioItem";
import { ModalFolioDetail } from "./Folio/ModalFolioDetail";

export const Portafolio = ({portafolio}) => {


  useEffect(()=>{
    ssLightbox();
    ssAlertBoxes();
  },[])



 

  return (
    <>
      <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
          <div className="column large-12">
            <h3>Portafolio</h3>
          </div>
          <div className="column large-12">
            <img width="200px" src="images/portfolio_website.svg" alt="portafolio"/>
          </div>
        </div>

        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
       
          {
            portafolio.map((item,i)=>(
              <FolioItem key={i} folio={item}  />
            ))
          }
          
        </div>


        {
            portafolio.map((item,i)=>(
              <ModalFolioDetail folioDetail={item} key={i} />
            ))
          }
      
      </section>
    </>
  );
};
