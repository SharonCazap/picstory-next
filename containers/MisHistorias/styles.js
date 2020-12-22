import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.naranjaDos)};
  width: 100%;
  height: 15vh;
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
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: vertical; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: column; 
          flex-direction: column; 
  width: 100%;
  margin-bottom: 40px;
`;
export const NavHistorias = styled.div`
  background-color: ${leerColor(colores.blanco)};
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 60px 0;
  ul{
    display: -webkit-box; 
    display: -ms-flexbox; 
    display: flex; 
    width: 25%; 
    -webkit-box-pack: justify; 
    -ms-flex-pack: justify; 
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
  width: 100%;
  div{
    width: 45%; 
    margin-bottom: 40px;
  }
  a{
    cursor: auto;
  }
  .leerHistoria{
    cursor: pointer;
    color: ${leerColor(colores.rosa)};
    background-color: transparent;
    border: none;
    transition: 0.2s;
  }
  .leerHistoria:hover{
    transform: scale(1.2);
    font-weight: 600;
    transition: 0.2s;
  }
`;
export const Accion = styled.div` 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  margin: 40px auto;
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
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