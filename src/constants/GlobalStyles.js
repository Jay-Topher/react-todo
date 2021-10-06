import { createGlobalStyle } from "styled-components";

export const GlobalStyes = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: 'Josefin Sans', sans-serif;
    transition: all 0.30s linear;
  }
`