import React from 'react'

import {Cards} from './Card/Cards';

export const NewTechologies = ({data}) => {
    
    return (
        <section   id="newTech" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-12">
          <h3>Estudiando</h3>
        </div>
        <div className="column large-12">
            <img width="200px" src="images/estudiando/developer_activity.svg" alt="habilidades"/>
          </div>
      </div>
      <Cards data={data} />
    </section>
    )
}
