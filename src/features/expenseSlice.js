import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  balance: 0,
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      console.log("Data=", action.payload);

      state.expenses = [
        ...state.expenses,
        { id: state.expenses.length + 1, ...action.payload },
      ];
      if (action.payload.expenseType === "Credit") {
        state.balance = state.balance + action.payload.amount;
      } else if (action.payload.expenseType === "Debit") {
        state.balance = state.balance - action.payload.amount;
      }
    },
    editExpense: (state, action) => {
      //editing expense here
    },
  },
});

export const { addExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
