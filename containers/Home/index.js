import React, { useState, useEffect } from 'react';

import { ContainerMain, Banner, Container, Historias, Imagenes, ImagenHome, SeguirEscribiendo, ContinuarHistoria, Accion } from './styles';
import { Wrapper, Titulo, CardLeerHistoria, Boton, Ilustracion, CardContinuarHistoria } from '../../components';

function HomeContainer() {
  // const [hasError, setErrors] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://pixabay.com/api/?key=6683953-b49e41bfa4dd17cb95038d82b')
      .then(res => res.json())
      .then(response => {
        setImages(response.hits);
        console.log(response);
      })
      .catch(error => {
        // setErrors(error);
        console.log(error);
      })
  }, []);

  console.log("images " + images);
  
  return (
    <ContainerMain>
      <Banner>
        <h1>Inspirate, creá tus propias historias y compartilas con la comunidad</h1>
      </Banner>
      <Wrapper>
        <Container>
          <Historias>
            <Titulo>
              Historias que iluminan
            </Titulo>
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              alt={'imageHistoria'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              alt={'imageHistoria'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              alt={'imageHistoria'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              alt={'imageHistoria'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              alt={'imageHistoria'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <CardLeerHistoria
              href={'historia'}
              image={'./images/history01.jpg'}
              alt={'imageHistoria'}
              tituloHistoria={'Sin fin de viajes en el subte D'}
              sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
              autor={'Tatiana Numerosky'}
            />
            <Accion>
              <Boton href={'lista-historias'} backgroundColor={true} borderColor={false} colorText={false}> Leer más </Boton>
            </Accion>
          </Historias>
          <Imagenes>
            <Titulo>
              Im&aacute;genes que inspiran
            </Titulo>
            {
              images.slice(0, 6).map(img => {
                return (
                  <ImagenHome key={img.id}>
                    <img src={img.largeImageURL} alt={img.tags} />
                  </ImagenHome>
                )
              })
            }
            {/* <span>Has Error: {hasError}</span> */}
            <Accion>
              <Boton href={'imagenes'} backgroundColor={true} borderColor={false} colorText={false}> Ver más </Boton>
            </Accion>
          </Imagenes>
        </Container>
        <Container>
          <ContinuarHistoria>
            <Titulo>
              Continuá donde dejaste
            </Titulo>
            <h5>Termina de escribir la historia y publicala.</h5>
            <Ilustracion image={'./images/ilustracionHistorias.png'} alt={'imageHistoriaContinuar'}/>
            <SeguirEscribiendo>
              <CardContinuarHistoria
                image={'./images/placeholderHistoria.png'}
                alt={'imageHistoria'}
                tituloHistoria={'Algún día te encontraré'}
                sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
                fecha={'hace 3 días'}
              />
              <Accion>
                <Boton backgroundColor={false} borderColor={true} colorText={true}> Continuar </Boton>
              </Accion>
            </SeguirEscribiendo>
          </ContinuarHistoria>
        </Container>

      </Wrapper>

    </ContainerMain>
  );
}
// class HomeContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: []
//     }
//   }

//   componentDidMount() {
//     this.fetchImages()
//   }

//   async fetchImages() {
//     try {
//       const response = await fetch(`https://pixabay.com/api/?key=6683953-b49e41bfa4dd17cb95038d82b`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       const json = await response.json();
//       console.log(json);
//       this.setState({
//         images: json.hits
//       });

//     } catch (error) {
//       console.log(error);
//     }
//   }

//   render() {
//     const { images } = this.state;
//     console.log('images:' + images);

//     // console.log('imgDestacada: ' + imgDestacada);
//     return (
//       <ContainerMain>
//         <Banner>
//           <h1>Inspirate, creá tus propias historias y compartilas con la comunidad</h1>
//         </Banner>
//         <Wrapper>
//           <Container>
//             <Historias>
//               <Titulo>
//                 Historias que iluminan
//               </Titulo>
//               <CardLeerHistoria
//                 image={'./images/history01.jpg'}
//                 tituloHistoria={'Sin fin de viajes en el subte D'}
//                 sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
//                 autor={'Tatiana Numerosky'}
//               />
//               <CardLeerHistoria
//                 image={'./images/history01.jpg'}
//                 tituloHistoria={'Sin fin de viajes en el subte D'}
//                 sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
//                 autor={'Tatiana Numerosky'}
//               />
//               <CardLeerHistoria
//                 image={'./images/history01.jpg'}
//                 tituloHistoria={'Sin fin de viajes en el subte D'}
//                 sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
//                 autor={'Tatiana Numerosky'}
//               />
//               <CardLeerHistoria
//                 image={'./images/history01.jpg'}
//                 tituloHistoria={'Sin fin de viajes en el subte D'}
//                 sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
//                 autor={'Tatiana Numerosky'}
//               />
//               <CardLeerHistoria
//                 image={'./images/history01.jpg'}
//                 tituloHistoria={'Sin fin de viajes en el subte D'}
//                 sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
//                 autor={'Tatiana Numerosky'}
//               />
//               <CardLeerHistoria
//                 image={'./images/history01.jpg'}
//                 tituloHistoria={'Sin fin de viajes en el subte D'}
//                 sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
//                 autor={'Tatiana Numerosky'}
//               />
//               <Accion>
//                 <Boton backgroundColor={true} borderColor={false} colorText={false}> Leer más </Boton>
//               </Accion>
//             </Historias>
//             <Imagenes>
//               <Titulo>
//                 Im&aacute;genes que inspiran
//               </Titulo>
//               {
//                 images.slice(0,6).map(img => {
//                   return (
//                     <ImagenHome key={img.id}> 
//                       <img src={img.largeImageURL} alt={img.tags}/>
//                     </ImagenHome>
//                   )
//                 })
//               }
//               <Accion>
//                 <Boton backgroundColor={true} borderColor={false} colorText={false}> Leer más </Boton>
//               </Accion>
//             </Imagenes>
//           </Container>
//           <Container>
//             <ContinuarHistoria>
//               <Titulo>
//                 Continuá donde dejaste
//             </Titulo>
//               <h5>Termina de escribir la historia y publicala.</h5>
//               <Ilustracion image={'./images/ilustracionHistorias.png'} />
//               <SeguirEscribiendo>
//                 <CardContinuarHistoria
//                   image={'./images/placeholderHistoria.png'}
//                   tituloHistoria={'Algún día te encontraré'}
//                   sinopsis={'Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar. Recopilar la mayor...'}
//                   fecha={'hace 3 días'}
//                 />
//                 <Accion>
//                   <Boton backgroundColor={false} borderColor={true} colorText={true}> Continuar </Boton>
//                 </Accion>
//               </SeguirEscribiendo>
//             </ContinuarHistoria>
//           </Container>

//         </Wrapper>

//       </ContainerMain>
//     );
//   }
// }

export default HomeContainer;