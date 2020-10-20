import React from 'react';
import PropTypes from 'prop-types';

import { useFetchUser } from '../../lib/user';

import { Header, Footer } from '../../components';
import { ContainerBody } from './styles';

function Layout({ children }) {
  const { user, loading } = useFetchUser();
  console.log('user: ' + user);
  
  return (
    <ContainerBody>
      <Header user={user} loading={loading} /> 
        {children}
      <Footer/>
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
