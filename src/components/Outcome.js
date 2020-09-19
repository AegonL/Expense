import React, { useState } from "react";

const Outcome = (props) => {
  const [input, setInput] = useState(0);

  const setInputHandler = (e) => {
    e.preventDefault();
    props.onChangeHandlerOutcome(input);
  };

  return (
    <div>
      <form onSubmit={setInputHandler}>
        <label>
          Outcome
          <input
            type="text"
            name="name"
            onChange={(e) => setInput(parseInt(e.target.value))}
          ></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Outcome;
