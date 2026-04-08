// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "../styles/Auth.css";

// function Signup() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = () => {
//     console.log(name, email, password);
//     navigate("/");
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Signup</h2>

//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />

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

//         <button onClick={handleSignup}>Signup</button>

//         <p onClick={() => navigate("/")}>
//           Already have an account? Login
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "../styles/Auth.css";

// function Signup() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (data.token) {
//         alert("Signup successful ✅");
//         localStorage.setItem("token", data.token);
//         navigate("/dashboard"); // ✅ go to dashboard
//       } else {
//         alert(data.message || "Signup failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Signup</h2>

//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />

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

//         <button onClick={handleSignup}>Signup</button>

//         <p onClick={() => navigate("/")}>
//           Already have an account? Login
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "../styles/Auth.css";

// function Signup() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async () => {
//     if (!name || !email || !password) {
//       alert("All fields are required");
//       return;
//     }

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (res.ok && data.token) {
//         // ✅ Store token
//         localStorage.setItem("token", data.token);

//         alert("Signup successful ✅");

//         // ✅ FORCE REDIRECT
//         window.location.href = "/dashboard";
//       } else {
//         alert(data.message || "Signup failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Signup</h2>

//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleSignup} disabled={loading}>
//           {loading ? "Signing up..." : "Signup"}
//         </button>

//         <p onClick={() => navigate("/")}>
//           Already have an account? Login
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "../styles/Auth.css";

// function Signup() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async () => {
//     if (!name || !email || !password) {
//       alert("All fields are required");
//       return;
//     }

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch(
//         `${import.meta.env.VITE_API_URL}/api/auth/signup`, // ✅ FIXED
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ name, email, password }),
//         }
//       );

//       const data = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem("token", data.token);

//         alert("Signup successful ✅");

//         navigate("/dashboard");
//       } else {
//         alert(data.message || "Signup failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Signup</h2>

//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleSignup} disabled={loading}>
//           {loading ? "Signing up..." : "Signup"}
//         </button>

//         <p onClick={() => navigate("/")}>
//           Already have an account? Login
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        alert("Signup successful ✅");
        window.location.href = "/dashboard";
      } else {
        alert(data.message || "Signup failed");
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
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button onClick={handleSignup} disabled={loading}>
          {loading ? "Signing up..." : "Signup"}
        </button>

        <p onClick={() => navigate("/")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;