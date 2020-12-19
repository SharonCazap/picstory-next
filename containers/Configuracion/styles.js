import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerMain = styled.main`
  width: 100%;
`;
export const Banner = styled.div`
  background-color: ${leerColor(colores.naranjaTres)};
  width: 100%;
  height: 15vh;
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
    width: 50%;
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
export const Container = styled.div` 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: horizontal; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: row; 
          flex-direction: row; 
  width: 100%;
  margin-bottom: 40px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
`;
export const Configuracion = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  padding: 60px 0 0;
  width: 30%;
  h3{
    font-family: 'Lora', serif;
    font-size: 24px;
    color: ${leerColor(colores.violeta)};
    font-weight: 700;
    margin: 0 0 0.5em 0;;
  }
  select, textarea{
    padding: 0.5em 0.7em;
    margin: 0.5em 0;
    color: ${leerColor(colores.gris)};
    background: ${leerColor(colores.blanco)};
    border: 2px solid ${leerColor(colores.grisDos)};
    border-radius: 10px;
    font-family: 'Lora', serif;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    ::placeholder{
      color: ${leerColor(colores.grisDos)};
    }
  }
  textarea{
    resize: none;
    height: 260px;
  }
`;
export const ConfiguracionInfo = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  margin: 60px 0 0;
  padding: 0 40px 0;
  width: 100%;
  border-left: 2px solid ${leerColor(colores.violeta)};
  h3{
    margin: 0;
    color: ${leerColor(colores.violeta)};
  }
`;
export const UserData = styled.div` 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: vertical; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: column; 
          flex-direction: column; 
  width: 100%;
  margin-bottom: 40px; 
  div{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
            flex-direction: column;
    -ms-flex-flow: row wrap;
        flex-flow: row wrap;
    width: 100%;
    border-bottom: 1px solid ${leerColor(colores.gris)};
  }
  div h4{
    font-weight: 500;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
            justify-content: space-between;
    margin: 20px 0;
    width: 40%;
    color: ${leerColor(colores.violeta)};
  }
  div span{
    font-weight: 400;
    margin: 20px 0;
    width: 45%;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    div h4{
      width: 45%;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
export const Accion = styled.div` 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
          flex-direction: row;
  width: 45%;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  margin: 50px auto 0;
`;