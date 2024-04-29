/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import * as S from "./styled";

const Carregando = styled.div`
  background-color: #60ee35;
  width: 100px;
  height: 20px;
  transition: 10s;

  ${({ ativo }) =>
    ativo &&
    `
    width: 100%;
    background-color: red;
  `}
`;

export default function App() {
  const [ativo, setAtivo] = useState(false);
  const [cor, setCor] = useState(false);

  return (
    <>
      <Carregando ativo={ativo} onClick={() => setAtivo(!ativo)}>
        Carregando...
      </Carregando>

      <S.Caixa cor={cor}>
        <p>texto</p>
      </S.Caixa>

      <button onClick={() => setCor(!cor)}>mudar cor</button>

      <button onClick={() => setAtivo(!ativo)}>carregando</button>
    </>
  );
}
