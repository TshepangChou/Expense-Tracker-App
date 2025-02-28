import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
      setExpenses: (state, action) => {
        state.expenses = action.payload;
      },
      addExpense: (state, action) => {
        state.expenses.push(action.payload);
      },
      removeExpense: (state, action) => {
        state.expenses = state.expenses.filter(exp => exp._id !== action.payload);
      },
    },
  });

  export const { setExpenses, addExpense, removeExpense } = expenseSlice.actions;
  export default expenseSlice.reducer;