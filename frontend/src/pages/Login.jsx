// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "../styles/Auth.css";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     console.log(email, password);
//     navigate("/dashboard");
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Login</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleLogin}>Login</button>

//         <p onClick={() => navigate("/signup")}>
//           Don't have an account? Signup
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "../styles/Auth.css";

// function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (data.token) {
//         localStorage.setItem("token", data.token); // ✅ store token
//         navigate("/dashboard"); // ✅ redirect
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Login</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleLogin}>Login</button>

//         <p onClick={() => navigate("/signup")}>
//           Don't have an account? Signup
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        // ✅ Store token
        localStorage.setItem("token", data.token);

        // ✅ FORCE REDIRECT (fix blank page issue)
        window.location.href = "/dashboard";
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p onClick={() => navigate("/signup")}>
          Don't have an account? Signup
        </p>
      </div>
    </div>
  );
}

export default Login;