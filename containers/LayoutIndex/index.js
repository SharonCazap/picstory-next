import React from 'react';
import PropTypes from 'prop-types';

import { HeaderIndex, Footer } from '../../components';
import { ContainerBody } from './styles';

function LayoutIndex({ children }) {
  return (
    <ContainerBody>
      <HeaderIndex /> 
        {children}
      <Footer />
    </ContainerBody>
  );
}

LayoutIndex.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutIndex;
