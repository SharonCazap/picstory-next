import React from 'react';
import PropTypes from 'prop-types';
import { BotonAccion } from './styled'; 

const Boton = ( {children, backgroundColor, borderColor, colorText, href } ) => {
  return (
    <BotonAccion 
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      colorText={colorText}
      href={href}
    >
      {children}
    </BotonAccion>
  )
}

Boton.propTypes = {
  children: PropTypes.string.isRequired
};

export default Boton;