import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.amarilloDos)};
  background-image: none;
  width: 100%;
  height: 10vh;
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
    font-size: 21px;
    font-family: 'Lora', serif;
    font-weight: 700;
    text-align: center;
    width: 90%;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    h1{
      width: 60%;
    }
  }
  @media (min-width: ${breakpoints.tablet}) {
    background-size: contain;
    background-image: url('../images/bannerHome.png');
    background-position: center;
    background-repeat: no-repeat;  
    height: 20vh;
  }
  @media (min-width: ${breakpoints.laptop}) {
    h1{
      font-size: 32px;
    } 
    height: 29vh;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    h1{
      font-size: 36px;
      width: 42%;
    }
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Container = styled.div` 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: vertical; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: column; 
          flex-direction: column; 
  -webkit-box-pack: justify; 
  -ms-flex-pack: justify; 
          justify-content: space-between;
  width: 100%;
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    -webkit-box-orient: horizontal; 
    -webkit-box-direction: normal; 
    -ms-flex-direction: row; 
    flex-direction: row; 
    -webkit-box-pack: justify; 
    -ms-flex-pack: justify; 
        justify-content: space-between;
  }
  @media (min-width: ${breakpoints.laptopL}) {

  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Historias = styled.div`
  margin: 40px 0; 
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
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
          align-items: baseline; 
  h2{
    width: 100%; 
    margin-bottom: 40px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 60%;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 70%;
  }
  @media (min-width: ${breakpoints.notebook}) {

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
  margin: 50px auto 0;
`;
export const Imagenes = styled.div`
  margin: 40px 0; 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column; 
  -ms-flex-flow: row wrap; 
      flex-flow: row wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
          align-items: baseline;
  h2{
    width: 100%; 
    margin-bottom: 40px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 35%;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 25%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const ImagenHome = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 20px;
  overflow: hidden;  
  margin: 10px;
  img{
    width: 100%;
    height: inherit;
    -o-object-fit: cover;
       object-fit: cover;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 200px;
    height: 200px; 
  }
  @media (min-width: ${breakpoints.laptop}) {
    margin: 0;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 145px;
    height: 145px;
  }
  @media (min-width: ${breakpoints.notebook}) {
    width: 170px;
    height: 170px;
  }
`;
export const ContinuarHistoria = styled.div` 
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
  -ms-flex-pack: distribute; 
      justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center; 
  margin-bottom: 60px; 
  h2{
    width: 100%; 
    margin-bottom: 25px;
  }
  h5{
    width: 100%;
    font-size: 18px; 
    font-weight: 300;
    margin: 0 0 40px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
  div:first-of-type{

  }
  div:nth-child(3){
    width: 50%;
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
`;