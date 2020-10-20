import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.naranjaTres)};
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
`;
export const Configuracion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0 0;
  width: 30%;
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
`;
export const ConfiguracionInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0 0;
  padding: 0 40px 0;
  width: 70%;
  border-left: 2px solid ${leerColor(colores.violeta)};
  h3{
    margin: 0;
    color: ${leerColor(colores.violeta)};
  }
`;
export const Accion = styled.div` 
  display: flex;
  flex-direction: row;
  width: 45%;
  justify-content: space-evenly;
  margin: 50px auto 0;
`;