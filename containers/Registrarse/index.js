import React, { useState } from 'react';

import { ContainerMain, Container, NavLogIn, FormularioLogIn, Input, Accion } from './styles';
import { Wrapper, BotonSubmit, Ilustracion, Titulo } from '../../components';
import manage from '../../lib/userManager';

function RegistrarseContainer() {

  const [values, setValues] = useState();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  const handleSubmit = e => {
    e.preventDefault(); //  no recarga la pagina después de guardar //
  }

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
            <form id='logIn' onSubmit={handleSubmit} method='GET'>
              <div>
                <h6>Nombre:</h6>
                <Input
                  type='text'
                  name='nombre'
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <h6>Apellido:</h6>
                <Input
                  type='text'
                  name='apellido'
                  onChange={handleInputChange}
                />
              </div>
              <h6>Email:</h6>
              <Input
                type='email'
                name='email'
                onChange={handleInputChange}
              />
              <h6>Contrase&ntilde;a:</h6>
              <Input
                type='text'
                name='password'
                onChange={handleInputChange}
              />
              <h6>Confirmar contrase&ntilde;a:</h6>
              <Input
                type='text'
                name='confirmPassword'
                onChange={handleInputChange}
              />
              <Accion>
                <BotonSubmit href={'home'} backgroundColor={true} borderColor={false} colorText={false}> Registrarse </BotonSubmit>
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