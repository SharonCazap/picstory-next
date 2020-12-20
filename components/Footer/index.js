import React from 'react';

import { Container, FooterContainer } from './styled'; 
import { Wrapper } from '../../components';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterContainer>
          <h4>Hecho con &#9829; por <a href="https://www.behance.net/sharicazape5c1" target="_blank">Sharon Cazap</a> | El proyecto se encuentra en desarrollo</h4>
          <div>
            <a href="https://www.instagram.com/picstoryapp/" target="_blank">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/Picstory-100853335269754" target="_blank">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
          </div>
        </FooterContainer>
        
      </Wrapper>
    </Container>
  )
}

export default Footer;