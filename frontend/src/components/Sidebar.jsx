// import React, { useState } from "react";
// import "../styles/Sidebar.css";

// function Sidebar({ activeTab, setActiveTab }) {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => setCollapsed(!collapsed);

//   return (
//     <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       {/* Collapse Button */}
//       <button className="collapse-btn" onClick={toggleSidebar}>
//         {collapsed ? "➡️" : "⬅️"}
//       </button>

//       {/* Menu */}
//       <div className="menu">
//         <div
//           className={`menu-item ${activeTab === "dashboard" ? "active" : ""}`}
//           onClick={() => setActiveTab("dashboard")}
//         >
//           🏠 {collapsed ? "" : "Dashboard"}
//         </div>

//         <div
//           className={`menu-item ${activeTab === "view-expenses" ? "active" : ""}`}
//           onClick={() => setActiveTab("view-expenses")}
//         >
//           📋 {collapsed ? "" : "View Expenses"}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
// import React, { useState } from "react";
// import "../styles/Sidebar.css";

// function Sidebar({ activeTab, setActiveTab, setIsCollapsed }) {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     const newState = !collapsed;
//     setCollapsed(newState);
//     setIsCollapsed(newState); // ✅ sync with Dashboard
//   };

//   return (
//     <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
//       {/* Collapse Button */}
//       {/* <button className="collapse-btn" onClick={toggleSidebar}>
//         {collapsed ? "➡️" : "⬅️"}
//       </button> */}

//       {/* Menu */}
//       <div className="menu">
//         <div className="welcome_text">
//           <h3>Welcome!!!</h3>
//         </div>
//         <div
//           className={`menu-item ${activeTab === "dashboard" ? "active" : ""}`}
//           onClick={() => setActiveTab("dashboard")}
//         >
//           🏠 {!collapsed && "Dashboard"}
//         </div>

//         <div
//           className={`menu-item ${activeTab === "view-expenses" ? "active" : ""}`}
//           onClick={() => setActiveTab("view-expenses")}
//         >
//           📋 {!collapsed && "View Expenses"}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import React from "react";
import "../styles/Sidebar.css";

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="sidebar">
      
      {/* Welcome Text */}
      <div className="menu">
        <div className="welcome_text">
          <h3>Welcome!!!</h3>
        </div>

        {/* Dashboard */}
        <div
          className={`menu-item ${activeTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          🏠 Dashboard
        </div>

        {/* View Expenses */}
        <div
          className={`menu-item ${activeTab === "view-expenses" ? "active" : ""}`}
          onClick={() => setActiveTab("view-expenses")}
        >
          📋 View Expenses
        </div>
      </div>
    </div>
  );
}

export default Sidebar;