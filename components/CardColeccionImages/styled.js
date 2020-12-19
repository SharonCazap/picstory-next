import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Card = styled.section` 
  /* cursor: pointer; */
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex; 
  -webkit-box-orient: vertical; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: column; 
          flex-direction: column; 
  -ms-flex-flow: row wrap; 
      flex-flow: row wrap;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 200px;
  background-color: ${leerColor(colores.blanco)};
  border-radius: 20px; 
  -webkit-box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2);  
  box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2);   
  color: ${leerColor(colores.gris)};
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  margin-bottom: 20px;
  :hover{
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  figure{
    margin: 10px 5px;
    width: 70px;
    height: 130px;
    img{
      width: 100%;
      height: inherit;
      -o-object-fit: cover;
         object-fit: cover;
      border-radius: 10px;
    }
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 550px;
    figure{
      margin: 10px;
      width: 100px;
      height: 150px;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {

  }
  @media (min-width: ${breakpoints.laptopL}) {

  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;
