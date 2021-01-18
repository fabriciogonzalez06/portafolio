import React from 'react'

// import './Cards.css';

export const CardItem = ({item}) => {
    return (
        <div className="card">
          <h6 > {item.name} </h6>
          <p > <img src={item.img} /> </p>
        </div>
    )
}
