import { useState } from "react";
import styled from "styled-components";
import play from "../../assets/seta_play.png";
import virar from "../../assets/seta_virar.png";

export default function Pergunta({ titulo, pergunta }) {
  const [estado, setEstado] = useState("fechada");

  function abrirPergunta() {
    setEstado("aberta");
  }

  function mostrarResposta() {
    setEstado("resposta");
  }

  return (
    <PerguntaContainer estado={estado}>
      {estado === "fechada" && (
        <Linha onClick={abrirPergunta}>
          <p>{titulo}</p>
          <img src={play} alt="play-icone" />
        </Linha>
      )}

      {estado === "aberta" && (
        <Aberta>
          <p>{pergunta}</p>
          <img src={virar} alt="icone virar" onClick={mostrarResposta} />
        </Aberta>
      )}

      {estado === "resposta" && (
        <Resposta>
          <p>Resposta completa!</p>
        </Resposta>
      )}
    </PerguntaContainer>
  );
}

const PerguntaContainer = styled.div`
  width: 300px;
  height: ${(props) =>
    props.estado === "resposta" ? "150px" : props.estado === "aberta" ? "100px" : "65px"};
  background-color: ${(props) =>
    props.estado === "aberta" || props.estado === "resposta" ? "#FFFFD4" : "#FFFFFF"};
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  font-family: 'Recursive', sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.estado === "fechada" ? "center" : "space-between")};
  padding: ${(props) => (props.estado === "fechada" ? "0" : "12px")};
  box-sizing: border-box;
`;

const Linha = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 100%;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Aberta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  img {
    align-self: flex-end;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const Resposta = styled.div`
  padding: 10px;
  background-color: #FFFFD4;
  height: 100%;
`;
