import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './styled';

const CardLeerHistoria = ( {children, href} ) => {
  return (
    <Card href={href}>
      {children}
    </Card>
  )
}
CardLeerHistoria.propTypes = {
  children: PropTypes.any.isRequired
};

export default CardLeerHistoria;