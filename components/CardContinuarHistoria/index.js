import React from 'react';
import PropTypes from 'prop-types';

import { Card, Info, Actions } from './styled';

const CardContinuarHistoria = ( {children}, props ) => {
  return (
    <Card href={props.href}>
      {children}
    </Card>
  )
}
CardContinuarHistoria.propTypes = {
  children: PropTypes.any.isRequired
};

export default CardContinuarHistoria;