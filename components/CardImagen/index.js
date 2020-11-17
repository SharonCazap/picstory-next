import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './styled';

const CardImagen = ( {children} ) => {
  return (
    <Card>
      {children}
    </Card>
  )
}
CardImagen.propTypes = {
  children: PropTypes.any.isRequired
};

export default CardImagen;