import axios from "axios";

const API_URL = "http://localhost:5000/api/expenses/";

export const getExpenses = async (token) => {
  return await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
};

export const addExpense = async (expense, token) => {
  return await axios.post(API_URL, expense, { headers: { Authorization: `Bearer ${token}` } });
};

export const deleteExpense = async (id, token) => {
  return await axios.delete(API_URL + id, { headers: { Authorization: `Bearer ${token}` } });
};