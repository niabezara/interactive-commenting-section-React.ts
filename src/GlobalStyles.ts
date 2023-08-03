import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
  font-size: 16px;
}

body{
    background: var(--very-light-gray, #F5F6FA);
    min-height: 100vh;
    justify-content: center;
    display: flex;
   
    font-family: Rubik;
    font-style: normal;
  
}
`;

export default GlobalStyles;
