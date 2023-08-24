import styled from "styled-components";

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

export const StyleButtons = styled.div`
  text-align: center;
  width: 45vw;
  margin: 0.5rem;
  padding: 1.5rem;
  font-size: 2rem;
  border: 0.1rem solid #000;
  border-radius: 1rem;

  &:hover {
    background-color: #e7c1d2;
  }

  &:active {
    outline: 0.5rem solid #000;
  }
`;
