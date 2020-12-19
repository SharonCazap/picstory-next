import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.amarilloDos)};
  background-image: url('../images/bannerImagenes.png');
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 29vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  h1{
    color: ${leerColor(colores.violeta)};
    font-family: 'Lora', serif;
    font-weight: 700;
    text-align: center;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    h1{
      width: 50%;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Container = styled.div` 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: horizontal; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: row; 
          flex-direction: row; 
  -webkit-box-pack: justify; 
  -ms-flex-pack: justify; 
          justify-content: space-between;
  width: 100%;
`;
export const Paginacion = styled.div` 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  margin: 20px auto 10px;
  width: 100%;
  button.Mui-selected{
    background-color: ${leerColor(colores.rosa)};
    color: ${leerColor(colores.blanco)};
  }
`;
export const Accion = styled.div` 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  margin: 40px auto 20px;
  width: 35%;
`;
export const Imagenes = styled.div`
  width: 100%; 
  margin: 40px 0; 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: horizontal; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: row; 
          flex-direction: row;
  -ms-flex-flow: row wrap;
      flex-flow: row wrap; 
  -ms-flex-pack: distribute; 
      justify-content: space-around;
`;
export const Coleccion = styled.div` 
  width: 100%; 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: vertical; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: column; 
          flex-direction: column;
  -ms-flex-flow: row wrap;
      flex-flow: row wrap; 
  -webkit-box-pack: justify; 
  -ms-flex-pack: justify; 
          justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center; 
  h2{
    width: 100%; 
    margin-bottom: 25px;
  }
  div:first-of-type{
    display: none;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    
  }
  @media (min-width: ${breakpoints.laptopL}) {
    div:first-of-type{
      display: block;
    }
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`; 
export const SeguirEscribiendo = styled.div` 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: vertical; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: column; 
          flex-direction: column;
  width: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  a div{
    display: -webkit-box!important;    
    display: -ms-flexbox!important;    
    display: flex!important;
  }
  .accion-seguir{
    text-align: center;
    margin-bottom: 40px;
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    -webkit-box-pack: justify;    
    -ms-flex-pack: justify;    
    justify-content: space-between; 
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 70%;
  }
  @media (min-width: ${breakpoints.notebook}) {
    width: 60%;
  }
`;