/** @format */

import styled from "styled-components";

export const Box = styled.div`
  border: solid 2px;
  width: 50vw;
  height: 10vh;
`;

export const Carregando = styled.div`
  background-color: red;
  width: 10%;
  height: 100%;
  border-right: solid 2px;
  /* Efeito da transição */
  transition: 10s;

  /* criamos uma propriedade que se chama "trocaCores" */
  ${({ trocaCores }) =>
    trocaCores &&
    `
      background-color: greenyellow;
      width: 100%;  
    `}
`;
