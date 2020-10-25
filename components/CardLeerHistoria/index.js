import React from 'react';
// import PropTypes from 'prop-types';

import { Card, Info } from './styled';

const CardLeerHistoria = (props) => {
  return (
    <Card key={props.id} href={props.href} >
      <figure>
        <img src={props.image} alt={props.alt} />
      </figure>
      <Info>
        <h3>{props.tituloHistoria}</h3>
        <p>{props.descripcion}</p>
        <span>{props.autor}</span>
      </Info>
    </Card>
  )
}

export default CardLeerHistoria;