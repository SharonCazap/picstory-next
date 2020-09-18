import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.amarilloDos)};
  background-image: url('../images/bannerHome.png');
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
    width: 30%;
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
export const Historias = styled.div`
  width: 70%; 
  margin: 40px 0; 
  display: flex; 
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline; 
  h2{
    width: 100%; 
    margin-bottom: 40px;
  }
`;
export const Accion = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px auto 0;
`;
export const Imagenes = styled.div`
  width: 25%; 
  margin: 40px 0; 
  display: flex; 
  flex-direction: column; 
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
  h2{
    width: 100%; 
    margin-bottom: 40px;
  }
`;
export const ImagenHome = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 20px;
  overflow: hidden;
  img{
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
`;
export const ContinuarHistoria = styled.div` 
  width: 100%; 
  display: flex; 
  flex-direction: column;
  flex-flow: row wrap; 
  justify-content: space-around;
  align-items: center; 
  margin: 40px 0 60px; 
  h2{
    width: 100%; 
    margin-bottom: 25px;
  }
  h5{
    width: 100%;
    font-size: 18px; 
    font-weight: 300;
    margin-bottom: 50px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
`; 
export const SeguirEscribiendo = styled.div` 
  display: flex; 
  flex-direction: column;
`;