import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "bebas";
    src: url("/src/fonts/BebasNeue.woff2") format("woff2"), url("/src/fonts/BebasNeue.woff2") format("woff");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  
  body,
  html {
    margin: 0;
    background-color: rgba(0, 0, 0, 0.85);
  }

  html {
    height: 100%;
    background-image: url('https://i.ibb.co/rdkB8N6/e6a975ac03b598fb827578dc38060d70.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  
  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color:${(props) => props.theme.fontColorBlack};
  }

`;
