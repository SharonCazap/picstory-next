import React, { useEffect, useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useRouter } from 'next/router';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Historias, Accion, Paginacion } from './styles';
import { Wrapper, CardContinuarHistoria, Boton } from '../../components';

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

  const onDeleteHistoria = async (id) => {
    if (window.confirm("¿Estas seguro que quieres elminiar esta historia?")) {
      await firebaseDB.ref(`historias/${id}`).remove();
      console.log("La historia que elimino es la: ", id);
      getHistoriasNextPage(idHistoria, historiasCant); // Refrezco la página para ver las historias actualizadas una vez que se elimina //
    }
  }

  const router = useRouter();
  const onEditHistoria = (id) => {
    router.push({
      pathname: `historia/editar/${id}`,
      query: { pid: id },
    })
  }

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
        <h1>Administrar historias</h1>
      </Banner>
      <Wrapper>
        <Container>
          {/* Nav */}
          <Historias>
            {
              historias.map(historia => (
                <CardContinuarHistoria
                  key={historia.id}
                  // href={`historia/${miHistoria.id}`}
                >
                  <figure>
                    <img src={historia.imagenPortada.largeImageURL} alt={historia.imagenPortada.tags} />
                  </figure>
                  <div>
                    <h3>{historia.titulo}</h3>
                    <p>{historia.descripcion}</p>
                    <div>
                      <button onClick={() => onEditHistoria(historia.id)} className='editButton'></button>
                      <button onClick={() => onDeleteHistoria(historia.id)} className='deleteButton'></button>
                    </div>
                  </div>
                </CardContinuarHistoria>
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