import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './styled';

const CardColeccionImages = ( {children} ) => {
  return (
    <Card>
      {children}
    </Card>
  )
}

CardColeccionImages.propTypes = {
  children: PropTypes.any.isRequired
};

export default CardColeccionImages;