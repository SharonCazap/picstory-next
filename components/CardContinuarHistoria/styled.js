import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const Card = styled.a` 
  cursor: pointer;
  text-decoration: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; 
  -webkit-box-orient: horizontal; 
  -webkit-box-direction: normal; 
  -ms-flex-direction: row; 
          flex-direction: row; 
  width: 100%;
  height: 220px;
  background-color: ${leerColor(colores.blanco)};
  border-radius: 20px; 
  -webkit-box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2); 
          box-shadow: 12px 12px 30px 0px rgba(177,178,180,0.2); 
  color: ${leerColor(colores.gris)};
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  margin-bottom: 40px;
  figure{
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    margin-bottom: 40px;
    overflow: hidden; 
    border-radius: 20px 0 0 20px;
    margin: 0;
    width: 30%;
  }
  img{
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover;
    height: -webkit-fill-available;
  }
  :hover{
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
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
    width: 70%!important;
    margin: 15px 20px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
            justify-content: space-between; 
    margin-bottom: 0!important;
    h3{
      font-family: 'Lora', serif;
      font-weight: 700;
      font-size: 21px;
      color: ${leerColor(colores.violeta)};
      margin: 0;
    }
    p{
      font-size: 16px;
      line-height: 23px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      margin: 0;
    }
    span{
      font-size: 14px;
      font-weight: bold;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
    }
  }
  div div{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
            flex-direction: row;
    width: 100%!important;
    padding: 0 20px!important;
    margin-bottom: 20px!important;
    margin-top: 0;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
            justify-content: flex-end; 
    button.editButton {
      background-image: url('/images/edit.svg');
      background-size: cover;
      border: none;
      background-color: transparent;
      padding: 10px;
      margin: 0 10px;
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    button.deleteButton {
      background-image: url('/images/delete.svg');
      background-size: cover;
      border: none;
      background-color: transparent;
      padding: 10px;
      margin: 0 10px;
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    
  }
  button.editButtonHome{
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 10px 52px;
    border-radius: 30px; 
    background-color: transparent;
    border: 2px solid ${leerColor(colores.rosa)};
    color: ${leerColor(colores.rosa)};
    margin-bottom: -50px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    button.editButtonHome{
      margin-bottom: -60px;
    }
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 425px;
  }
  @media (min-width: ${breakpoints.notebook}) {
    width: 470px;
  }
`;

export const Info = styled.div` 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  width: 70%;
  margin: 15px 20px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between; 
  h3{
    font-family: 'Lora', serif;
    font-weight: 700;
    font-size: 21px;
    color: ${leerColor(colores.violeta)};
    margin: 0;
  }
  p{
    font-size: 16px;
    line-height: 23px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    margin: 0;
  }
  span{
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
  }
`;