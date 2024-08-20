import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "Bebas Neue";
    src: url("/BebasNeue.woff2") format("woff2"), url("/BebasNeue.woff2") format("woff");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Albert Sans";
    src: url("/AlbertSans-VariableFont_wght.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Mortal Combat";
    src: url("/mortalkombat.ttf") format("truetype");
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
    background-size: calc(100vw);
    background-position: center left;
    background-attachment: fixed;
  }
  
  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color:${(props) => props.theme.fontColorBlack};
    padding-left: calc(100vw - 100%);
  }

`;
