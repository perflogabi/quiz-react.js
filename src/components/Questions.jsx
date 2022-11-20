import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz';
import Option from './Option';
import './Questions.css'

export const Questions = () => {
    const [quizState, dispatch] = useContext (QuizContext);
    const currentQuestions = quizState.questions[quizState.currentQuestions];
    
    const onSelectOption = (option) => {
        dispatch ({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestions.answer, option},
        });
    };
    
    return (
    <div id='questions'>
        <p>Pergunta {quizState.currentQuestions +1} de {quizState.questions.length}</p>
        <h2>{currentQuestions.questions}</h2>
        <div id='options-container'>
            {currentQuestions.options.map((option) => (
                <Option option={option} 
                key={option} 
                answer={currentQuestions.answer} 
                selectOption = {() => onSelectOption(option)} 
                hide={quizState.optionToHide === option ? "hide" : null}/>
            ))}
        </div>
        {!quizState.answerSelected && !quizState.help && (
            <>
                {currentQuestions.tip && (
                    <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
                )}
                <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
                    Excluir uma
                </button>
            </>
        )}
        {!quizState.answerSelected && quizState.help === "tip" && (
            <p>{currentQuestions.tip}</p>
        )}
        {quizState.answerSelected && (
          <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>  
        )}
        
    </div>
  )
}
