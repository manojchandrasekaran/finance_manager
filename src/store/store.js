import { configureStore } from "@reduxjs/toolkit";

import expenseReducer from "../features/expenseSlice";

const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

export default store;
