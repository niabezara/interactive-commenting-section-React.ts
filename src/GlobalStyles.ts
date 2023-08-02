import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
}

body{
    background: var(--very-light-gray, #F5F6FA);
    min-height: 100vh;
    justify-content: center;
    display: flex;
    padding: 64px;
    font-family: Rubik;
    font-style: normal;
  font-weight: 400;
}
`;

export default GlobalStyles;
