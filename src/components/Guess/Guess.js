import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess = '', answer }) {
  if (!guess) {
    return (
      <p className="guess">
        {range(5).map(index => (
          <span key={index} className="cell" />
        ))}
      </p>
    );
  }

  const letters = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map(index => (
        <span key={index} className={`cell ${letters[index].status}`}>{letters[index].letter}</span>
      ))}
    </p>
  );
}

export default Guess;
