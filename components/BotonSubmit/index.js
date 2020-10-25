import React from 'react';
import PropTypes from 'prop-types';
import { BotonAccion } from './styled'; 

const BotonSubmit = ( {children, backgroundColor, borderColor, colorText, href } ) => {
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

BotonSubmit.propTypes = {
  children: PropTypes.string.isRequired
};

export default BotonSubmit;