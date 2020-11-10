import React from 'react';
import PropTypes from 'prop-types';

import { Card, Info, Actions } from './styled';

const CardContinuarHistoria = ( props ) => {
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
// CardContinuarHistoria.propTypes = {
//   children: PropTypes.any.isRequired
// };

export default CardContinuarHistoria;