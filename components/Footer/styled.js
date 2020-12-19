import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Container = styled.footer`
  background-color: ${leerColor(colores.grisBlanco)};
  padding: 20px 0 20px;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  h4{
    color: ${leerColor(colores.gris)};
    font-size: 16px;
    font-weight: 300;
    margin: 12px 0;
  }
  a{
    color: ${leerColor(colores.violeta)};
    font-weight: 400;
  }
  a:hover{
    color: ${leerColor(colores.rosa)};
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
