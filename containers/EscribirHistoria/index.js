import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, FormContent, EscribirInfo, Input, EscribirHistoria, Imagenes, CardImagen, Paginacion, Accion } from './styles';
import { Wrapper, Boton } from '../../components';

function EscribirHistoriaContainer(props) {
  const { user } = props;
  // console.log("props: ", props.currentId)
  const { name: username } = user;
  const { nickname: nickname } = user;
  // console.log("user: ", username, nickname)

  const [wordCount, setWordCount] = useState(0);

  const initialStateValues = {
    username: username,
    nickname: nickname,
    titulo: '',
    genero: '',
    descripcion: '',
    texto: '',
    palabras: '',
    tiempoLectura: '',
    imagenPortada: [],
  };
  const [values, setValues] = useState(initialStateValues);

  const [imagePortada, setImagePortada] = useState([]);
  const handleImageSubmit = (e, largeImageURL, tags) => {
    e.preventDefault();
    console.log("url: ", largeImageURL, " tags: ", tags);
    const imagePortada = {
      largeImageURL: largeImageURL,
      tags: tags
    }
    setImagePortada(imagePortada);
    console.log(imagePortada);
  }

  const tiempoLectura = Math.round(wordCount * 10 / 2500);
  const limit = 2500;

  // console.log(initialStateValues)
  const handleInputChange = e => {
    const { name, value } = e.target;

    const text = value.split(' ');
    console.log("value: ", text)
    if (text.filter(Boolean).length > limit) {
      console.log("supero el limite")
      e.preventDefault();
    } else {
      setWordCount(text.filter(Boolean).length)
      console.log(wordCount);
    }
    setValues({ ...values, [name]: value, palabras: wordCount, tiempoLectura: tiempoLectura, imagenPortada: imagePortada });
  }

  const handleSubmit = e => {
    e.preventDefault(); // no recarga la pagina después de guardar //
    console.log(values, wordCount);
    props.addOrEditHistoria(values, props.currentId);
    setValues({ ...initialStateValues }); // para que al agregar datos, los input se limpien //
  }

  const getHistoriaById = async (id) => {
    await firebaseDB.ref(`historias/${id}`).once('value', (snapshot) => {
      const miHistoriaArr = snapshot.val();
      console.log("miHistoriasArr: ", miHistoriaArr)
      setValues({ ...miHistoriaArr })
    })
  }

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      console.log("editando id: ", props.currentId);
      getHistoriaById(props.currentId);
    }
  }, [props.currentId])

  // Paginacion imagenes //
  const [images, setImages] = useState([]);
  const imageCant = 10;
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



  return (
    <ContainerMain>
      <Banner>
        <h1>Escribe tu historia</h1>
      </Banner>
      <Wrapper>
        <Container>
          <form onSubmit={handleSubmit} method='POST'>
            <Imagenes>
              <h3>Elegí im&aacute;gen de portada</h3>
              {
                images.map(img => {
                  return (
                    <CardImagen key={img.id}>
                      <img src={img.largeImageURL} alt={img.tags} />
                      <div>
                        <button onClick={(e) => handleImageSubmit(e, img.largeImageURL, img.tags)}>Elegir portada</button>
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
            </Imagenes>
            <FormContent>
              <EscribirInfo>
                <h3>Titulo</h3>
                <Input
                  type='text'
                  name='titulo'
                  placeholder='Titulo de la historia'
                  onChange={handleInputChange}
                  value={values.titulo}
                />
                <h3>G&eacute;nero</h3>
                <select
                  name='genero'
                  onChange={handleInputChange}
                  value={values.genero}
                >
                  <option value="Acci&oacute;n">Acci&oacute;n</option>
                  <option value="Aventura">Aventura</option>
                  <option value="Cl&aacute;sica">Cl&aacute;sica</option>
                  <option value="Fantas&iacute;a">Fantas&iacute;a</option>
                  <option value="Ficci&oacute;n">Ficci&oacute;n</option>
                  <option value="Romance">Romance</option>
                </select>
                <h3>Descripci&oacute;n</h3>
                <textarea
                  name='descripcion'
                  placeholder='Descripci&oacute;n / Sinopsis de la historia'
                  onChange={handleInputChange}
                  value={values.descripcion}
                >
                </textarea>
              </EscribirInfo>
              <EscribirHistoria>
                <textarea
                  name='texto'
                  placeholder='Comienza a escribir tu historia'
                  onChange={handleInputChange}
                  value={values.texto}
                  limit={limit}
                  onKeyPress={handleInputChange}
                >
                </textarea>
                <p>
                  {wordCount}/{limit}
                </p>
              </EscribirHistoria>
            </FormContent>
            <Accion>
              {/* <Boton href={'mis-historias'} backgroundColor={false} borderColor={true} colorText={true}> Continuar despu&eacute;s </Boton> */}
              <button>{props.currentId === "" ? 'Publicar' : 'Actualizar'}</button>
            </Accion>
          </form>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default EscribirHistoriaContainer;