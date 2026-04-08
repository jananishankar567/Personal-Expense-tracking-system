import "../styles/Dashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ViewExpenses from "./ViewExpenses";
import ExpenseModal from "./ExpenseModal";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { addExpense, getExpenses } from "../api/expenseApi";

function Dashboard({ onLogout }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [incomeInput, setIncomeInput] = useState("");

  // Filters
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStartDate, setFilterStartDate] = useState("");
  const [filterEndDate, setFilterEndDate] = useState("");

  const totalIncome = user?.income || 0;
  const totalExpense = expenses.reduce((acc, item) => acc + item.amount, 0);
  const totalBalance = totalIncome - totalExpense;

  const COLORS = ["#28a745", "#dc3545", "#1a73e8", "#ff9800", "#9c27b0"];

  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout?.();
    navigate("/");
  };

  // ✅ FETCH USER + EXPENSES with token guard
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // ✅ FIX 1: Redirect to login if no token found
        if (!token) {
          window.location.href = "/";
          return;
        }

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/auth/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // ✅ FIX 2: Redirect if token is expired or invalid (401)
        if (res.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
          return;
        }

        const userData = await res.json();
        setUser(userData.user);
        setIncomeInput(userData.user?.income || "");

        const expData = await getExpenses();
        setExpenses(expData);
      } catch (error) {
        console.error("Error loading dashboard:", error);
        // ✅ FIX 3: Redirect on network/server failure
        alert("Failed to load dashboard. Please login again.");
        window.location.href = "/";
      }
    };

    fetchData();
  }, []);

  // UPDATE INCOME
  const handleIncomeUpdate = async () => {
    // ✅ FIX 4: Validate income input before sending
    if (!incomeInput || Number(incomeInput) < 0) {
      alert("Please enter a valid income amount");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/income`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ income: Number(incomeInput) }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser((prev) => ({ ...prev, income: data.income }));
        alert("Income updated successfully ✅");
      } else {
        alert(data.message || "Failed to update income");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating income");
    }
  };

  // Add Expense
  const handleAddExpense = async (newExpense) => {
    try {
      const added = await addExpense(newExpense);
      setExpenses((prev) => [...prev, added]);
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to add expense");
    }
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const categories = ["All", ...new Set(expenses.map((e) => e.category))];

  const filteredExpenses = expenses.filter((e) => {
    const matchCategory =
      filterCategory === "All" || e.category === filterCategory;
    const matchStart =
      !filterStartDate || new Date(e.date) >= new Date(filterStartDate);
    const matchEnd =
      !filterEndDate || new Date(e.date) <= new Date(filterEndDate);
    return matchCategory && matchStart && matchEnd;
  });

  return (
    <div className={`dashboard-container ${darkMode ? "dark-mode" : ""}`}>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setIsCollapsed={setIsCollapsed}
      />

      <div className={`main-content ${isCollapsed ? "collapsed" : ""}`}>
        <Navbar
          user={user}
          onLogout={handleLogout}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          isCollapsed={isCollapsed}
        />

        {activeTab === "dashboard" && (
          <>
            {/* INCOME INPUT SECTION */}
            <div className="income-section">
              <h3>Set Monthly Income</h3>
              <input
                type="number"
                placeholder="Enter income"
                value={incomeInput}
                onChange={(e) => setIncomeInput(e.target.value)}
              />
              <button onClick={handleIncomeUpdate}>Save</button>
            </div>

            {/* Cards */}
            <div className="cards">
              {/* ✅ FIX 5: Show red color if balance is negative */}
              <div className="card balance-card">
                <h3>Total Balance</h3>
                <p style={{ color: totalBalance < 0 ? "#dc3545" : "inherit" }}>
                  ₹{totalBalance}
                </p>
              </div>

              <div className="card income-card">
                <h3>Income</h3>
                <p>₹{totalIncome}</p>
              </div>

              <div className="card expense-card">
                <h3>Expenses</h3>
                <p>₹{totalExpense}</p>
              </div>
            </div>

            {/* Filters */}
            <div className="filters">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <input
                type="date"
                value={filterStartDate}
                onChange={(e) => setFilterStartDate(e.target.value)}
              />

              <input
                type="date"
                value={filterEndDate}
                onChange={(e) => setFilterEndDate(e.target.value)}
              />
            </div>

            {/* Chart */}
            <div className="charts">
              <div className="chart-card">
                <h3>Expense Categories</h3>
                {/* ✅ FIX 6: Show message if no expenses yet */}
                {filteredExpenses.length === 0 ? (
                  <p style={{ textAlign: "center", color: "#888", marginTop: "60px" }}>
                    No expenses to display
                  </p>
                ) : (
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={filteredExpenses}
                        dataKey="amount"
                        nameKey="category"
                        outerRadius={80}
                        label
                      >
                        {filteredExpenses.map((entry, index) => (
                          <Cell
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Add Expense Button */}
            <div className="add-expense-btn-container">
              <button onClick={() => setShowModal(true)}>Add Expense</button>
            </div>
          </>
        )}

        {activeTab === "view-expenses" && (
          <ViewExpenses expenses={expenses} />
        )}

        {showModal && (
          <ExpenseModal
            closeModal={() => setShowModal(false)}
            handleAddExpense={handleAddExpense}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;