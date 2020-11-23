import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.naranjaDos)};
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    color: ${leerColor(colores.violeta)};
    font-family: 'Lora', serif;
    font-weight: 700;
    text-align: center;
    width: 50%;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Container = styled.div` 
  display: flex; 
  flex-direction: column; 
  width: 100%;
  margin-bottom: 40px;
`;
export const NavHistorias = styled.div`
  background-color: ${leerColor(colores.blanco)};
  width: 100%;
  display: flex;
  margin: 60px 0;
  ul{
    display: flex; 
    width: 25%; 
    justify-content: space-between;
  }
  ul li{
    list-style-type: none; 
    padding-bottom: 10px;
    border-bottom: none;
  }
  .activo{
    border-bottom: 3px solid ${leerColor(colores.violeta)};
    a{
      color: ${leerColor(colores.violeta)};
    }
  }
  ul li a{
    cursor: pointer; 
    text-decoration: none;
    font-family: 'Lora', serif;
    font-weight: 700;
    font-size: 24px;
    color: ${leerColor(colores.gris)};
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const EnProceso = styled.div` 
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  div{
    width: 45%; 
    margin-bottom: 40px;
  }
`;
export const Accion = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 60%;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 35%;
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;