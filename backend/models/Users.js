
// // import mongoose from "mongoose";
// // import bcrypt from "bcryptjs";

// // const userSchema = new mongoose.Schema(
// //   {
// //     name: {
// //       type: String,
// //       required: true,
// //       trim: true,
// //     },
// //     email: {
// //       type: String,
// //       required: true,
// //       unique: true,
// //       lowercase: true,
// //     },
// //     password: {
// //       type: String,
// //       required: true,
// //       minlength: 6,
// //     },
// //   },
// //   { timestamps: true }
// // );

// // // Hash password before saving
// // userSchema.pre("save", async function (next) {
// //   if (!this.isModified("password")) return next();
// //   const salt = await bcrypt.genSalt(10);
// //   this.password = await bcrypt.hash(this.password, salt);
// //   next();
// // });

// // // Compare password method
// // userSchema.methods.matchPassword = async function (enteredPassword) {
// //   return await bcrypt.compare(enteredPassword, this.password);
// // };

// // const User = mongoose.model("User", userSchema);

// // export default User;
// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//     },

//     // ✅ NEW FIELD
//     income: {
//       type: Number,
//       default: 0,
//     },
//   },
//   { timestamps: true }
// );

// // Hash password
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }

//   try {
//     if (!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     console.error("Password hashing error:", error);
//     next(error);
//   }
// });

// // Compare password
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model("User", userSchema);

// export default User;


// models/Users.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  income: { type: Number, default: 0 },
});

// Hash password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;