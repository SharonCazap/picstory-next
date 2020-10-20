import React from 'react';

import { ContainerMain, Banner, Container, Configuracion, ConfiguracionInfo, Accion } from './styles';
import { Wrapper, Boton } from '../../components';

function ConfiguracionContainer() {
  return (
    <ContainerMain>
      <Banner>
        <h1>Configuraci&oacute;n</h1>
      </Banner>
      <Wrapper>
        <Container>
          <Configuracion>
            <h3>Cuenta</h3>
            <h3>Notificaciones</h3>
            <h3>Seguridad e inicio de sesi&oacute;n</h3>
          </Configuracion>
          <ConfiguracionInfo>
            <h3>Configuraci&oacute;n general de la cuenta</h3>
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