import React, { useState, useEffect } from 'react';
import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Historias, Imagenes, ImagenHome, SeguirEscribiendo, ContinuarHistoria, Accion } from './styles';
import { Wrapper, Titulo, CardLeerHistoria, Boton, Ilustracion, CardContinuarHistoria } from '../../components';

function HomeContainer() {

  // Traigo las images de la API de pixabay //
  // const [hasError, setErrors] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://pixabay.com/api/?key=6683953-b49e41bfa4dd17cb95038d82b')
      .then(res => res.json())
      .then(response => {
        setImages(response.hits);
      })
      .catch(error => {
        // setErrors(error);
        console.log(error);
      })
  }, []);

  // Traigo las primeras 6 historias de la base de datos //
  const [historias, setHistorias] = useState([]);

  const getHistorias = async () => {
    firebaseDB.ref('historias').once('value', (snapshot) => {
      const historiasArr = [];
      snapshot.forEach((childSnapshot) => {
        historiasArr.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      // historiasArr.reverse()
      // console.log("getHistorias: ", historiasArr);
      setHistorias(historiasArr)
    })
  }

  useEffect(() => {
    getHistorias();
  }, []);

  return (
    <ContainerMain>
      <Banner>
        <h1>Inspirate, creá tus propias historias y compartilas con la comunidad</h1>
      </Banner>
      <Wrapper>
        <Container>
          <Historias>
            <Titulo>
              Historias que iluminan
            </Titulo>
            {
              historias.slice(0, 6).map(historia => (
                <CardLeerHistoria
                  key={historia.id}
                  href={'historia'}
                  image={'./images/history01.jpg'}
                  tituloHistoria={historia.titulo}
                  descripcion={historia.descripcion}
                  autor={'Tatiana Numerosky'}
                />
              ))
            }
            <Accion>
              <Boton href={'lista-historias'} backgroundColor={true} borderColor={false} colorText={false}> Leer más </Boton>
            </Accion>
          </Historias>
          <Imagenes>
            <Titulo>
              Im&aacute;genes que inspiran
            </Titulo>
            {
              images.slice(0, 6).map(img => {
                return (
                  <ImagenHome key={img.id}>
                    <img src={img.largeImageURL} alt={img.tags} />
                  </ImagenHome>
                )
              })
            }
            {/* <span>Has Error: {hasError}</span> */}
            <Accion>
              <Boton href={'imagenes'} backgroundColor={true} borderColor={false} colorText={false}> Ver más </Boton>
            </Accion>
          </Imagenes>
        </Container>
        <Container>
          <ContinuarHistoria>
            <Titulo>
              Continuá donde dejaste
            </Titulo>
            <h5>Termina de escribir la historia y publicala.</h5>
            <Ilustracion image={'./images/ilustracionHistorias.png'} alt={'imageHistoriaContinuar'}/>
            <SeguirEscribiendo>
              <CardContinuarHistoria
                href={'continuar'}
                image={'./images/placeholderHistoria.png'}
                alt={'imageHistoria'}
                tituloHistoria={'Algún día te encontraré'}
                sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
                fecha={'hace 3 días'}
              />
              <Accion>
                <Boton href={'continuar'} backgroundColor={false} borderColor={true} colorText={true}> Continuar </Boton>
              </Accion>
            </SeguirEscribiendo>
          </ContinuarHistoria>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default HomeContainer;