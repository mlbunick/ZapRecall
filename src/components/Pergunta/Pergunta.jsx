import { useState } from "react";
import styled, { css } from "styled-components";
import play from "../../assets/seta_play.png";
import virar from "../../assets/seta_virar.png";
import zap from "../../assets/zap.png";
import nao_lembrei from "../../assets/nao_lembrei.png";
import quase_lembrei from "../../assets/quase_nao_lembrei.png";
import icon_certo from "../../assets/icone_certo.png";
import icon_quase from "../../assets/icone_quase.png";
import icon_erro from "../../assets/icone_erro.png";

export default function Pergunta({ titulo, pergunta, resposta }) {
  const [estado, setEstado] = useState("fechada");

  function abrirPergunta() {
    setEstado("aberta");
  }

  function mostrarResposta() {
    setEstado("resposta");
  }

  function responder(responseType) {
    setEstado(`fechada-${responseType}`);
  }

  function getIconForState(estado) {
    if (estado === "fechada-certo") return icon_certo;
    if (estado === "fechada-quase") return icon_quase;
    if (estado === "fechada-erro") return icon_erro;
    return play;
  }

  return (
    <PerguntaContainer estado={estado}>
      {estado === "fechada" && (
        <Linha onClick={abrirPergunta}>
          <p>{titulo}</p>
          <img src={play} alt="play-icone" />
        </Linha>
      )}

      {(estado === "fechada-certo" ||
        estado === "fechada-quase" ||
        estado === "fechada-erro") && (
        <FechadaRespondida estado={estado}>
          <p>{titulo}</p>
          <img src={getIconForState(estado)} alt="ícone resposta" />
        </FechadaRespondida>
      )}

      {estado === "aberta" && (
        <Aberta>
          <p>{pergunta}</p>
          <img src={virar} alt="ícone virar" onClick={mostrarResposta} />
        </Aberta>
      )}

      {estado === "resposta" && (
        <Resposta>
          <p>{resposta}</p>
          <ImagemRespostaContainer>
            <Imagem
              src={nao_lembrei}
              alt="ícone não lembrei"
              onClick={() => responder("erro")}
            />
            <Imagem
              src={quase_lembrei}
              alt="ícone quase"
              onClick={() => responder("quase")}
            />
            <Imagem
              src={zap}
              alt="ícone zap"
              onClick={() => responder("certo")}
            />
          </ImagemRespostaContainer>
        </Resposta>
      )}
    </PerguntaContainer>
  );
}

const baseFechada = css`
  height: 65px;
  background-color: #ffffff;
  justify-content: center;
  padding: 0;
`;

const styleCerto = css`
  color: #2fbe34;
  text-decoration: line-through;
`;

const styleQuase = css`
  color: #ff922e;
  text-decoration: line-through;
`;

const styleErro = css`
  color: #ff3030;
  text-decoration: line-through;
`;

const PerguntaContainer = styled.div`
  width: 300px;
  background-color: ${(props) =>
    props.estado === "aberta" || props.estado === "resposta" ? "#FFFFD4" : "#FFFFFF"};
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  font-family: "Recursive", sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) =>
    props.estado === "fechada" ||
    props.estado === "fechada-certo" ||
    props.estado === "fechada-quase" ||
    props.estado === "fechada-erro"
      ? "0"
      : "12px"};
  box-sizing: border-box;

  ${(props) =>
    props.estado === "resposta"
      ? css`
          height: 150px;
          justify-content: center;
        `
      : props.estado === "aberta"
      ? css`
          height: 100px;
          justify-content: space-between;
        `
      : props.estado === "fechada-certo"
      ? css`
          ${baseFechada}
          ${styleCerto}
        `
      : props.estado === "fechada-quase"
      ? css`
          ${baseFechada}
          ${styleQuase}
        `
      : props.estado === "fechada-erro"
      ? css`
          ${baseFechada}
          ${styleErro}
        `
      : css`
          ${baseFechada}
        `}
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

const FechadaRespondida = styled(Linha)`
  cursor: default;
  p {
    ${(props) =>
      props.estado === "fechada-certo"
        ? styleCerto
        : props.estado === "fechada-quase"
        ? styleQuase
        : props.estado === "fechada-erro"
        ? styleErro
        : ""}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ffffd4;
  height: 100%;
`;

const ImagemRespostaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3rem;
  gap: 0.5rem;
`;

const Imagem = styled.img`
  width: 85.17px;
  height: 37.17px;
  border-radius: 5px;
  object-fit: contain;
`;