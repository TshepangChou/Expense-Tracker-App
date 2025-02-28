import React, { useState } from "react";

const AddExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <form className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg transition-transform hover:scale-[1.02]">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Expense</h2>
      <div className="mb-4">
        <label className="block text-gray-600">Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          placeholder="Enter expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Amount</label>
        <input
          type="number"
          className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;