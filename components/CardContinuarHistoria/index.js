import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './styled';

const CardContinuarHistoria = ( {children} ) => {
  return (
    <Card>
      {children}
    </Card>
  )
}
CardContinuarHistoria.propTypes = {
  children: PropTypes.any.isRequired
};

export default CardContinuarHistoria;