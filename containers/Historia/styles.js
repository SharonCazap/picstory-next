import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.lila2)};
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
    width: 90%;
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
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;
export const Autor = styled.div`
  width: 100%; 
  margin: 40px 0; 
  display: flex; 
  justify-content: center;
  figure{
    width: 75px;
    height: 75px;
    margin: 0;
  }
  img{
    width: 100%;
    border-radius: 50%;
    border: 3px solid ${leerColor(colores.rosa)};
  }
`;
export const AutorDatos = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-evenly;
  padding-left: 20px;
  h3{
    width: 100%; 
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: ${leerColor(colores.gris)};
    margin: 0;
  }
  h6{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${leerColor(colores.gris)};
    margin: 0;
  }
`;
export const Historia = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  border-bottom: 1px solid ${leerColor(colores.grisDos)};
`;
export const HistoriaImagen = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  img{
    width: 100%;
    height: fit-content;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    img{
      width: 100%;
    }
  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const HistoriaTexto = styled.div`
  margin-bottom: 60px;
  p{
    font-size: 21px;
    font-family: 'Lora', serif;
    font-weight: 400;
    color: ${leerColor(colores.grisTres)};
    margin-bottom: 21px;
    white-space: pre-wrap;
  }
  i{
    display: block;
    width: 50%;
    color: ${leerColor(colores.grisTres)};
    font-size: 21px;
    margin-bottom: 21px;
    font-family: 'Lora', serif;
    font-weight: 400;
    margin-left: 50px;
  }
`;
export const Valorar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-flow: column;
  hr{
    width: 185px;
    border: none;
    margin-bottom: 20px;
    border-bottom: 3px solid ${leerColor(colores.violeta)};
  }
  h4{
    font-size: 21px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: ${leerColor(colores.gris)};
  }
`;
export const AutorDescripcion = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto 45px;
  align-items: center;
  img{
    width: 15%;
    border-radius: 50%;
    border: 3px solid ${leerColor(colores.rosa)};
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 100px 450px 100px;
    margin: 60px auto 45px;
    justify-items: center;
    img{
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
export const AutorInfo = styled.div`
  display: flex;
  flex-direction: column;
  span{
    font-family: 'Lora', serif;
    font-weight: 400;
    font-size: 18px;
    color: ${leerColor(colores.gris)};
    margin-bottom: 15px;
  }
  h6{
    font-size: 21px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin: 0 0 15px 0;
    color: ${leerColor(colores.gris)};
  }
  p{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${leerColor(colores.gris)};
    margin: 0;
  }
`;
export const Accion = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px auto 0;
`;