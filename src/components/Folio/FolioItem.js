import React from 'react'
import PropTypes from 'prop-types';

export const FolioItem = ({folio}) => {
    return (
        <>
            <div className="column folio-item">
            <a href={"#"+folio.id} className="folio-item__thumb">
              <img src={folio.img} alt={folio.name} />
            </a>
          </div>
        </>
    )
}


FolioItem.prototype={
  folio:PropTypes.object.isRequired
}