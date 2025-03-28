import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      //adding expense here
      console.log("Data=", action.payload);

      state.expenses = [...state.expenses, action.payload];
    },
    editExpense: (state, action) => {
      //editing expense here
    },
  },
});

export const { addExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
