import React from 'react'

function Botao(props) {
  return (
    <div>
        <button onClick={props.frase} >{props.texto}</button>
    </div>
  );
}

export default Botao;