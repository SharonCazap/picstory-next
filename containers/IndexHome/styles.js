import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.blanco)};
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    color: ${leerColor(colores.violeta)};
    font-size: 24px;
    font-family: 'Lora', serif;
    font-weight: 700;
    text-align: center;
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    width: 80%;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 36px;
    width: 42%;
    height: 29vh;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Container = styled.div` 
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
  width: 100%;
`;

export const Imagenes = styled.div`
  width: 100%; 
  margin: 40px 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    width: 100%; 
    font-size: 21px;
    font-family: 'Lora', serif;
    font-weight: 700;
    color: ${leerColor(colores.violeta)};
    margin-bottom: 40px;
  }
  img{
    width: 70%;
    border-radius: 20px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    h2{
      font-size: 32px;
    }
    img{
      width: 40%;
    }
  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const ImagenesInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;    
  div{
    width: 70%;
  }
  p{
    background-color: ${leerColor(colores.lila3)};
    color: ${leerColor(colores.gris)};
    border-radius: 20px;
    padding: 40px 30px;
    font-size: 21px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 65%;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Accion = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px auto 0;
`;
export const Espacio = styled.div` 
  width: 100%;
  margin: 40px 0;
  display: flex;
  align-items: center;
  
`;
export const HrHome = styled.div` 
  background-image: url('../images/hrHome.png');
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    height: 29vh;
    flex-direction: row;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const EspacioInfo = styled.div` 
  display: flex;
  flex-flow: row wrap; 
  justify-content: space-between; 
  h2{
    width: 100%; 
    font-size: 21px;
    font-family: 'Lora', serif;
    font-weight: 700;
    color: ${leerColor(colores.violeta)};
    margin-bottom: 40px;
  }
  div:nth-child(3){
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  p{
    background-color: ${leerColor(colores.amarilloTres)};
    color: ${leerColor(colores.gris)};
    border-radius: 20px;
    padding: 40px 30px;
    font-size: 21px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  } 
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    h2{
      font-size: 32px;
    }
    div:nth-child(3){
      width: 50%;
    }
  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`; 