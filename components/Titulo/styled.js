import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const TituloNombre = styled.h2`
  color: ${leerColor(colores.violeta)};
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 21px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  span{
    margin-right: 10px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 28px;
  }
  @media (min-width: ${breakpoints.laptopL}) {

  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
