import { DivEscenas, StyledEscenas } from "./Escena.styled";

export const Escena = ({ history, position }) => (
  <DivEscenas>
    {history.map((element) => (
      <StyledEscenas
        key={element.id}
        className={`
        ${position === element.id ? "activeFund" : ""}`}
      >
        {element.text}
      </StyledEscenas>
    ))}
  </DivEscenas>
);
