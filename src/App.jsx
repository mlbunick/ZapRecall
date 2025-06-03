import './App.css';
import { useState } from 'react';
import ListaPerguntas from './components/ListaPerguntas/ListaPerguntas';
import FooterBar from './components/Footer/FooterBar';
import ZapRecallIcone from './assets/logo_completa.png';
import styled from 'styled-components';

function App() {
  const [respondidas, setRespondidas] = useState(0);
  const totalPerguntas = 8;

  function registrarResposta() {
    setRespondidas(prev => prev + 1);
  }

  return (
    <Content>
      <Logo src={ZapRecallIcone} alt="Ícone ZapRecall" />
      <ListaPerguntas registrarResposta={registrarResposta} />
      <FooterBar respondidas={respondidas} total={totalPerguntas} />
    </Content>
  );
}

const Logo = styled.img`
  margin: 3rem auto 20px;
  @media (max-width: 300px) {
    width: 80%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding-bottom: 70px; // espaço para o footer
`;

export default App;
