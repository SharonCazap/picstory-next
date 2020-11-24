import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Card = styled.section` 
  /* cursor: pointer; */
  display: flex; 
  flex-direction: column; 
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: ${leerColor(colores.blanco)};
  border-radius: 20px; 
  box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2); 
  color: ${leerColor(colores.gris)};
  transition: 0.2s;
  margin-bottom: 20px;
  :hover{
    transform: scale(1.05);
    transition: 0.2s;
  }
  figure{
    margin: 10px 5px;
    width: 70px;
    height: 130px;
    img{
      width: 100%;
      height: inherit;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 550px;
    figure{
      margin: 10px;
      width: 100px;
      height: 150px;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {

  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
