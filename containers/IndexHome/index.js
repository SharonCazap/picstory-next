import React from 'react';

import { ContainerMain, Banner, Container, Imagenes, ImagenesInfo, Accion, HrHome, Espacio, EspacioInfo } from './styles';
import { Wrapper, Boton, Ilustracion, Titulo } from '../../components';

function IndexContainer() {

  return (
    <ContainerMain>
      <Banner>
        <h1>Inspirate con imágenes, creá las mejores historias, compartilas y mostrá tu proceso para motivar a otros a escribir. </h1>
      </Banner>
      <Wrapper>
        <Container>
          <Imagenes>
            <ImagenesInfo>
              <h2>Una imagen.<br />Miles de historias.</h2>
              <div>
                <p>
                  Una imagen tiene mil historias que contar.
                  <br />
                  Elegí una y empezá a escribir.
                  <br />
                  Compartí tu historia con la comunidad y leé todas las historias que las imagenes tienen para contar.
                </p>
                <Accion>
                  <Boton href={'login'} backgroundColor={true} borderColor={false} colorText={false}> Empezar a escribir </Boton>
                </Accion>
              </div>
            </ImagenesInfo>
            <img src='./images/imageHome.png' alt='imageHome' />
          </Imagenes>
        </Container>
        </Wrapper>
        <Container>
          <HrHome>
          <Titulo>Inspirate</Titulo>
          <Titulo>Escribí</Titulo>
          <Titulo>Compartí</Titulo>
          </HrHome>
        </Container>
        <Wrapper>
        <Container>
          <Espacio>
            <EspacioInfo>
              <h2>Un espacio, las mejores <br /> historias</h2>
              <Ilustracion image={'./images/ilustracionHome.png'} alt={'imageEmpezarEscribir'} />
              <div>
                <p>
                  Picstory es un espacio de inspiración para escribir aquellas historias que están en tu imaginación y quieren salir a la luz.
                    <br />
                    Inspírate, escribe y comparte las maravillosas historias con la comunidad.
                  </p>
                <Accion>
                  <Boton href={'login'} backgroundColor={true} borderColor={false} colorText={false}> Empezar a escribir </Boton>
                </Accion>
              </div>
            </EspacioInfo>
          </Espacio>

        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default IndexContainer;