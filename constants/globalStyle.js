import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Lora';
    src: url('/fonts/Lora-Regular.woff2') format('woff2'),
        url('/fonts/Lora-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Lora';
    src: url('/fonts/Lora-Bold.woff2') format('woff2'),
        url('/fonts/Lora-Bold.woff') format('woff');
    font-weight: 700;
    font-style: bold;
}

@font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Regular.woff2') format('woff2'),
        url('/fonts/Lato-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Bold.woff2') format('woff2'),
        url('/fonts/Lato-Bold.woff') format('woff');
    font-weight: 700;
    font-style: bold;
}

 html {
   font-family: 'Lato';
 }
`;

export default GlobalStyle;
