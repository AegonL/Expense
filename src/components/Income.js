import React, { useState } from "react";

const Income = (props) => {
  const [input, setInput] = useState(0);

  const setInputHandler = (e) => {
    e.preventDefault();
    props.onChangeHandlerIncome(input);
  };

  return (
    <div>
      <form onSubmit={setInputHandler}>
        <label>
          Income
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

export default Income;
