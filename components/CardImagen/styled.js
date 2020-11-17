import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Card = styled.div` 
  text-decoration: none;
  display: flex; 
  flex-direction: column;
  flex-flow: row wrap;
  width: 340px;
  height: 200px;
  border-radius: 20px;     
  margin: inherit;
  img:hover{
    transform: scale(1.05);
    transition: 0.2s;
  }
  img{
    width: 100%;
    height: inherit;
    object-fit: cover;
    border-radius: 20px;
    transition: 0.2s;
  }
  div{
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    width: 100%;
  }
  div button {
    border-radius: 20px;
    border: 2px solid ${leerColor(colores.rosa)};
    background-color: transparent;
    color: ${leerColor(colores.rosa)};
    padding: 10px;
    margin: 10px;
    cursor: pointer;
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