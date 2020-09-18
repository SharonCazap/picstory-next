import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Card = styled.div` 
  display: flex; 
  flex-direction: row; 
  width: 500px;
  height: 220px;
  background-color: ${leerColor(colores.blanco)};
  border-radius: 20px; 
  box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2); 
  figure{
    width: 200px;
    height: 220px;
    border-radius: 20px 0 0 20px;
    overflow: hidden;
  }
  img{
    width: 100%;
    height: inherit;
    object-fit: cover;
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
  width: fit-content;
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
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
  }
`;
