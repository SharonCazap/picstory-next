import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Card = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex; 
  flex-direction: row; 
  width: 470px;
  height: 220px;
  background-color: ${leerColor(colores.blanco)};
  border-radius: 20px; 
  box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2); 
  color: ${leerColor(colores.gris)};
  transition: 0.2s;
  figure{
    overflow: hidden; 
    border-radius: 20px 0 0 20px;
  }
  img{
    width: 100%;
  }
  :hover{
    transform: scale(1.05);
    transition: 0.2s;
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
export const Info = styled.div` 
  display: flex;
  flex-direction: column;
  margin: 15px 20px;
  justify-content: space-between; 
  h3{
    font-family: 'Lora', serif;
    font-weight: 700;
    font-size: 21px;
    color: ${leerColor(colores.violeta)};
  }
  p{
    font-size: 16px;
    line-height: 23px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
  span{
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
  }
`;
