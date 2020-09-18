import React from 'react';
import PropTypes from 'prop-types';

import { TituloNombre } from './styled';

const Titulo = ( {children} ) => {
  return (
    <TituloNombre>
      <span>
        <img src='./images/isologo.svg' alt='Historias' />
      </span>
      {children} 
    </TituloNombre>
  )
}

Titulo.propTypes = {
  children: PropTypes.string.isRequired
};

export default Titulo;