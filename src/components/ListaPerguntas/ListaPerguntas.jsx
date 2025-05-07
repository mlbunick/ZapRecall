import Pergunta from "../Pergunta/Pergunta";
import "./ListaPerguntas.css"

const dados = [
  { titulo: 'Pergunta 1', pergunta: 'O que é JSX?' },
  { titulo: 'Pergunta 2', pergunta: 'Como funciona o useState?' },
  { titulo: 'Pergunta 3', pergunta: 'O que é um componente React?' },
  { titulo: 'Pergunta 4', pergunta: 'Comno exporto um componente?'}
];

export default function ListaPerguntas() {
  return (
    <div>
      {dados.map((item, index) => (
        <Pergunta key={index} titulo={item.titulo} pergunta={item.pergunta} />
      ))}
    </div>
  );
}
