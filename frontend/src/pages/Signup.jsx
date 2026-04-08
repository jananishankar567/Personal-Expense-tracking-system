import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Auth.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      setErrorMessage("Please fill in all fields");
      setSuccessMessage("");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${apiBase}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, password: trimmedPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMessage("User added successfully! Please login.");
        setErrorMessage("");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setSuccessMessage("");
        setErrorMessage(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setSuccessMessage("");
      setErrorMessage("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signup</h2>
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form onSubmit={handleSignup} style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;
