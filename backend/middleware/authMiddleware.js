import jwt from "jsonwebtoken";
import User from "../models/Users.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("Token received:", token ? "Present" : "Missing");

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded token:", decoded);

      req.user = await User.findById(decoded.id).select("-password");
      console.log("User found:", req.user ? "Yes" : "No");

      if (!req.user) {
        console.log("User not found in database for ID:", decoded.id);
        return res.status(401).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      console.error("Auth middleware error:", error.message);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    console.log("No authorization header or Bearer token");
    res.status(401).json({ message: "Not authorized, no token" });
  }
};