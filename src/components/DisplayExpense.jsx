import React from "react";
import { useSelector } from "react-redux";

function DisplayExpense() {
//   console.log("DisplayExpense page log");

  const { expenses } = useSelector((state) => state.expense);
  return <div>DisplayExpense {JSON.stringify(expenses)}</div>;
}

export default DisplayExpense;
