import React, { useState, useEffect } from 'react';

import { firebase } from '../../lib';
const firebaseDB = firebase.database();

import { ContainerMain, Banner, Container, FormContent, EscribirInfo, Input, EscribirHistoria, Accion } from './styles';
import { Wrapper, Boton } from '../../components';

function EscribirHistoriaContainer( props ) {
  const { user } = props; 
  console.log("props: ", props.currentId)

  const { name: username } = user;
  console.log("user: ", username)
  
  const initialStateValues = {
    username: username,
    titulo: '',
    genero: '',
    descripcion: '',
    texto: ''
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  }

  const handleSubmit = e => {
    e.preventDefault(); //  no recarga la pagina después de guardar //
    // console.log(values); 
    props.addOrEditHistoria(values, props.currentId);
    setValues({...initialStateValues}); // para que al agregar datos, los input se limpien //
  }

  const getHistoriaById = async (id) => {
    await firebaseDB.ref(`historias/${id}`).once('value', (snapshot) => {
      const miHistoriaArr = snapshot.val();
      console.log("miHistoriasArr: ", miHistoriaArr)
      setValues({...miHistoriaArr})
    })
  }

  useEffect(() => {
    if(props.currentId === ""){
      setValues({...initialStateValues});
    } else {
      console.log("editando id: ", props.currentId);
      getHistoriaById(props.currentId);
    }
  }, [props.currentId])

  return (
    <ContainerMain>
      <Banner>
        <h1>Escribe tu historia</h1>
      </Banner>
      <Wrapper>
        <Container>
          <form onSubmit={handleSubmit} method='POST'>
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
                  <option value="Acci&oacute;on">Acci&oacute;n</option>
                  <option value="Aventura">Aventura</option>
                  <option value="Cl&aacute;sicas">Cl&aacute;sicas</option>
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
                >
                </textarea>
              </EscribirHistoria>
            </FormContent>

            <Accion>
              <Boton href={'mis-historias'} backgroundColor={false} borderColor={true} colorText={true}> Continuar despu&eacute;s </Boton>
              <button>{props.currentId === "" ? 'Publicar' : 'Actualizar'}</button>
            </Accion>
          </form>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default EscribirHistoriaContainer;