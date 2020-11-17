import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, Imagenes, SeguirEscribiendo, Coleccion, Accion, Paginacion } from './styles';
import { Wrapper, Titulo, Boton, Ilustracion, CardColeccionImages, CardImagen } from '../../components';

function ImagenesContainer({ user }) {
  // const [hasError, setErrors] = useState(false);
  const [images, setImages] = useState([]);

  const { name: username } = user;
  console.log("user: ", username)

  // Paginacion imagenes //
  const imageCant = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const fetchImages = async (imageCant, pageNumber) => {
    await fetch(`https://pixabay.com/api/?key=6683953-b49e41bfa4dd17cb95038d82b&page=${pageNumber}&per_page=${imageCant}`)
      .then(res => res.json())
      .then(response => {
        setImages(response.hits);
        console.log(response);
      })
      .catch(error => {
        // setErrors(error);
        console.log(error);
      })
  }

  useEffect(() => {
    fetchImages(imageCant, currentPage);
    console.log("hago fetch");
  }, [currentPage]);

  // console.log("images " + images);

  const changePage = async (event, pageNumber) => {
    console.log("page actual: ", pageNumber)
    fetchImages(imageCant, pageNumber);
    setCurrentPage(pageNumber);
  };

  const initialStateImage = {
    username: username,
    urlImage: '',
    tagsImage: '',
  };
  const [valuesImage, setValuesImage] = useState(initialStateImage);

  const handleSubmit = async (largeImageURL, imageTags) => {
    console.log("agrego imagen a la base")
    console.log(largeImageURL, imageTags);
    setValuesImage({ ...valuesImage, urlImage:largeImageURL, tagsImage:imageTags});
    addImage(valuesImage);
    console.log("DB: ", valuesImage);
    // setValuesImage({ ...initialStateImage }); // para que al agregar datos, los input se limpien //
  }

  const addImage = async (req) => {
    try {
      //Agrego document en la collection de historias (usando firebase con async/await)
      const responseKey = await firebaseDB.ref('imagenesMG').push({
        username: req.username,
        urlImage: req.urlImage,
        tagsImage: req.tagsImage,
      }).getKey()

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setValuesImage({ ...initialStateImage});
  }, [])

  return (
    <ContainerMain>
      <Banner>
        <h1>Imágenes que inspiran</h1>
      </Banner>
      <Wrapper>
        <Container>
          <Imagenes>
            {/* Nav */}
            {
              images.map(img => {
                return (
                  <CardImagen key={img.id}>
                    <img src={img.largeImageURL} alt={img.tags} />
                    <div>
                      <button onClick={() => handleSubmit(img.largeImageURL, img.tags)}>Guardar imagen</button>
                    </div>
                  </CardImagen>
                )
              })
            }
            {/* <span>Has Error: {hasError}</span> */}

            <Paginacion>
              <Pagination
                page={currentPage}
                count={imageCant}
                onChange={changePage}
              />
              {console.log("pag: ", currentPage)}
            </Paginacion>
            <Accion>
              {/* <Boton href={'imagenes'} backgroundColor={true} borderColor={false} colorText={false}> Ver más </Boton> */}
              <Boton href={'lista-historias'} backgroundColor={false} borderColor={true} colorText={true}> Volver a historias </Boton>
            </Accion>
          </Imagenes>

        </Container>
        <Container>
          <Coleccion>
            <Titulo>
              Mi colecci&oacute;n
            </Titulo>
            <Ilustracion image={'./images/ilustracionColeccion.png'} />
            <SeguirEscribiendo>
              <CardColeccionImages
                href={'/'}
                image01={'./images/placeholderHistoria.png'}
                image02={'./images/placeholderHistoria.png'}
                image03={'./images/placeholderHistoria.png'}
                coleccion={'Paisajes'}
              />
              <CardColeccionImages
                href={'/'}
                image01={'./images/placeholderHistoria.png'}
                image02={'./images/placeholderHistoria.png'}
                image03={'./images/placeholderHistoria.png'}
                coleccion={'Música'}
              />
              <Accion>
                <Boton backgroundColor={false} borderColor={true} colorText={true}> Agregar </Boton>
              </Accion>
            </SeguirEscribiendo>
          </Coleccion>
        </Container>

      </Wrapper>

    </ContainerMain>
  );
}

export default ImagenesContainer;