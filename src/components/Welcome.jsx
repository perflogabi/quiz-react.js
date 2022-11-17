import { useContext } from 'react'
import { QuizContext } from '../context/quiz';

import React from 'react'
import Quiz from "../img/imgw.png"
import"./Welcome.css";

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({ type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Início do quiz"></img>
    </div>
  )
}

export default Welcome;
