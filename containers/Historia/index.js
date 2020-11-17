import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Autor, AutorDatos, Historia, HistoriaTexto, Valorar, AutorDescripcion, AutorInfo, Accion } from './styles';
import { Wrapper, Boton } from '../../components';

function HistoriaContainer(props) {
  const { user } = props; 
  console.log("props: ", props.currentId)

  const { nickname: username } = user;
  const { picture: userImage } = user;
  console.log("user: ", user)

  const initialStateValues = {
    username: username,
    titulo: '',
    genero: '',
    descripcion: '',
    texto: ''
  };

  const [values, setValues] = useState(initialStateValues);

  const getHistoriaById = async (id) => {
    await firebaseDB.ref(`historias/${id}`).once('value', (snapshot) => {
      const miHistoriaArr = snapshot.val();
      console.log("miHistoriasArr: ", miHistoriaArr)
      setValues({...miHistoriaArr})
    })
  }

  useEffect(() => {
    console.log("editando id: ", props.currentId);
    getHistoriaById(props.currentId);
  }, [])

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
              <h3>{username}</h3>
              <h6><span>{values.tiempoLectura}</span> mins</h6>
            </AutorDatos>
          </Autor>
          <Historia>
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
            <img src={userImage} alt={username}/>
            <AutorInfo>
              <span>Escrito por:</span>
              <h6>{username}</h6>
              <p>
                Escribo lo que veo y siento. Observar es el punto de partida 
                para una buena historia. 
              </p>
            </AutorInfo>
            {/* Estrellas */}
          </AutorDescripcion>
          <Accion>
            <Boton href={'lista-historias'} backgroundColor={false} borderColor={true} colorText={true}> Volver a historias </Boton>
          </Accion>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default HistoriaContainer;