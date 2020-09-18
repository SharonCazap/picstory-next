import React from 'react';
// import PropTypes from 'prop-types';

import { Card, Info } from './styled';

const CardContinuarHistoria = ( props ) => {
  return (
    <Card>
      <figure>
        <img src={props.image} alt={props.alt}/>
      </figure>
      <Info>
        <h3>{props.tituloHistoria}</h3> 
        <p>{props.sinopsis}</p>
        <span>{props.fecha}</span>
      </Info>
    </Card>
  )
}

export default CardContinuarHistoria;