// import mongoose from "mongoose";

// // Define Expense schema
// const expenseSchema = new mongoose.Schema({
//   category: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   amount: {
//     type: Number,
//     required: true
//   },
//   date: {
//     type: Date,
//     required: true,
//     default: Date.now
//   }
// });

// // Create model from schema
// const Expense = mongoose.model("Expense", expenseSchema);

// export default Expense;

import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  user: {   // ✅ NEW FIELD
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;