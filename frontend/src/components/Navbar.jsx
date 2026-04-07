// // import React from "react";
// // import "../styles/Navbar.css";

// // function Navbar({ user, onLogout, darkMode, toggleDarkMode }) {
// //   return (
// //     <nav className={`navbar ${darkMode ? "dark" : ""}`}>
// //       <div className="navbar-left">
// //         <h2>Personal Expense Tracker</h2>
// //       </div>
// //       <div className="navbar-right">
// //         <span className="user-greeting">Hello, {user.name} 👋</span>

// //         {/* Dark mode toggle */}
// //         <button className="dark-mode-btn" onClick={toggleDarkMode}>
// //           {darkMode ? "☀️ Light" : "🌙 Dark"}
// //         </button>

// //         {/* Logout */}
// //         <button className="logout-btn" onClick={onLogout}>
// //           Logout
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import "../styles/Navbar.css";

// function Navbar({ user, onLogout, darkMode, toggleDarkMode }) {
//   return (
//     <nav className={`navbar ${darkMode ? "dark" : ""}`}>
//       <h2>Expense Tracker</h2>

//       <div>
//         <span>Hello, {user?.name || "User"} 👋</span> {/* ✅ FIX */}

//         <button onClick={toggleDarkMode}>
//           {darkMode ? "Light" : "Dark"}
//         </button>

//         <button onClick={onLogout}>Logout</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import "../styles/Navbar.css";

function Navbar({ user, onLogout, darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      
      {/* LEFT */}
      <div className="nav-left">
        <h2>Expense Tracker</h2>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <span className="user-name">
          Hello, {user?.name || "User"} 👋
        </span>

        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>

    </nav>
  );
}

export default Navbar;