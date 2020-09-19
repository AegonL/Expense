import React, { useState } from "react";
import Outcome from "./components/Outcome";
import Income from "./components/Income";
import IncomeList from "./components/Income/IncomeList";
const App = () => {
  const [sum, setSum] = useState(0);

  const onChangeHandlerOutcome = (value) => {
    setSum((prevState) => prevState - value);
    console.log(value);
  };

  const onChangeHandlerIncome = (value) => {
    setSum((prevState) => prevState + value);
  };

  return (
    <div>
      <IncomeList />
      <Outcome onChangeHandlerOutcome={onChangeHandlerOutcome} />
      <Income onChangeHandlerIncome={onChangeHandlerIncome} />
      You have {sum}$!
    </div>
  );
};

export default App;
