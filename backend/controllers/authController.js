// import User from "../models/Users.js";
// import jwt from "jsonwebtoken";

// // Generate JWT token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };

// // @desc    Register a new user
// // @route   POST /api/auth/signup
// // @access  Public
// export const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     const user = await User.create({ name, email, password });

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to register user" });
//   }
// };

// // @desc    Login user
// // @route   POST /api/auth/login
// // @access  Public
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required" });
//   }

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to login" });
//   }
// };

// // @desc    Get user profile (dashboard data)
// // @route   GET /api/auth/dashboard
// // @access  Private
// export const getDashboard = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       message: `Welcome ${user.name}!`,
//       user,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to fetch dashboard data" });
//   }
// };
// import User from "../models/Users.js";
// import jwt from "jsonwebtoken";

// // Generate JWT token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };

// // @desc    Register a new user
// // @route   POST /api/auth/signup
// // @access  Public
// export const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // ✅ income defaults to 0 automatically
//     const user = await User.create({ name, email, password });

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       income: user.income, // ✅ include income
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to register user" });
//   }
// };

// // @desc    Login user
// // @route   POST /api/auth/login
// // @access  Public
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required" });
//   }

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await user.matchPassword(password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       income: user.income, // ✅ include income
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to login" });
//   }
// };

// // @desc    Get user profile (dashboard data)
// // @route   GET /api/auth/dashboard
// // @access  Private
// export const getDashboard = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       message: `Welcome ${user.name}!`,
//       user, // ✅ includes income
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to fetch dashboard data" });
//   }
// };

// // ======================================================
// // ✅ NEW FEATURE: UPDATE USER INCOME
// // ======================================================

// // @desc    Update user income
// // @route   PUT /api/auth/income
// // @access  Private
// export const updateIncome = async (req, res) => {
//   const { income } = req.body;

//   // Validation
//   if (income === undefined || income < 0) {
//     return res.status(400).json({ message: "Valid income is required" });
//   }

//   try {
//     const user = await User.findById(req.user.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.income = Number(income);
//     await user.save();

//     res.status(200).json({
//       message: "Income updated successfully",
//       income: user.income,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to update income" });
//   }
// };

// import User from "../models/Users.js";
// import jwt from "jsonwebtoken";

// // Generate JWT token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };

// // ==========================
// // SIGNUP
// // ==========================
// export const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     const user = await User.create({
//       name,
//       email,
//       password,
//       income: 0, // ✅ default income
//     });

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       income: user.income,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to register user" });
//   }
// };

// // ==========================
// // LOGIN
// // ==========================
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({
//       message: "Email and password are required",
//     });
//   }

//   try {
//     const user = await User.findOne({ email });

//     if (!user || !(await user.matchPassword(password))) {
//       return res.status(401).json({
//         message: "Invalid credentials",
//       });
//     }

//     res.status(200).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       income: user.income,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to login" });
//   }
// };

// // ==========================
// // GET DASHBOARD
// // ==========================
// export const getDashboard = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       message: `Welcome ${user.name}!`,
//       user,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Failed to fetch dashboard data",
//     });
//   }
// };

// // ======================================================
// // ✅ FIXED: UPDATE INCOME (NO VALIDATION ERROR)
// // ======================================================

// export const updateIncome = async (req, res) => {
//   const { income } = req.body;

//   if (income === undefined || income < 0) {
//     return res.status(400).json({
//       message: "Valid income is required",
//     });
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.user.id,
//       { income: Number(income) },
//       { new: true } // return updated data
//     );

//     if (!updatedUser) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }

//     res.status(200).json({
//       message: "Income updated successfully",
//       income: updatedUser.income,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Failed to update income",
//     });
//   }
// };


import User from "../models/Users.js";
import jwt from "jsonwebtoken";

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ==========================
// SIGNUP
// ==========================
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Signup attempt:", { name, email, password: password ? "provided" : "missing" });

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "Email already registered" });
    }

    console.log("Creating user...");
    const user = await User.create({
      name,
      email,
      password,
      income: 0,
    });

    console.log("User created:", user._id, user.name, user.email);

    const token = generateToken(user._id);
    console.log("Token generated for user:", user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      income: user.income,
      token: token,
    });
  } catch (error) {
    console.error("SIGNUP ERROR:", error.message);
    res.status(500).json({ message: "Failed to register user", error: error.message });
  }
};

// ==========================
// LOGIN
// ==========================
export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", { email, password: password ? "provided" : "missing" });

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    console.log("User found in DB:", user ? "Yes" : "No");

    if (!user) {
      console.log("User not found:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);
    console.log("Password match:", isMatch ? "Yes" : "No");

    if (!isMatch) {
      console.log("Password mismatch for user:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    console.log("Login successful for user:", user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      income: user.income,
      token: token,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error.message);
    res.status(500).json({ message: "Failed to login", error: error.message });
  }
};

// ==========================
// GET DASHBOARD
// ==========================
export const getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: `Welcome ${user.name}!`,
      user,
    });
  } catch (error) {
    console.error("DASHBOARD ERROR:", error.message);
    res.status(500).json({ message: "Failed to fetch dashboard data", error: error.message });
  }
};

// ==========================
// UPDATE INCOME
// ==========================
export const updateIncome = async (req, res) => {
  const { income } = req.body;

  if (income === undefined || income < 0) {
    return res.status(400).json({ message: "Valid income is required" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { income: Number(income) },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Income updated successfully",
      income: updatedUser.income,
    });
  } catch (error) {
    console.error("INCOME UPDATE ERROR:", error.message);
    res.status(500).json({ message: "Failed to update income", error: error.message });
  }
};