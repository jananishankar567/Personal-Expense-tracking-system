import express from "express";
import { getExpenses, addExpense } from "../controllers/expenseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.get("/", protect, getExpenses);
router.post("/", protect, addExpense);

export default router;