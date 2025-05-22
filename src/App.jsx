import './App.css'
import ListaPerguntas from './components/ListaPerguntas/ListaPerguntas';
import ZapRecallIcone from './assets/logo_completa.png';

function App() {
  return (
    <div className="content">
       <img src={ZapRecallIcone} alt="Ícone ZapRecall" style={{ display: 'block', margin: '0 auto 20px' }} />
      <ListaPerguntas />
    </div>
  );
}

export default App
