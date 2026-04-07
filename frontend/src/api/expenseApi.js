// // src/api/expenseApi.js
// import axios from "axios";

// // Use Vite's import.meta.env for env variables
// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// // Function to add an expense
// export const addExpense = async (expense) => {
//   try {
//     const res = await axios.post(`${API_URL}/expenses`, expense);
//     return res.data;
//   } catch (error) {
//     console.error("Error adding expense:", error);
//     throw error;
//   }
// };

// // Function to get all expenses
// export const getExpenses = async () => {
//   try {
//     const res = await axios.get(`${API_URL}/expenses`);
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching expenses:", error);
//     throw error;
//   }
// };


// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// // Get token
// const getToken = () => {
//   return localStorage.getItem("token");
// };

// // Add expense
// export const addExpense = async (expense) => {
//   const res = await axios.post(`${API_URL}/expenses`, expense, {
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//   });
//   return res.data;
// };

// // Get expenses
// export const getExpenses = async () => {
//   const res = await axios.get(`${API_URL}/expenses`, {
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//   });
//   return res.data;
// };

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getToken = () => localStorage.getItem("token");

// Add expense
export const addExpense = async (expense) => {
  const res = await axios.post(`${API_URL}/expenses`, expense, {
    headers: {
      Authorization: `Bearer ${getToken()}`, // ✅ FIX
    },
  });
  return res.data;
};

// Get expenses
export const getExpenses = async () => {
  const res = await axios.get(`${API_URL}/expenses`, {
    headers: {
      Authorization: `Bearer ${getToken()}`, // ✅ FIX
    },
  });
  return res.data;
};