import Pergunta from "../Pergunta/Pergunta";
import styled from 'styled-components';

const perguntas = [
  { 
    titulo: 'Pergunta 1', 
    pergunta: 'O que é JSX?', 
    resposta: 'JSX é uma sintaxe que permite usar HTML dentro do JavaScript.' 
  },
  { 
    titulo: 'Pergunta 2', 
    pergunta: 'Como funciona o useState?', 
    resposta: 'useState cria um estado e uma função para atualizá-lo em componentes funcionais.' 
  },
  { 
    titulo: 'Pergunta 3', 
    pergunta: 'O que é um componente React?', 
    resposta: 'É uma função ou classe que retorna UI em JSX.' 
  },
  { 
    titulo: 'Pergunta 4', 
    pergunta: 'Como exporto um componente?', 
    resposta: 'Usamos "export default NomeDoComponente".' 
  }
];

export default function ListaPerguntas() {
  return (
    <ListaPerguntasContainer>
      {perguntas.map((item, index) => (
        <Pergunta key={index} titulo={item.titulo} pergunta={item.pergunta} resposta={item.resposta} />
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
