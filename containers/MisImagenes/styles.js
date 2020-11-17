import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.amarilloTres)};
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
  justify-content: space-between;
  width: 100%;
`;
export const Paginacion = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px auto 10px;
  width: 100%;
  button.Mui-selected{
    background-color: ${leerColor(colores.rosa)};
    color: ${leerColor(colores.blanco)};
  }
`;
export const Accion = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 40px auto 20px;
  width: 100%;
`;
export const Imagenes = styled.div`
  width: 100%; 
  margin: 40px 0; 
  display: flex; 
  flex-direction: row;
  flex-flow: row wrap; 
  justify-content: space-around;
`;
export const SeguirEscribiendo = styled.div` 
  display: flex; 
  flex-direction: column;
  width: 60%;
  flex-flow: row wrap;
  justify-content: space-between;
`;
export const Coleccion = styled.div` 
  width: 100%; 
  display: flex; 
  flex-direction: column;
  flex-flow: row wrap; 
  justify-content: space-between;
  align-items: center; 
  h2{
    width: 100%; 
    margin-bottom: 25px;
  }
`; 