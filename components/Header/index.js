import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeaderContainer, Container, Logo, Accion, User, Write, UserImage } from './styled';

import { Wrapper, Boton } from '../../components';

function Header({ user, loading }) {

  console.log("user: ", user);

  const [openMenuUser, setOpenMenuUser] = useState(false);

  return (
    <HeaderContainer>
      <Wrapper>
        <Container>
          <Logo>
            <Link href={'/home'}>
              <img src='/images/logo.png' alt='Picstory' />
            </Link>
          </Logo>
          {!loading &&
            (user ? ( // Hay usuario logeado...
              <User>
                <Write>
                  <Link href={'/historia/escribir'}>
                    Escribir
                  </Link>
                </Write>
                <ul>
                  <li onClick={() => setOpenMenuUser(!openMenuUser)}>
                    <UserImage src={user.picture} alt={user.username} />
                  </li>
                  <div className={openMenuUser ? 'dropdown' : 'dropup'}>
                    <a href={'/mis-historias'}>Mis historias</a>
                    <a href={'/mis-imagenes'}>Mis im&aacute;genes</a>
                    <a href={'/configuracion'}>Configuraci&oacute;n</a>
                    <a href={'/api/logout'}>Cerrar sesi&oacute;n</a>
                  </div>
                </ul>
              </User>

            ) : ( // No hay usuario logeado...
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

export default Header;