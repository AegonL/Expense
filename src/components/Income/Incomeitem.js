import React from "react";

const Incomeitem = ({ name, amount }) => {
  return (
    <div>
      <div>
        <li>
          {name} : {amount} <input type="button" value="Delete"></input>
        </li>
      </div>
    </div>
  );
};

export default Incomeitem;
