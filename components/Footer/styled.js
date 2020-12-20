import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Container = styled.footer`
  background-color: ${leerColor(colores.grisBlanco)};
  padding: 20px 0 20px;
  -ms-flex-item-align: end;
      align-self: flex-end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
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
export const FooterContainer = styled.div`
  background-color: ${leerColor(colores.grisBlanco)};
  padding: 20px 0 20px;
  -ms-flex-item-align: end;
  align-self: flex-end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
          flex-direction: row;
  -ms-flex-flow: row wrap;
      flex-flow: row wrap;
  h4{
    color: ${leerColor(colores.gris)};
    font-size: 16px;
    font-weight: 300;
    margin: 12px 0;
    width: 100%;
  }
  a{
    color: ${leerColor(colores.violeta)};
    font-weight: 400;
  }
  a:hover{
    color: ${leerColor(colores.rosa)};
  }
  div{
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
            justify-content: center;
  }
  div a img{
    width: 25px;
    margin-left: 10px;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  div a img:hover{
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {
    h4{
      width: 50%;
    }
    div{
      width: 50%;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
              justify-content: flex-end;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {

  }

  @media (min-width: ${breakpoints.laptopL}) {

  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
