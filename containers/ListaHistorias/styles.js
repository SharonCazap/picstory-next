import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.amarilloDos)};
  background-image: url('../images/bannerHistorias.png');
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
  flex-direction: column; 
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;
export const Historias = styled.div`
  width: 100%; 
  margin: 40px 0; 
  display: flex; 
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: baseline; 
  h2{
    width: 100%; 
    margin-bottom: 40px;
  }
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
  width: 35%;
  margin: 40px auto;
`;
