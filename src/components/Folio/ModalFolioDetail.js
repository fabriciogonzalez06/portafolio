import React from 'react'
import PropTypes from 'prop-types';

export const ModalFolioDetail = ({folioDetail}) => {
    return (
        <div id={folioDetail.id} hidden >
        <div className="modal-popup">
          <img src={folioDetail.img} alt={folioDetail.name} />

          <div className="modal-popup__desc">
            <h5> {folioDetail.name} </h5>
            <p>
              {folioDetail.description}
            </p>
            <ul className="modal-popup__cat">
              {
                  folioDetail.tech.map((t,i)=>(
                      <li key={i}> {t} </li>
                  ))
              }
            </ul>
          </div>

          {/* <a href="https://www.behance.net/" className="modal-popup__details">
            Project link
          </a> */}
        </div>
      </div>

    )
}

ModalFolioDetail.prototype={
  folioDetail:PropTypes.object.isRequired
}