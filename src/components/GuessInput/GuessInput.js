import React from "react";

function GuessInput({ onNewGuess, disabled }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const upperCaseValue = value.toUpperCase();
    onNewGuess(upperCaseValue);
    setValue('');
  }

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" required={true} disabled={disabled} pattern="[a-zA-Z]{5}" value={value} onChange={handleChange} />
    </form>
  );
}

export default GuessInput;
