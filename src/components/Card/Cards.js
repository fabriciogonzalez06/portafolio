import React from "react";
import { CardItem } from "./CardItem";

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
