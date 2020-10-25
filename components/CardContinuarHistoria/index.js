import React from 'react';
// import PropTypes from 'prop-types';

import { Card, Info, Actions } from './styled';

const CardContinuarHistoria = ( props ) => {
  return (
    <Card href={props.href}>
      <figure>
        <img src={props.image} alt={props.alt}/>
      </figure>
      <Info>
        <h3>{props.tituloHistoria}</h3> 
        <p>{props.sinopsis}</p>
        <Actions>
          <button onClick={props.edit} className='editButton'></button>
          <button onClick={props.delet} className='deleteButton'></button>
        </Actions>
      </Info>
      
    </Card>
  )
}

export default CardContinuarHistoria;