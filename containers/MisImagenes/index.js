import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Imagenes, Accion, Paginacion } from './styles';
import { Wrapper, Boton, CardImagen } from '../../components';

function MisImagenesContainer({ user }) {
  // Traigo mis historias de la base de datos //
  const [misImagenes, setMisImagenes] = useState([]);
  
  const { nickname: nickname } = user;
  // console.log("user: ", user)

  const getMisImagenes = async () => {
    firebaseDB.ref('imagenesMG').orderByChild('nickname').equalTo(nickname).once('value', (snapshot) => {
      const misImagenesArr = [];
      snapshot.forEach((childSnapshot) => {
        misImagenesArr.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      // historiasArr.reverse()
      // console.log("getMisImagenes: ", misImagenesArr);
      setMisImagenes(misImagenesArr)
    })
  }

  useEffect(() => {
    getMisImagenes();
  }, []);

  const onDeleteImage = async (id) => {
    if (window.confirm("¿Estas seguro que quieres elminiar esta imagen de tu colección?")) {
      await firebaseDB.ref(`imagenesMG/${id}`).remove();
      console.log("La imagen que elimino es la: ", id);
      getMisImagenes(); // Refrezco la página para ver las historias actualizadas una vez que se elimina //
    }
  }

  return (
    <ContainerMain>
      <Banner>
        <h1>Mis im&aacute;genes</h1>
      </Banner>
      <Wrapper>
        <Container>
          <Imagenes>
            {/* Nav */}
            {
              misImagenes.map(img => {
                return (
                  <CardImagen key={img.id}>
                    <img src={img.urlImage} alt={img.tagsImage} />
                    <button onClick={() => onDeleteImage(img.id)} className='deleteButton'>Eliminar imagen</button>
                  </CardImagen>
                )
              })
            }
            {/* <span>Has Error: {hasError}</span> */}

            {/* <Paginacion>
              <Pagination
                page={currentPage}
                count={imageCant}
                onChange={changePage}
              />
              {console.log("pag: ", currentPage)}
            </Paginacion> */}
            <Accion>
              {/* <Boton href={'imagenes'} backgroundColor={true} borderColor={false} colorText={false}> Ver más </Boton> */}
              <Boton href={'imagenes'} backgroundColor={false} borderColor={true} colorText={true}> Volver a im&aacute;genes </Boton>
            </Accion>
          </Imagenes>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default MisImagenesContainer;