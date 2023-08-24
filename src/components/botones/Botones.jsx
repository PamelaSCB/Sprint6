import { DivButtons, StyleButtons } from "./Botones.styled.js";

export const Botones = ({ activeBack, activeNext }) => (
  <DivButtons>
    <StyleButtons onClick={activeBack}>Anterior</StyleButtons>

    <StyleButtons onClick={activeNext}>Següent</StyleButtons>
  </DivButtons>
);
