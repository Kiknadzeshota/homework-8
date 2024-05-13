import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    body{
        background-image: url(./assets/background-stars.svg);
        background-position: center;
        background-repeat: repeat;
        background-color: #070724;
    }
`

export default GlobalStyle