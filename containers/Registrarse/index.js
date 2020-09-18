import React from 'react';

import { ContainerMain, Container, NavLogIn, FormularioLogIn, Input, Accion } from './styles';
import { Wrapper, Boton, Ilustracion, Titulo } from '../../components';

function RegistrarseContainer() {

  return (
    <ContainerMain>
      <Wrapper>
        <Container>
          <NavLogIn>
            <ul>
              <li>
                <a href={'login'}>Iniciar sesión</a>
              </li>
              <li className='activo'>
                <a href={'registrarse'}>Registrarse</a>
              </li>
            </ul>
          </NavLogIn>
          <FormularioLogIn>
            <form id='logIn'>
              <div>
                <h6>Nombre:</h6>
                <Input type='text' id='nombre' />
              </div>
              <div>
                <h6>Apellido:</h6>
                <Input type='text' id='apellido' />
              </div>
              <h6>Email:</h6>
              <Input type='email' id='email' />
              <h6>Contrase&ntilde;a:</h6>
              <Input type='text' id='password' />
              <h6>Confirmar contrase&ntilde;a:</h6>
              <Input type='text' id='confirmPassword' />
              <Accion>
                <Boton href={'home'} backgroundColor={true} borderColor={false} colorText={false}> Registrarse </Boton>
                <a href={'registrarse'}>¿Ya ten&eacute;s cuenta? <span>Inici&aacute; sesi&oacute;n</span></a>
              </Accion>
            </form>
          </FormularioLogIn>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default RegistrarseContainer;