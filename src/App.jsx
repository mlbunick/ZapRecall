import { useState } from 'react'
import './App.css'
import ListaPerguntas from './components/ListaPerguntas/ListaPerguntas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ListaPerguntas />
    </div>
  );
}

export default App
