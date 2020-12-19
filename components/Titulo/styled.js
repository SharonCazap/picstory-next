import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const TituloNombre = styled.h2`
  color: ${leerColor(colores.violeta)};
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 21px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
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
