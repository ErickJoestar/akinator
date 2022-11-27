import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { Database } from 'akinator/database';
import { Game } from 'akinator/game';
import { Action, Answer, GameState } from 'akinator/type';

import { GameIdle } from './GameIdle';
import { GameRunning } from './GameRunning';
import { GameOver } from './GameOver';
import { GameGuessedWrong } from './GameGuessedWrong';

// ********************************************************************************
const database = new Database();
const game = new Game(database);

export const GameComponent: React.FC = () => {
  // == State =====================================================================
  const [gameState, setGameState] =  useState(game.getState());
  const [action, setAction] = useState<Action | undefined/*no action for the current game*/>(undefined/*initially no action*/);

  // ------------------------------------------------------------------------------
  // sync the game state with the state of the component
  // NOTE: Ideally, this would've implemented with observables or another 
  //       reactive programming pattern, but since it's a small project, it won't be
  //       implemented for now.
  const sync = () => {
    setAction(game.getAction());
    setGameState(game.getState());
  }

  // == Handler ===================================================================
  const handleStartGame = () => {
    game.start();

    sync();
  };

  const handleAnswer = (answer: Answer) => {
    game.answer(answer);

    sync();
  };

  const handleRestartGame = () => {
    game.start();

    sync();
  };

  const handleAddSubject = (name: string, question: string) => {
    game.addSubject(name, question);

    sync();
  };

  // == UI ========================================================================
  const content = gameState === GameState.Idle ? <GameIdle onStartGame={handleStartGame} />
                : gameState === GameState.Running && action ? <GameRunning action={action} onAnswer={handleAnswer}/>
                : gameState === GameState.Over ? <GameOver onRestartGame={handleRestartGame}/>
                : gameState === GameState.GuessedWrong ? <GameGuessedWrong onAddSubject={handleAddSubject} />
                : null/*not valid*/;

  console.log(gameState, action);
  return (
    <Flex
      flex='1 1'
      width='100%'
      maxWidth='1200px'
      justifyContent='center'
      margin='0 auto'
    >
      {content} 
    </Flex> 
  );
};