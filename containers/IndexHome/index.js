import React from 'react';

import { ContainerMain, Banner, Container, ImagenesInfo, Accion, HrHome, Espacio, EspacioInfo, BotonDonar } from './styles';
import { Wrapper, Boton, Ilustracion, Titulo } from '../../components';

function IndexContainer() {

  return (
    <ContainerMain>
      <Banner>
        <h1>Inspirate con imágenes, creá las mejores historias, compartilas y mostrá tu proceso para motivar a otros a escribir. </h1>
      </Banner>
      <Wrapper>
        <Container>
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
                <Boton href={'api/login'} backgroundColor={true} borderColor={false} colorText={false}> Empezar a escribir </Boton>
              </Accion>
            </div>
            <Ilustracion image={'./images/imageHome.png'} alt={'imageHistorias'} />
          </ImagenesInfo>
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
                  <Boton href={'api/login'} backgroundColor={true} borderColor={false} colorText={false}> Empezar a escribir </Boton>
                </Accion>
              </div>
            </EspacioInfo>
          </Espacio>
        </Container>
        <Container>
          <BotonDonar>
            <h2>Aport&aacute; a la comunidad</h2>
            <h3>¡Podes colaborar para que esta comunidad de escritores continue inspirando al mundo!</h3>
            <p>*La donación es a trav&eacute;s de MercadoPago</p>
            <a target='_blank'
              mp-mode="dftl"
              href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=493363169-9f36902c-d6b3-42db-b873-2305da7f3407"
              name="MP-payButton">
              Donar
            </a>
          </BotonDonar>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default IndexContainer;