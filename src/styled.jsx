/** @format */

import styled from "styled-components";

export const Titulo = styled.h1`
  font-family: "Poppins", sans-serif;
`;

export const Carregando = styled.div`
  background-color: greenyellow;
  width: 40vw;
  transition: 5s;

  ${({ ativo }) =>
    ativo &&
    `
        width: 100vw;
        background-color: yellow;
    `}
`;
