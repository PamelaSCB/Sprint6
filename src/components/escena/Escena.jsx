import { StyledEscenas } from "./Escena.styled";

export const Escena = ({ isActive, text }) => (
  <StyledEscenas
    className={`
"text" ${isActive ? "activeFund" : ""}`}
  >
    {text}
  </StyledEscenas>
);
