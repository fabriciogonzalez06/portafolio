import React from "react";
import { CardItem } from "./CardItem";
import PropTypes from 'prop-types';

import './Cards.css';


export const Cards = ({data}) => {


  return (
    <div className="row">
        {
            data.map((d,i)=>(
                <CardItem item={d}  key={i} />
            ))
        }
       
    </div>
  );
};

Cards.prototype={
  data:PropTypes.object.isRequired
}
