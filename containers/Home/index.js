import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Historias, Imagenes, ImagenHome, SeguirEscribiendo, ContinuarHistoria, Accion } from './styles';
import { Wrapper, Titulo, CardLeerHistoria, Boton, Ilustracion, CardContinuarHistoria } from '../../components';

function HomeContainer({ user }) {
  const { name: username } = user;
  const { nickname: nickname } = user;
  console.log("user: ", user)

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

  // Traigo mis historias de la base de datos //
  const [misHistorias, setMisHistorias] = useState([]);

  const getMisHistorias = async () => {
    firebaseDB.ref('historias').orderByChild('nickname').equalTo(nickname).once('value', (snapshot) => {
      const misHistoriasArr = [];
      snapshot.forEach((childSnapshot) => {
        misHistoriasArr.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      // historiasArr.reverse()
      // console.log("getMisHistorias: ", misHistoriasArr);
      setMisHistorias(misHistoriasArr)
    })
  }

  useEffect(() => {
    getHistorias();
    getMisHistorias();
  }, []);

  const router = useRouter();
  const onEditHistoria = (id) => {
    router.push({
      pathname: `historia/editar/${id}`,
      query: { pid: id },
    })
  }

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
                  href={`historia/${historia.id}`}
                >
                  <figure>
                    <img src={historia.imagenPortada.largeImageURL} alt={historia.imagenPortada.tags} />
                  </figure>
                  <div>
                    <h3>{historia.titulo}</h3>
                    <p>{historia.descripcion}</p>
                    <div>
                      <span>{historia.nickname}</span>
                      <span>{historia.tiempoLectura} mins</span>
                    </div>
                  </div>
                </CardLeerHistoria>
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
            <Ilustracion image={'./images/ilustracionHistorias.png'} alt={'imageHistoriaContinuar'} />
            <SeguirEscribiendo>
              {
                misHistorias.slice(0, 1).map(miHistoria => (
                  <CardContinuarHistoria
                    key={miHistoria.id}
                  // href={`historia/${historia.id}`}
                  >
                    <figure>
                      <img src={miHistoria.imagenPortada.largeImageURL} alt={miHistoria.imagenPortada.tags} />
                    </figure>
                    <div>
                      <h3>{miHistoria.titulo}</h3>
                      <p>{miHistoria.descripcion}</p>
                      {/* <div>
                        <button onClick={() => onEditHistoria(miHistoria.id)} className='editButton'></button>
                      </div> */}
                      <button onClick={() => onEditHistoria(miHistoria.id)} className='editButtonHome'>Continuar</button>

                    </div>
                  </CardContinuarHistoria>
                ))
              }
              {/* <Accion>
                <Boton href={'continuar'} backgroundColor={false} borderColor={true} colorText={true}> Continuar </Boton>
              </Accion> */}
            </SeguirEscribiendo>
          </ContinuarHistoria>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default HomeContainer;