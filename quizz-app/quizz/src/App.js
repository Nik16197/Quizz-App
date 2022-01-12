import React, { useState } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Quizz from './components/quizz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './Helpers/Contexts';

function App() {

  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
      <h1>Quiz</h1>
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quizz" && <Quizz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
