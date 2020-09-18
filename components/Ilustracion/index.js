import React from 'react';
// import PropTypes from 'prop-types';

import { IlustracionImage } from './styled';

const Ilustracion = ( props ) => {
  return (
    <IlustracionImage>
      <figure>
        <img src={props.image} alt={props.alt}/>
      </figure>
    </IlustracionImage>
  )
}

export default Ilustracion;