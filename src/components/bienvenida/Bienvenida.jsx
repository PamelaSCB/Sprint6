import {
  StyledContainer,
  WelcomeText,
  ImgS,
  ButtonsS,
} from "./Bienvenida.styled.js";
import imagenSprint6 from "../../assets/img/1.jpg";

export const Welcome = ({ següent }) => {
  return (
    <>
      {/* <StyledWelcome className="styleWelcome"/> */}
      <StyledContainer className="styledCointainer">
        <WelcomeText className="WelcomeText">
          <h1> Benvingut al Projecte React- Sprint 6 </h1>
          <p>
            En aquet projecte es tracta de desenvolupar un tutorial, en el qual,
            mitjançant dos botons, els nous usuaris puguin avançar i retrocedir
            en els consells, modificant-ne el text d'ajuda i la imatge de fons.
            Vols anar a veure el projecte?
          </p>
        </WelcomeText>

        <ImgS src={imagenSprint6} alt="fotosprint6" />
        <ButtonsS onClick={següent}>Començar</ButtonsS>
      </StyledContainer>
    </>
  );
};
