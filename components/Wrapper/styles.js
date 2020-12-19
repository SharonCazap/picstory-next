import styled from 'styled-components';
import { breakpoints } from '../../constants';

export const WrapperContainer = styled.div`
  max-width: 350px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
          justify-content: flex-start;
  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 420px;
    width: 100%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    max-width: 700px;
    width: 100%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    max-width: 900px;
    width: 100%;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    max-width: 1240px;
    width: 100%;
  }
  @media (min-width: ${breakpoints.notebook}) {
    max-width: 1440px;
    width: 100%;
  }
`;
