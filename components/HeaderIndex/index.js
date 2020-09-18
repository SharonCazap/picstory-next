import React from 'react';
import Link from 'next/link';
import { HeaderContainer, Container, Logo, Accion, User, Write, UserImage } from './styled';

import { Wrapper, Boton } from '../../components';

const HeaderIndex = (props) => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Container>
          <Logo>
            <Link href={'/'}>
              <img src='./images/logo.png' alt='Picstory'/>
            </Link>
          </Logo>
          <Accion>
            <Boton href={"/api/login"} backgroundColor={false} borderColor={true} colorText={true}> Iniciar sesión </Boton>
            <Boton href={'login'} backgroundColor={true} borderColor={true} colorText={false}> Registrarse </Boton>
          </Accion>
        </Container>
      </Wrapper>
    </HeaderContainer>
  )
}

export default HeaderIndex;