import React from 'react';
// import PropTypes from 'prop-types';

import { Card, Images, Info } from './styled';

const CardColeccionImages = ( props ) => {
  return (
    <Card href={props.href}>
      <Images>
        <img src={props.image01} alt={props.alt}/>
        <img src={props.image02} alt={props.alt}/>
        <img src={props.image03} alt={props.alt}/>
      </Images>
      <Info>
        <h3>{props.coleccion}</h3> 
      </Info>
    </Card>
  )
}

export default CardColeccionImages;