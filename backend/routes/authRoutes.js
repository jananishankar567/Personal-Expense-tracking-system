// import express from "express";
// import { signup, login, getDashboard } from "../controllers/authController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Public routes
// router.post("/signup", signup);
// router.post("/login", login);

// // Protected route
// router.get("/dashboard", protect, getDashboard);

// export default router;

// import express from "express";
// import {
//   signup,
//   login,
//   getDashboard,
//   updateIncome, // ✅ ADD THIS
// } from "../controllers/authController.js";

// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Public
// router.post("/signup", signup);
// router.post("/login", login);

// // Private
// router.get("/dashboard", protect, getDashboard);
// router.put("/income", protect, updateIncome); // ✅ NEW ROUTE

// export default router;

import express from "express";
import {
  signup,
  login,
  getDashboard,
  updateIncome,
} from "../controllers/authController.js"; // ✅ no 's' at end

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", protect, getDashboard);
router.put("/income", protect, updateIncome);

export default router;