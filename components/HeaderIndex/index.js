import React from 'react';
import Link from 'next/link';
import { HeaderContainer, Container, Logo, Accion, User, Write, UserImage } from './styled';

import { Wrapper, Boton } from '../../components';

const HeaderIndex = ({ user, loading }) => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Container>
          <Logo>
            <Link href={'/home'}>
              <img src='./images/logo.png' alt='Picstory' />
            </Link>
          </Logo>
          {!loading &&
            (user ? (
              <User>
                <a href={'/api/logout'}>LogOut</a>
                <Write>
                  <Link href={'escribir'}>
                    Escribir
                  </Link>
                </Write>
                <UserImage src='./images/usuario.jpg' alt='User Image' />
              </User>

            ) : (
                <Accion>
                  <Boton href={'/api/login'} backgroundColor={false} borderColor={true} colorText={true}> Iniciar sesi&oacute;n </Boton>
                  <Boton href={'/api/login'} backgroundColor={true} borderColor={true} colorText={false}> Registrarse </Boton>
                </Accion>
              )
            )
          }
        </Container>
      </Wrapper>
    </HeaderContainer>
  )
}

export default HeaderIndex;