import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.lila3)};
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
  flex-direction: row; 
  width: 100%;
  margin-bottom: 40px;
  justify-content: space-between;
  form{
    width: 100%;
  }
`;
export const FormContent = styled.div` 
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const EscribirInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0 0;
  width: 100%;
  h3{
    font-family: 'Lora', serif;
    font-size: 24px;
    color: ${leerColor(colores.violeta)};
    font-weight: 700;
    margin: 0 0 0.5em 0;;
  }
  select, textarea{
    padding: 0.5em 0.7em;
    margin: 0.5em 0;
    color: ${leerColor(colores.gris)};
    background: ${leerColor(colores.blanco)};
    border: 2px solid ${leerColor(colores.grisDos)};
    border-radius: 10px;
    font-family: 'Lora', serif;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    ::placeholder{
      color: ${leerColor(colores.grisDos)};
    }
  }
  textarea{
    resize: none;
    height: 260px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 30%;
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Input = styled.input`
  padding: 0.5em 0.7em;
  margin: 1em 0;
  color: ${leerColor(colores.gris)};
  background: ${leerColor(colores.blanco)};
  border: 2px solid ${leerColor(colores.grisDos)};
  border-radius: 10px;
  font-family: 'Lora', serif;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  ::placeholder{
    color: ${leerColor(colores.grisDos)};
  }
`;
export const EscribirHistoria = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0 0;
  width: 100%;
  textarea{
    padding: 0.5em 0.7em;
    margin: 0.5em 0;
    color: ${leerColor(colores.gris)};
    background: ${leerColor(colores.blanco)};
    border: 2px solid ${leerColor(colores.grisDos)};
    border-radius: 10px;
    font-family: 'Lora', serif;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    resize: none;
    height: 520px;
    ::placeholder{
      color: ${leerColor(colores.grisDos)};
    }
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 55%;
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Imagenes = styled.div` 
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-evenly;
  margin: 50px auto 0;
  h3{
    width: 100%;
    font-family: 'Lora', serif;
    font-size: 24px;
    color: ${leerColor(colores.violeta)};
    font-weight: 700;
    margin: 0 0 0.5em 0;;
  }
`;
export const CardImagen = styled.div` 
  text-decoration: none;
  display: flex; 
  flex-direction: column;
  flex-flow: row wrap;
  width: 100px;
  height: 150px;
  border-radius: 20px;     
  margin: 40px 10px;
  /* img:hover{
    transform: scale(1.05);
    transition: 0.2s;
  } */
  img{
    width: 100%;
    height: inherit;
    object-fit: cover;
    border-radius: 20px;
    transition: 0.2s;
  }
  div{
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    width: 100%;
  }
  div button {
    border-radius: 20px;
    border: 2px solid ${leerColor(colores.rosa)};
    background-color: transparent;
    color: ${leerColor(colores.rosa)};
    padding: 10px;
    margin: 10px;
    cursor: pointer;
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
export const Paginacion = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 100px auto 10px;
  width: 100%;
  button.Mui-selected{
    background-color: ${leerColor(colores.rosa)};
    color: ${leerColor(colores.blanco)};
  }
`;
export const Accion = styled.div` 
  display: flex;
  flex-direction: row;
  width: 45%;
  justify-content: space-evenly;
  margin: 50px auto 0;
  button{
    cursor: pointer; 
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
    width: fit-content;
    padding: 10px 52px;
    border-radius: 30px; 
    background-color: ${leerColor(colores.rosa)};
    border: 2px solid transparent;
    color: ${leerColor(colores.blanco)};
    @media (min-width: ${breakpoints.mobileGrande}) {

    }
    @media (min-width: ${breakpoints.tablet}) {
      
    }
    @media (min-width: ${breakpoints.laptop}) {
      padding: 10px 45px;
    }
    @media (min-width: ${breakpoints.laptopL}) {
      
    }
    @media (min-width: ${breakpoints.notebook}) {

    }
  }
`;