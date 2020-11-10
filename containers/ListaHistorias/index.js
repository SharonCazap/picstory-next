import React, { useEffect, useState } from 'react';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Historias, Accion } from './styles';
import { Wrapper, CardLeerHistoria, Boton } from '../../components';

function ListaHistoriasContainer({ user }) {

  // Traigo las historias de la base de datos //
  const [historias, setHistorias] = useState([]);

  const { nickname: username } = user;
  console.log("user: ", user)

  const getHistorias = async () => {
    firebaseDB.ref('historias').once('value', (snapshot) => {
      const historiasArr = [];
      snapshot.forEach((childSnapshot) => {
        historiasArr.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      console.log("getHistorias: ", historiasArr);
      setHistorias(historiasArr)
    })
  }

  useEffect(() => {
    getHistorias();
  }, []);

  return (
    <ContainerMain>
      <Banner>
        <h1>Historias que iluminan</h1>
      </Banner>
      <Wrapper>
        <Container>
          {/* Nav */}
          <Historias>
            {
              historias.map(historia => (
                <CardLeerHistoria
                  key={historia.id}
                  href={`historia/${historia.id}`}
                  image={'./images/history01.jpg'}
                  tituloHistoria={historia.titulo}
                  descripcion={historia.descripcion}
                  autor={username}
                />
              ))
            }
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