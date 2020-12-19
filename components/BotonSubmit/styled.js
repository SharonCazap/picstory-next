import styled, { css } from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const BotonAccion = styled.button` 
  cursor: pointer; 
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 10px 52px;
  border-radius: 30px; 
  background-color: ${props => (props.backgroundColor ? leerColor(colores.rosa) : '')}!important;
  border: 2px solid ${props => (props.borderColor ? leerColor(colores.rosa) : '')};
  color: ${props => (props.colorText ? leerColor(colores.rosa) : leerColor(colores.blanco))}!important;
  /* ${props =>
    props.isBotonRosa &&
    css`
      width: fit-content;
      margin: 0 auto;
      border: 1px solid ${leerColor(colores.rosa)};
      background-color: ${leerColor(colores.blanco)};
      color: ${leerColor(colores.rosa)};
      font-size: 0.6em;
      font-weight: 600;
      padding: 0.7em 1em 0.7em 1em;
      @media (max-width: ${breakpoints.laptop}) {
        height: fit-content;
        margin: 0;
      }
    `} */
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 10px 45px;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
