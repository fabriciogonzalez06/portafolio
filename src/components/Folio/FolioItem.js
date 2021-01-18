import React from 'react'

export const FolioItem = ({folio}) => {
    // console.log('folio ',folio);
    return (
        <>
            <div className="column folio-item">
            <a href={"#"+folio.id} className="folio-item__thumb">
              <img src={folio.img} alt={folio.name} />
            </a>
          </div>

          {/* <div className="column folio-item">
            <a href="#modal-02" className="folio-item__thumb">
              <img src="images/portfolio/lamp.jpg" alt="" />
            </a>
          </div>

          <div className="column folio-item">
            <a href="#modal-03" className="folio-item__thumb">
              <img src="images/portfolio/minimalismo.jpg" alt="" />
            </a>
          </div>

          <div className="column folio-item">
            <a href="#modal-04" className="folio-item__thumb">
              <img src="images/portfolio/shutterbug.jpg" alt="" />
            </a>
          </div>

          <div className="column folio-item">
            <a href="#modal-05" className="folio-item__thumb">
              <img src="images/portfolio/fuji.jpg" alt="" />
            </a>
          </div>

          <div className="column folio-item">
            <a href="#modal-06" className="folio-item__thumb">
              <img src="images/portfolio/skaterboy.jpg" alt="" />
            </a>
          </div>

          <div className="column folio-item">
            <a href="#modal-07" className="folio-item__thumb">
              <img src="images/portfolio/rucksack.jpg" alt="" />
            </a>
          </div>

          <div className="column folio-item">
            <a href="#modal-08" className="folio-item__thumb">
              <img src="images/portfolio/sanddunes.jpg" alt="" />
            </a>
          </div> */}
        </>
    )
}
