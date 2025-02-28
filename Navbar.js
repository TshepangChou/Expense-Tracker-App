import React from "react";
import { SunIcon } from "@heroicons/react/outline"; // Tailwind's heroicons

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 z-50">
      <h1 className="text-xl font-bold text-gray-800">Expense Tracker</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-500">Expenses</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-500">Settings</a></li>
      </ul>
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
        <SunIcon className="w-5 h-5 text-gray-700" />
      </button>
    </nav>
  );
};

export default Navbar;