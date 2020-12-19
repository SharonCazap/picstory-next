import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Card = styled.div` 
  text-decoration: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; 
  -webkit-box-orient: vertical; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: column; 
          flex-direction: column;
  -ms-flex-flow: row wrap;
      flex-flow: row wrap;
  width: 340px;
  height: 200px;
  border-radius: 20px;     
  margin: inherit;
  img:hover{
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  img{
    width: 100%;
    height: inherit;
    -o-object-fit: cover;
       object-fit: cover;
    border-radius: 20px;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
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