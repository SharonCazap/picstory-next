import React from 'react';

import { ContainerMain, Banner, Container, EscribirInfo, Input, EscribirHistoria, Accion } from './styles';
import { Wrapper, Boton } from '../../components';

function EscribirHistoriaContainer() {
  return (
    <ContainerMain>
      <Banner>
        <h1>Escribe tu historia</h1>
      </Banner>
      <Wrapper>
        <Container>
          <EscribirInfo>
            <h3>Titulo</h3>
            <Input type='text' id='titulo' placeholder='Titulo de la historia' />
            <h3>G&eacute;nero</h3>
            <select name='generos' >
              <option value="Acci&oacute;on">Acci&oacute;n</option>
              <option value="Aventura">Aventura</option>
              <option value="Cl&aacute;sicas">Cl&aacute;sicas</option>
              <option value="Fantas&iacute;a">Fantas&iacute;a</option>
              <option value="Ficci&oacute;n">Ficci&oacute;n</option>
              <option value="Romance">Romance</option>
            </select>
            <h3>Descripci&oacute;n</h3>
            <textarea placeholder='Descripci&oacute;n / Sinopsis de la historia'>
            </textarea>
          </EscribirInfo>
          <EscribirHistoria>
            <textarea placeholder='Comienza a escribir tu historia'>

            </textarea>
          </EscribirHistoria>
        </Container>
        <Container>
          <Accion>
            <Boton href={'mis-historias'} backgroundColor={false} borderColor={true} colorText={true}> Continuar despu&eacute;s </Boton>
            <Boton href={'historia'} backgroundColor={true} borderColor={false} colorText={false}> Publicar </Boton>
          </Accion>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default EscribirHistoriaContainer;