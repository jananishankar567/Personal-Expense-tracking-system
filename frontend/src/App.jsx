// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./components/Dashboard"; // Updated path

// function App() {
//   const [user, setUser] = useState(null); // Logged-in user state

//   // Mock login/signup handler
//   const handleLogin = (username) => setUser({ name: username });
//   const handleLogout = () => setUser(null);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Login route */}
//         <Route
//           path="/"
//           element={
//             user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
//           }
//         />

//         {/* Signup route */}
//         <Route
//           path="/signup"
//           element={
//             user ? <Navigate to="/dashboard" /> : <Signup onSignup={handleLogin} />
//           }
//         />

//         {/* Dashboard route */}
//         <Route
//           path="/dashboard/*"
//           element={
//             user ? (
//               <Dashboard user={user} onLogout={handleLogout} />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />

//         {/* Catch-all: redirect unknown URLs to login */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./components/Dashboard";

// function App() {
//   const isAuthenticated = localStorage.getItem("token");

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Login */}
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? <Navigate to="/dashboard" /> : <Login />
//           }
//         />

//         {/* Signup */}
//         <Route
//           path="/signup"
//           element={
//             isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />
//           }
//         />

//         {/* Dashboard */}
//         <Route
//           path="/dashboard/*"
//           element={
//             isAuthenticated ? <Dashboard /> : <Navigate to="/" />
//           }
//         />

//         {/* Catch-all */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./components/Dashboard";

// function App() {
//   // ✅ DIRECT READ (NO useEffect, NO warning)
//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Login */}
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? <Navigate to="/dashboard" /> : <Login />
//           }
//         />

//         {/* Signup */}
//         <Route
//           path="/signup"
//           element={
//             isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />
//           }
//         />

//         {/* Dashboard */}
//         <Route
//           path="/dashboard"
//           element={
//             isAuthenticated ? <Dashboard /> : <Navigate to="/" />
//           }
//         />

import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const handleAuthChange = (value) => {
    setIsAuthenticated(value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLogin={() => handleAuthChange(true)} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Signup onSignup={() => handleAuthChange(true)} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard onLogout={() => handleAuthChange(false)} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
