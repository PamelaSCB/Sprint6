import styled from "styled-components";

export const StyledEscenas = styled.div`
  margin: 1.5rem 2rem;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  border: 0.2rem solid #000;
  border-radius: 2rem;
  background-color: #f5eef8;

  &.activeFund {
    background-color: #e7c1d2;
  }
`;

export const DivEscenas = styled.div`
  display: flex;
  flex-direction: column;
`;
