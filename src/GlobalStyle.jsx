import { createGlobalStyle } from "styled-components";
import "98.css";

const GlobalStyle = createGlobalStyle`

@font-face {
     font-family: 'DungGeunMo';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

    body {
    font-family: 'DungGeunMo', sans-serif;
    line-height: 1.5;
    background-color: #008080;
  }


`;
export default GlobalStyle;
