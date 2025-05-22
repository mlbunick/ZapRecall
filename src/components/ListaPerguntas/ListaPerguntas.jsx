import Pergunta from "../Pergunta/Pergunta";
import styled from 'styled-components';

const dados = [
  { titulo: 'Pergunta 1', pergunta: 'O que é JSX?' },
  { titulo: 'Pergunta 2', pergunta: 'Como funciona o useState?' },
  { titulo: 'Pergunta 3', pergunta: 'O que é um componente React?' },
  { titulo: 'Pergunta 4', pergunta: 'Como exporto um componente?' }
];

export default function ListaPerguntas() {
  return (
    <ListaPerguntasContainer>
      {dados.map((item, index) => (
        <Pergunta key={index} titulo={item.titulo} pergunta={item.pergunta} />
      ))}
    </ListaPerguntasContainer>
  );
}

const ListaPerguntasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px; /* Espaçamento entre perguntas */
  padding: 20px;
`;
