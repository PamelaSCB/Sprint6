import { createGlobalStyle } from "styled-components";
import imagenFondo from "../../assets/img_welcome/fondo-galaxia-espacial.jpg";

export const StyledWelcome = createGlobalStyle`
body {
background: url(${imagenFondo});
background-position: center; 
background-attachment:fixed; 
background-size: cover; 
background-repeat: no-repeat; 
}
`;
