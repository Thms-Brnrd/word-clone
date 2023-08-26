import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessesList from "../GuessesList";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isOver, setIsOver] = React.useState(false);
  const [isWon, setIsWon] = React.useState(false);

  const handleNewGuess = (newGuess) => {
    const newGuesses = [...guesses, { label: newGuess, id: Math.random() }];
    setGuesses(newGuesses);

    if (newGuess === answer) {
      setIsWon(true);
      setIsOver(true);
    }

    if (newGuesses.length >= 6) {
      setIsOver(true);
    }
  }

  return (
    <>
      <GuessesList guesses={guesses} answer={answer} />
      <GuessInput onNewGuess={handleNewGuess} disabled={isOver} />
      {isOver && (
        <>
          {isWon ? (
            <HappyBanner numOfGuesses={guesses.length} />
          ) : (
            <SadBanner answer={answer} />
          )}
        </>
      )}
    </>
  );
}

export default Game;
