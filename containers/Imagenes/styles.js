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
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    color: ${leerColor(colores.violeta)};
    font-family: 'Lora', serif;
    font-weight: 700;
    text-align: center;
    width: 26%;
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
export const Accion = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 40px auto;
  width: 35%;
`;
export const Imagenes = styled.div`
  width: 100%; 
  margin: 40px 0; 
  display: flex; 
  flex-direction: row;
  flex-flow: row wrap; 
  justify-content: space-between;
`;
export const Imagen = styled.div`
  width: 340px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  margin: inherit;
  img{
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
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
