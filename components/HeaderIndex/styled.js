import styled from 'styled-components'
import { breakpoints, leerColor, colores } from '../../constants';

export const HeaderContainer = styled.header`
  background-color: #fff;
`;
export const Container = styled.div`
  display: flex;
  width: inherit;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px; 
  padding-bottom: 10px; 
`;
export const Logo = styled.h1`
  img{
    width: 100%;
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
export const User = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: flex-end;
`;
export const Write = styled.span`
  border: 2px solid ${leerColor(colores.rosa)};
  border-radius: 30px;
  padding: 10px 25px;
  margin: 0 10px;
  cursor: pointer;
  a{
    text-decoration: none;  
    color: ${leerColor(colores.rosa)};
  }
`;

export const UserImage = styled.img`
  width: 5%;
  border-radius: 50%;
  border: 3px solid ${leerColor(colores.rosa)};
`;
export const Accion = styled.div` 
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: flex-end; 
  a{
    font-size: 14px;
    padding: 10px 30px;
  }
  a:first-of-type{
      margin-right: 10px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    a{
      font-size: 16px;
    }
  }
  @media (min-width: ${breakpoints.laptopL}) {
    
  }
  @media (min-width: ${breakpoints.notebook}) {

  }
`;