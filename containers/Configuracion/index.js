import React from 'react';

import { ContainerMain, Banner, Container, Configuracion, ConfiguracionInfo, UserData, Accion } from './styles';
import { Wrapper, Boton } from '../../components';

function ConfiguracionContainer({ user }) {

  const { name: userId, nickname: nickname } = user;
  console.log("username: ", userId, "nickname: ", nickname )
  
  return (
    <ContainerMain>
      <Banner>
        <h1>Configuraci&oacute;n</h1>
      </Banner>
      <Wrapper>
        <Container>
          {/* <Configuracion>
            <h3>Cuenta</h3>
            <h3>Notificaciones</h3>
            <h3>Seguridad e inicio de sesi&oacute;n</h3>
          </Configuracion> */}
          <ConfiguracionInfo>
            <h3>Configuraci&oacute;n general de la cuenta</h3>
            <UserData>
              <div>
                <h4>Nombre de usuario</h4>
                <span>{nickname}</span>
              </div>
              <div>
                <h4>Email</h4>
                <span>{userId}</span>
              </div>
            </UserData>
          </ConfiguracionInfo>
        </Container>
        <Container>
          {/* <Accion>
            <Boton href={'mis-historias'} backgroundColor={false} borderColor={true} colorText={true}> Continuar despu&eacute;s </Boton>
            <Boton href={'historia'} backgroundColor={true} borderColor={false} colorText={false}> Publicar </Boton>
          </Accion> */}
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default ConfiguracionContainer;