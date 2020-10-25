import React, { useEffect, useState } from 'react';
import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Historias, Accion } from './styles';
import { Wrapper, CardLeerHistoria, Boton } from '../../components';

// import { getHistorias } from '../../pages/api/historias';

function ListaHistoriasContainer() {
  const [historias, setHistorias] = useState([]);

  // const getData = async () => {
  //   try {
  //     const historiasList = await getHistorias();
  //     console.log("Dentro del getData historiasArr: ", historiasList);
  //     setHistorias(historiasList)
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  //   console.log("dentro del useEffect: ",historias)
  // }, []);
  // console.log("historiasArr: ", historias)

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
                  href={'historia'}
                  image={'./images/history01.jpg'}
                  tituloHistoria={historia.titulo}
                  descripcion={historia.descripcion}
                  autor={'Tatiana Numerosky'}
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