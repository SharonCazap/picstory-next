import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Card = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex; 
  flex-direction: row; 
  width: 100%;
  height: 220px;
  background-color: ${leerColor(colores.blanco)};
  border-radius: 20px; 
  box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2); 
  color: ${leerColor(colores.gris)};
  transition: 0.2s;
  margin-bottom: 40px;
  figure{
    overflow: hidden; 
    border-radius: 20px 0 0 20px;
    margin: 0;
    width: 30%;
  }
  img{
    width: 100%;
    object-fit: cover;
    height: -webkit-fill-available;
  }
  :hover{
    transform: scale(1.05);
    transition: 0.2s;
  }
  div{ 
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 15px 20px;
    justify-content: space-between; 
    h3{
      font-family: 'Lora', serif;
      font-weight: 700;
      font-size: 21px;
      color: ${leerColor(colores.violeta)};
      margin: 0;
    }
    p{
      font-size: 16px;
      line-height: 23px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      margin: 0;
    }
    div{ 
      margin: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      flex-flow: row wrap;
    }
    span{
      font-size: 14px;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
    }
    span:first-of-type{
      width: 70%;
    }
    span:last-of-type{
      width: 30%;
      text-align: right;
    }
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 425px;
  }
  @media (min-width: ${breakpoints.notebook}) {
    width: 470px;
  }
`;
export const Info = styled.div` 
  
`;
