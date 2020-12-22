import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Autor, AutorDatos, Historia, HistoriaImagen, HistoriaTexto, Valorar, AutorDescripcion, AutorInfo, Accion } from './styles';
import { Wrapper, Boton } from '../../components';

function HistoriaContainer(props) {
  const { user } = props;
  console.log("props: ", props.currentId)

  const { nickname: username } = user;
  const { picture: userImage } = user;
  console.log("user: ", user)
  const { loading } = props;
  console.log(loading);

  const initialStateValues = {
    username: username,
    titulo: '',
    genero: '',
    descripcion: '',
    texto: '',
    tiempoLectura: '',
    imagenPortada: [],
  };

  const [values, setValues] = useState(initialStateValues);

  const getHistoriaById = async (id) => {
    await firebaseDB.ref(`historias/${id}`).once('value', (snapshot) => {
      const miHistoriaArr = snapshot.val();
      console.log("miHistoriasArr: ", miHistoriaArr)
      setValues({ ...miHistoriaArr })
    })
  }

  useEffect(() => {
    console.log("id Historia: ", props.currentId);
    getHistoriaById(props.currentId);
  }, []);

  return (
    <ContainerMain>
      <Banner>
        <h1>{values.titulo}</h1>
      </Banner>
      <Wrapper>
        <Container>
          <Autor>
            <figure>
              <img src={userImage} alt={username} />
            </figure>
            <AutorDatos>
              <h3>{values.nickname}</h3>
              <h6><span><img src="/images/clock.svg" alt="clock"/> {values.tiempoLectura}</span> mins</h6>
            </AutorDatos>
          </Autor>
          <Historia>
            <HistoriaImagen>
              <img src={values.imagenPortada.largeImageURL} alt={values.imagenPortada.tags}/>
            </HistoriaImagen>
            <HistoriaTexto>
              <p>
                {values.texto.replace("  ", "\n")}
              </p>
            </HistoriaTexto>
            <Valorar>
              <hr />
              {/* <h4>Valorá el texto</h4> */}
            </Valorar>
          </Historia>
          <AutorDescripcion>
            <img src={userImage} alt={username} />
            <AutorInfo>
              <span>Escrito por:</span>
              <h6>{values.nickname}</h6>
              <p>
                Escribo lo que veo y siento. Observar es el punto de partida
                para una buena historia.
                </p>
            </AutorInfo>
            {/* Estrellas */}
          </AutorDescripcion>
          <Accion>
            <Boton href={'/lista-historias'} backgroundColor={false} borderColor={true} colorText={true}> Volver a historias </Boton>
          </Accion>
        </Container>
      </Wrapper>
    </ContainerMain>
  )
}

export default HistoriaContainer;