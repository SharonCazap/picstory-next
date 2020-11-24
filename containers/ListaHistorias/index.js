import React, { useEffect, useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Historias, Accion, Paginacion } from './styles';
import { Wrapper, CardLeerHistoria, Boton } from '../../components';

function ListaHistoriasContainer({ user }) {

  // Traigo las historias de la base de datos //
  const [historias, setHistorias] = useState([]);

  // const { nickname: username } = user;
  console.log("user: ", user)

  // Paginacion Historias //
  const historiasCant = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const idHistoria = '-';

  const getHistoriasNextPage = async (idHistoria, historiasCant) => {
    await firebaseDB.ref('historias').orderByKey().startAt(idHistoria).limitToFirst(historiasCant).once('value', (snapshot) => {
      const historiasArr = [];
      console.log("cant max: ", snapshot.numChildren())
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
  
  const getHistoriasPreviousPage = async (idHistoria, historiasCant) => {
    await firebaseDB.ref('historias').orderByKey().endAt(idHistoria).limitToFirst(historiasCant).once('value', (snapshot) => {
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
    getHistoriasNextPage(idHistoria, historiasCant);
    console.log("id UseEffect: ", idHistoria)
  }, []);

  const changePage = async (event, pageNumber) => {
    console.log("page actual: ", pageNumber)      
    const idHistoria = historias[historias.length-1].id;

    if(pageNumber >= currentPage){    
      console.log("buscando next: ", idHistoria)
      getHistoriasNextPage(idHistoria, historiasCant);
    } 
    if(pageNumber < currentPage){
      console.log("buscando prev: ", idHistoria)
      getHistoriasPreviousPage(idHistoria, historiasCant);
    }
    setCurrentPage(pageNumber);
  };

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
            <Paginacion>
              <Pagination
                page={currentPage}
                count={2}
                onChange={changePage}
              />
              {console.log("pag: ", currentPage)}
            </Paginacion>
          </Historias>
          <Accion>
            {/* <Boton href={'lista-historias'} backgroundColor={true} borderColor={false} colorText={false}> Leer más </Boton> */}
            <Boton href={'imagenes'} backgroundColor={false} borderColor={true} colorText={true}> Ver imágenes </Boton>
          </Accion>

          {/* Paginacion */}
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default ListaHistoriasContainer;