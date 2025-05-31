import './App.css'
import ListaPerguntas from './components/ListaPerguntas/ListaPerguntas';
import ZapRecallIcone from './assets/logo_completa.png';
import styled from 'styled-components';

function App() {
  return (
    <Content>
       <Logo src={ZapRecallIcone} alt="Ícone ZapRecall" style={{margin: '3rem auto 20px'}} />
      <ListaPerguntas />
    </Content>
  );
}

const Logo = styled.img`
  @media (max-width: 300px) {
    width: 80%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default App
