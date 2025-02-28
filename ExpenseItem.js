import React from "react";
import { ShoppingCartIcon, TruckIcon, CreditCardIcon } from "@heroicons/react/solid";

const categoryIcons = {
  Groceries: <ShoppingCartIcon className="w-6 h-6 text-green-500" />,
  Transport: <TruckIcon className="w-6 h-6 text-yellow-500" />,
  Bills: <CreditCardIcon className="w-6 h-6 text-red-500" />,
};

const ExpenseItem = ({ expense }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center mb-4">
      <div className="flex items-center space-x-3">
        {categoryIcons[expense.title] || <CreditCardIcon className="w-6 h-6 text-gray-400" />}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{expense.title}</h2>
          <p className="text-sm text-gray-500">{expense.date}</p>
        </div>
      </div>
      <span className="text-xl font-bold text-red-500">-${expense.amount}</span>
    </div>
  );
};

export default ExpenseItem;