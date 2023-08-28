import styled from "styled-components";
import { StyleButtons } from "../Botones/Botones.styled";

export const StyledContainer = styled.div`
  position: relative;
  top: 60%;
  left: 25%;
  transform: traslate(-50%, -50%);
  padding: 4rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-center: center;
  gap: 2rem;
  width: 50vw;
  height: auto;
  border: 0.2rem solid #000;
  border-radius: 1rem;
`;

export const WelcomeText = styled.div`
  text-align: center;

  & h1 {
    margin-bottom: 2.5rem;
    font-size: 3rem;
  }

  & p {
    margin: 2rem 0;
    font-size: 1.8rem;
    text-align: justify;
  }
`;

export const ImgS = styled.img`
width:60%; 
object-fit:scale-down;
border:.2rem solid #000; 
border-radius: 1rem: 
`;

export const ButtonsS = styled(StyleButtons)`
  width: 25vw;
  padding: 0.5rem;
`;
