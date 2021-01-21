import React from 'react'

import PropTypes from 'prop-types';

export const CardItem = ({item}) => {
    return (
        <div className="card">
          <h6 > {item.name}  </h6>
          <p > <img src={item.img} alt={item.name} /> </p>
        </div>
    )
}

CardItem.prototype={
  item:PropTypes.object.isRequired
}
