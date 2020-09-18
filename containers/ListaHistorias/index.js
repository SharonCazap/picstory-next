import React from 'react';

import { ContainerMain, Banner, Container, Historias, Accion } from './styles';
import { Wrapper, CardLeerHistoria, Boton } from '../../components';

function ListaHistoriasContainer() {
  return (
    <ContainerMain>
      <Banner>
        <h1>Historias que iluminan</h1>
      </Banner>
      <Wrapper>
        <Container>
          {/* Nav */}
          <Historias>
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
          </Historias>
          <Accion>
            <Boton href={'lista-historias'} backgroundColor={true} borderColor={false} colorText={false}> Leer más </Boton>
            <Boton href={'imagenes'} backgroundColor={false} borderColor={true} colorText={true}> Ver imágenes </Boton>
          </Accion>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default ListaHistoriasContainer;