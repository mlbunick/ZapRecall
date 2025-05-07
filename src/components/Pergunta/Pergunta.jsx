import { useState } from "react";
import "./Pergunta.css"

export default function Pergunta({ titulo, pergunta }){
    const [estado, setEstado] = useState("fechada");

    function abrirPergunta() {
        setEstado("aberta");
    }
    
    return (
        <div className="pergunta-container">
          {estado === "fechada" ? (
            <div className="pergunta-fechada" onClick={abrirPergunta}>
              <p>{titulo}</p>
            </div>
          ) : 
          (
            <div className="pergunta-aberta">
              <p>{pergunta}</p>
            </div>
          )}
        </div>
      );
}