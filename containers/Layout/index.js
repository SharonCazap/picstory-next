import React from 'react';
import PropTypes from 'prop-types';

import { Header, Footer } from '../../components';
import { ContainerBody } from './styles';

function Layout({ children }) {
  return (
    <ContainerBody>
      <Header /> 
        {children}
      <Footer/>
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
