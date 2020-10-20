import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Card = styled.a` 
  cursor: pointer;
  text-decoration: none;
  display: flex; 
  flex-direction: column; 
  justify-content: space-evenly;
  width: 100%;
  height: 250px;
  background-color: ${leerColor(colores.blanco)};
  border-radius: 20px; 
  box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2); 
  color: ${leerColor(colores.gris)};
  transition: 0.2s;
  margin-bottom: 40px;
  :hover{
    transform: scale(1.05);
    transition: 0.2s;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 400px;
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {

  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Images = styled.div` 
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 15px;
  img{
    width: 22%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
export const Info = styled.div` 
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 20px;
  margin-top: 10px;
  border-top: 1px solid ${leerColor(colores.rosa)};
  h3{
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: ${leerColor(colores.rosa)};
    margin: 0 20px;
  }
`;
