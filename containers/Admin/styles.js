import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.amarilloDos)};
  background-image: url('../images/bannerHistorias.png');
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 29vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  h1{
    color: ${leerColor(colores.violeta)};
    font-family: 'Lora', serif;
    font-weight: 700;
    text-align: center;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    h1{
      width: 50%;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Container = styled.div` 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: vertical; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: column; 
          flex-direction: column; 
  -webkit-box-pack: justify; 
  -ms-flex-pack: justify; 
          justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;
export const Historias = styled.div`
  width: 100%; 
  margin: 40px 0; 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: vertical; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: column; 
          flex-direction: column;
  -ms-flex-flow: row wrap;
      flex-flow: row wrap;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
          align-items: baseline; 
  h2{
    width: 100%; 
    margin-bottom: 40px;
  }
`;
export const Paginacion = styled.div` 
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
  margin: 20px auto 10px;
  width: 100%;
  button.Mui-selected{
    background-color: ${leerColor(colores.rosa)};
    color: ${leerColor(colores.blanco)};
  }
`;
export const Accion = styled.div` 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  margin: 40px auto;
  @media (min-width: ${breakpoints.mobileGrande}) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
            justify-content: space-evenly;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 60%;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 35%;
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
