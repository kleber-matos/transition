/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import * as S from "./styled";

export default function App() {
  const [ativo, setAtivo] = useState(false);

  return (
    <>
      <S.Titulo>trasition</S.Titulo>

      <S.Carregando ativo={ativo}>carregando</S.Carregando>

      <button onClick={() => setAtivo(!ativo)}>start</button>
    </>
  );
}
