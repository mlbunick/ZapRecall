import Pergunta from "../Pergunta/Pergunta";
import styled from 'styled-components';

const perguntas = [
  { titulo: 'Pergunta 1', pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript.' },
  { titulo: 'Pergunta 2', pergunta: 'O que é o React?', resposta: 'Uma biblioteca JavaScript para construção de interfaces.' },
  { titulo: 'Pergunta 3', pergunta: 'Por que componentes devem iniciar com letra maiúscula?', resposta: 'Porque o React distingue componentes de elementos HTML dessa forma.' },
  { titulo: 'Pergunta 4', pergunta: 'O que podemos colocar dentro do JSX?', resposta: 'Expressões JavaScript.' },
  { titulo: 'Pergunta 5', pergunta: 'Como o ReactDOM nos ajuda?', resposta: 'Interagindo com a DOM para colocar componentes React na mesma.' },
  { titulo: 'Pergunta 6', pergunta: 'Para que usamos o npm?', resposta: 'Para gerenciar os pacotes necessários e suas dependências.' },
  { titulo: 'Pergunta 7', pergunta: 'Para que usamos props?', resposta: 'Para passar diferentes informações para componentes.' },
  { titulo: 'Pergunta 8', pergunta: 'Para que usamos estado (state)?', resposta: 'Para dizer ao React quais informações, quando atualizadas, devem renderizar a tela novamente.' }
];

export default function ListaPerguntas({ registrarResposta }) {
  return (
    <ListaPerguntasContainer>
      {perguntas.map((item, index) => (
        <Pergunta
          key={index}
          titulo={item.titulo}
          pergunta={item.pergunta}
          resposta={item.resposta}
          registrarResposta={registrarResposta}
        />
      ))}
    </ListaPerguntasContainer>
  );
}

const ListaPerguntasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 20px;
  margin: 2rem;
`;
