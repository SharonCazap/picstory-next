import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.blanco)};
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    width: 80%;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    h1{
      font-size: 32px;
    }
    width: 60%;
    height: 12vh;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    h1{
      font-size: 36px;
    }
    width: 50%;
    height: 15vh;
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
export const ImagenesInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: space-between;
  flex-flow: row wrap;  
  h2{
    display: block;
    width: 100%; 
    font-size: 21px;
    font-family: 'Lora', serif;
    font-weight: 700;
    color: ${leerColor(colores.violeta)};
    margin-bottom: 40px;
  }
  p{
    background-color: ${leerColor(colores.lila3)};
    color: ${leerColor(colores.gris)};
    border-radius: 20px;
    padding: 40px 30px;
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
  img{
    border-radius: 20px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    div{
      width: auto;
    }
    div:nth-of-type(2){
      width: 100%;
      justify-content: center;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    h2{
      font-size: 28px;
    }
    div:first-of-type{
      width: 50%;
    }
    div:nth-of-type(2){
      width: 50%;
      figure{
        padding: 0 5% 0;
      }
    }
  }
  @media (min-width: ${breakpoints.laptopL}) {
    div:first-of-type{
      width: 50%;
    }
    div:nth-of-type(2){
      width: auto;
      figure{
        padding: 0;
      }
    }
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
export const HrHome = styled.div` 
  background-image: url('../images/hrHome.png');
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    height: 29vh;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Espacio = styled.div` 
  width: 100%;
  margin: 40px 0;
  display: flex;
  align-items: center;
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: ${breakpoints.laptop}) {

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
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  } 
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    div:first-of-type{
      width: 100%;
      justify-content: center;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    h2{
      font-size: 28px;
    }
    div:first-of-type{
      width: 50%;
      justify-content: center;
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
export const BotonDonar = styled.div` 
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 40px 0 60px;
  h3{
    font-weight: 500;
    font-size: 18px;
    width: 35%;
    color: ${leerColor(colores.rosa)};
    text-align: center;
    margin-bottom: 0;
  }
  p{
    margin: 0;
    padding: 20px;
    font-size: 16px;
  }
  a{
    background-color: #009ee3;
    color: ${leerColor(colores.blanco)};
    padding: 15px 45px;
    border-radius: 5px;
    transition: 0.2s;
    font-weight: 500;
    width: fit-content;
  }
  a:hover{
    background-color: #007eb5;
    transition: 0.2s;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    div:first-of-type{
      width: 100%;
      justify-content: center;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    h2{
      font-size: 28px;
    }
    div:first-of-type{
      width: 50%;
      justify-content: center;
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