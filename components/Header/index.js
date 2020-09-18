import React from 'react';
import Link from 'next/link';

import { HeaderContainer, Container, Logo, User, Write, UserImage } from './styled';
import { Wrapper } from '../../components';

const Header = (props) => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Container>
          <Logo>
            <Link href={'/'}>
              <img src='./images/logo.png' alt='Picstory'/>
            </Link>
          </Logo>
          <User>
            <Write>
              <Link href={'escribir'}>
                Escribir
              </Link>
            </Write>
            <UserImage src='./images/usuario.jpg' alt='User Image'/>
          </User>
        </Container>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header;