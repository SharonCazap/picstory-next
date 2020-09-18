import React from 'react';

import { ContainerMain, Banner, Container, NavHistorias, EnProceso, Accion } from './styles';
import { Wrapper, CardContinuarHistoria, Boton } from '../../components';

function MisHistoriasContainer() {
  return (
    <ContainerMain>
      <Banner>
        <h1>Mis historias</h1>
      </Banner>
      <Wrapper>
        <Container>
          <NavHistorias>
            <ul>
              <li className='activo'>
                <a href={'/'}>En proceso</a>
              </li>
              <li className=''>
                <a href={'mis-historias-publicadas'}>Publicadas</a>
              </li>
            </ul>
          </NavHistorias>

          <EnProceso>
            <CardContinuarHistoria
              image={'./images/placeholderHistoria.png'}
              alt={'imageHistoria'}
              tituloHistoria={'Algún día te encontraré'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              fecha={'hace 3 días'}
            />
            <CardContinuarHistoria
              image={'./images/placeholderHistoria.png'}
              alt={'imageHistoria'}
              tituloHistoria={'Algún día te encontraré'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              fecha={'hace 3 días'}
            />
            <CardContinuarHistoria
              image={'./images/placeholderHistoria.png'}
              alt={'imageHistoria'}
              tituloHistoria={'Algún día te encontraré'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              fecha={'hace 3 días'}
            />
            <CardContinuarHistoria
              image={'./images/placeholderHistoria.png'}
              alt={'imageHistoria'}
              tituloHistoria={'Algún día te encontraré'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              fecha={'hace 3 días'}
            />
          </EnProceso>

        </Container>
        <Container>
          <Accion>
            <Boton href={'lista-historias'} backgroundColor={true} borderColor={false} colorText={false}> Escribir </Boton>
            <Boton href={'escribir'} backgroundColor={false} borderColor={true} colorText={true}> Volver a historias </Boton>
          </Accion>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default MisHistoriasContainer;