// import Expense from "../models/Expense.js";

// // Get all expenses
// export const getExpenses = async (req, res) => {
//   try {
//     const expenses = await Expense.find().sort({ date: -1 });
//     res.status(200).json(expenses);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch expenses", error });
//   }
// };

// // Add a new expense
// export const addExpense = async (req, res) => {
//   const { category, amount, date } = req.body;

//   if (!category || !amount || !date) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const newExpense = new Expense({ category, amount, date });
//     const savedExpense = await newExpense.save();
//     res.status(201).json(savedExpense);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to add expense", error });
//   }
// };

import Expense from "../models/Expense.js";

// Get all expenses (ONLY LOGGED-IN USER)
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch expenses", error });
  }
};

// Add expense
export const addExpense = async (req, res) => {
  const { category, amount, date } = req.body;

  if (!category || !amount || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newExpense = new Expense({
      category,
      amount,
      date,
      user: req.user._id, // ✅ IMPORTANT
    });

    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: "Failed to add expense", error });
  }
};