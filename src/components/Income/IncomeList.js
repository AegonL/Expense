import React, { useState } from "react";
import Incomeitem from "./Incomeitem";

const IncomeList = () => {
  const [incomes, setIncomes] = useState([
    {
      name: "Salary",
      amount: "5k",
    },
    {
      name: "Found",
      amount: "5k",
    },
    {
      name: "Lotto",
      amount: "5k",
    },
  ]);

  return (
    <div>
      <div>
        {incomes.map((income) => (
          <Incomeitem name={income.name} amount={income.amount} />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
