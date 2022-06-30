import React, { useState } from 'react'
import Botao from './components/Botao'

function App(props) {

  const [text, setText] = useState('')

  let frases = ['Toda dor é passageira.', 'Qualquer coisa que valha a pena será difícil.', 'Ser saudável é um jogo  mental.', 'Resistência vem para aqueles que investe tempo, esforço e coração.', 'Corro, logo, existo.','Vencer é uma mistura de luta, esforço, otimisto e não desistir nunca.', 'Uma meta é só uma maneira incrível de forçar o crescimento dentro de você.', 'Dar qualquer coisa menos o seu melhor é sacrificar o seu dom.']

  
const geradorFrase = () => {
  let numero = Math.floor(Math.random() * frases.length)
  frases = frases[numero]
  setText(frases)
}

  return (
    <div className="container">
      <h1>Running Motivation</h1>
      <img src={require('./assets/shoes.gif')} alt='Foto de um tênis comendo uma mosca' />
      <Botao texto={'Gerar Frase'}  frase={geradorFrase}/>
      <h3>{text}</h3>
    </div>
  );
}

export default App;
