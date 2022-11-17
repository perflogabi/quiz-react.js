import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";
import './App.css';
import { Welcome } from './components/Welcome';

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      <Welcome/>
    </div>
  );
}

export default App;
