import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, NavHistorias, EnProceso, Accion } from './styles';
import { Wrapper, CardContinuarHistoria, Boton } from '../../components';

function MisHistoriasContainer({ user }) {

  // Traigo las historias de la base de datos //
  const [misHistorias, setMisHistorias] = useState([]);
  
  const { name: username } = user;
  // console.log("user: ", user)

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
      // console.log("getMisHistorias: ", misHistoriasArr);
      setMisHistorias(misHistoriasArr)
    })
  }

  useEffect(() => {
    getMisHistorias();
  }, []);

  const onDeleteHistoria = async (id) => {
    if (window.confirm("¿Estas seguro que quieres elminiar esta historia?")) {
      await firebaseDB.ref(`historias/${id}`).remove();
      console.log("La historia que elimino es la: ", id);
      getMisHistorias(); // Refrezco la página para ver las historias actualizadas una vez que se elimina //
    }
  }

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
                  // href={`historia/${miHistoria.id}`}
                >
                  <figure>
                    <img src={'./images/history01.jpg'} alt={'./images/history01.jpg'} />
                  </figure>
                  <div>
                    <h3>{miHistoria.titulo}</h3>
                    <p>{miHistoria.descripcion}</p>
                    <div>
                      <button onClick={() => onEditHistoria(miHistoria.id)} className='editButton'></button>
                      <button onClick={() => onDeleteHistoria(miHistoria.id)} className='deleteButton'></button>
                    </div>
                  </div>
                </CardContinuarHistoria>
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