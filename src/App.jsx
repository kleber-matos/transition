/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "./styled";

export default function App() {
  const [ativo, setAtivo] = useState(false);

  return (
    <>
      <h1>Transition</h1>
      {/* Barra de carregamento */}
      <S.Box>
        <S.Carregando trocaCores={ativo}></S.Carregando>
      </S.Box>

      <button onClick={() => setAtivo(!ativo)}>start</button>
    </>
  );
}
