import React from "react";
import { useSelector } from "react-redux";
import TableComp from "./TableComp";

function DisplayExpense() {
  //   console.log("DisplayExpense page log");

  const { expenses, balance } = useSelector((state) => state.expense);
  // return <div>DisplayExpense {JSON.stringify(expenses)}</div>;
  return (
    <>
      <TableComp data={expenses} balance={balance} />
    </>
  );
}

export default DisplayExpense;
