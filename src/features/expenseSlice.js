import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    {
      id: 1,
      name: "Breakfast",
      category: "Food",
      expenseType: "Debit",
      amount: 120,
      date: "2025-04-05T07:30:00.000Z",
    },
    {
      id: 2,
      name: "Monthly Salary",
      category: "Salary",
      expenseType: "Credit",
      amount: 50000,
      date: "2025-04-01T00:00:00.000Z",
    },
    {
      id: 3,
      name: "Bus Fare",
      category: "Travel",
      expenseType: "Debit",
      amount: 40,
      date: "2025-04-03T08:00:00.000Z",
    },
    {
      id: 4,
      name: "Doctor Visit",
      category: "Medical",
      expenseType: "Debit",
      amount: 1500,
      date: "2025-04-04T15:00:00.000Z",
    },
    {
      id: 5,
      name: "Grocery Shopping",
      category: "Food",
      expenseType: "Debit",
      amount: 2200,
      date: "2025-04-02T17:00:00.000Z",
    },
    {
      id: 6,
      name: "Uber Ride",
      category: "Travel",
      expenseType: "Debit",
      amount: 330,
      date: "2025-04-05T20:30:00.000Z",
    },
    {
      id: 7,
      name: "April Rent",
      category: "Rent",
      expenseType: "Debit",
      amount: 15000,
      date: "2025-04-01T10:00:00.000Z",
    },
    {
      id: 8,
      name: "Pharmacy Bill",
      category: "Medical",
      expenseType: "Debit",
      amount: 780,
      date: "2025-04-03T12:00:00.000Z",
    },
    {
      id: 9,
      name: "Bonus",
      category: "Salary",
      expenseType: "Credit",
      amount: 10000,
      date: "2025-04-05T09:00:00.000Z",
    },
    {
      id: 10,
      name: "Snacks",
      category: "Food",
      expenseType: "Debit",
      amount: 95,
      date: "2025-04-04T16:00:00.000Z",
    },
    {
      id: 11,
      name: "Metro Card Recharge",
      category: "Travel",
      expenseType: "Debit",
      amount: 500,
      date: "2025-04-02T14:00:00.000Z",
    },
    {
      id: 12,
      name: "Petrol",
      category: "Travel",
      expenseType: "Debit",
      amount: 1200,
      date: "2025-04-05T11:30:00.000Z",
    },
    {
      id: 13,
      name: "Freelance Project",
      category: "Others",
      expenseType: "Credit",
      amount: 8000,
      date: "2025-04-03T13:00:00.000Z",
    },
    {
      id: 14,
      name: "Movie Night",
      category: "Others",
      expenseType: "Debit",
      amount: 350,
      date: "2025-04-04T19:00:00.000Z",
    },
    {
      id: 15,
      name: "Lunch with Friends",
      category: "Food",
      expenseType: "Debit",
      amount: 750,
      date: "2025-04-05T13:00:00.000Z",
    },
  ],
  balance: 25335,
};

const expenseSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      console.log("Data=", action.payload);

      state.transactions = [
        ...state.transactions,
        { id: state.transactions.length + 1, ...action.payload },
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
