import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

      const res = await fetch(`${apiBase}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword }),
      });

      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        onLogin?.();
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p onClick={() => navigate("/signup")}>Don't have an account? Signup</p>
      </div>
    </div>
  );
}

export default Login;
