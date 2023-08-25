import { createGlobalStyle } from "styled-components";

export const StyledHistory = createGlobalStyle`

body {
    background-image: url(${({ history, position }) =>
      history[position - 1].img});
    background-position: center;
    background-attachment : fixed; 
    background-size:cover; 
    background-repeat: no-repeat; 

}

`;
