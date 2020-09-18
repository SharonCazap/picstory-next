import React from 'react';

import { ContainerMain, Container, NavLogIn, FormularioLogIn, Input, Accion, OlvidoPassword } from './styles';
import { Wrapper, Boton, Ilustracion, Titulo } from '../../components';

function LogInContainer() {

  return (
    <ContainerMain>
      <Wrapper>
        <Container>
          <NavLogIn>
            <ul>
              <li className='activo'>
                <a href={'login'}>Iniciar sesión</a>
              </li>
              <li>
                <a href={'registrarse'}>Registrarse</a>
              </li>
            </ul>
          </NavLogIn>
          <FormularioLogIn>
            <form id='logIn'>
              <h6>Usuario:</h6>
              <Input type='text' id='user' />
              <h6>Contrase&ntilde;a:</h6>
              <Input type='text' id='password' />
              <OlvidoPassword href={'home'}>Olvid&eacute; mi contrase&ntilde;a</OlvidoPassword>
              <Accion>
                <Boton href={'home'} backgroundColor={true} borderColor={false} colorText={false}> Iniciar sesi&oacute;n </Boton>
                <a href={'registrarse'}>¿No ten&eacute;s cuenta? <span>Registrate</span></a>
              </Accion>
            </form>
          </FormularioLogIn>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default LogInContainer;