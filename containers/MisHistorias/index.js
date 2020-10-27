import React, { useEffect, useState } from 'react';
import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, NavHistorias, EnProceso, Accion } from './styles';
import { Wrapper, CardContinuarHistoria, Boton } from '../../components';

function MisHistoriasContainer({ user }) {

  // Traigo las primeras 6 historias de la base de datos //
  const [misHistorias, setMisHistorias] = useState([]);
  const { name: username } = user;
  console.log("user: ", user)

  const getMisHistorias = async () => {
    firebaseDB.ref('historias').orderByChild('username').equalTo(username).once('value', (snapshot) => {
      const misHistoriasArr = [];
      snapshot.forEach((childSnapshot) => {
        misHistoriasArr.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      // historiasArr.reverse()
      console.log("getMisHistorias: ", misHistoriasArr);
      setMisHistorias(misHistoriasArr)
    })
  }

  useEffect(() => {
    getMisHistorias();
  }, []);

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
            {
              misHistorias.map(miHistoria => (
                <CardContinuarHistoria
                  key={miHistoria.id}
                  href={'historia'}
                  image={'./images/history01.jpg'}
                  alt={'./images/history01.jpg'}
                  tituloHistoria={miHistoria.titulo}
                  descripcion={miHistoria.descripcion}
                />
              ))
            }
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