import React from "react";

import './card.styles.css'

export const Card = (props) => {
  return (
    <div className='card-container'>
      <h2> {props.monster.name} </h2>
    </div>
  );
};
