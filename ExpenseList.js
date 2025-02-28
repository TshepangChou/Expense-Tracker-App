import React from "react";
import ExpenseItem from "./ExpenseItem";

const expenses = [
  { id: 1, title: "Groceries", amount: 50, date: "Feb 14, 2025" },
  { id: 2, title: "Transport", amount: 20, date: "Feb 13, 2025" },
];

const ExpenseList = () => {
  return (
    <div className="max-w-lg mx-auto mt-16 p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Expenses</h2>
      <div className="space-y-4">
        {expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
      </div>
    </div>
  );
};

export default ExpenseList;