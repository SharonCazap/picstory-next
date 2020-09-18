import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const NavLogIn = styled.div`
  background-color: ${leerColor(colores.blanco)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; 
  margin-bottom: 30px;
  ul{
    display: flex; 
    width: 100%; 
    justify-content: space-evenly;
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
export const Container = styled.div`
  display: flex;
  align-self: center; 
  flex-direction: column;
  width: 460px;

`;
export const FormularioLogIn = styled.div`
  padding: 40px;
  border-radius: 30px;
  box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2); 
  form{
    display: flex;
    flex-direction: column;
    width: 100%;    
    flex-flow: row wrap;
  }
  form div{
    width: 50%;
    display: flex; 
    flex-direction: column;
  }
  form h6{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${leerColor(colores.gris)};
    margin: 10px;
    width: 100%;
  }
`;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${leerColor(colores.gris)};
  background: ${leerColor(colores.grisBlanco)};
  border: none;
  border-radius: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  :nth-child(2){
    width: 80%;
  }
`;
export const Accion = styled.div` 
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  width: 100%!important;
  align-items: center;
  a:nth-child(2), a span{
    color: ${leerColor(colores.gris)};
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    margin-top: 20px;
    text-decoration: none;
  }
  a span{
    color: ${leerColor(colores.rosa)};
    font-weight: 700;
  }
`;