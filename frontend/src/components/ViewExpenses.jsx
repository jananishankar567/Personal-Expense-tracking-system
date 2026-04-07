import { useState, useMemo } from "react";
import "../styles/ViewExpenses.css";

function ViewExpenses({ expenses = [] }) {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState(""); // "asc" or "desc"

  // Compute filtered expenses dynamically
  const filteredExpenses = useMemo(() => {
    let filtered = expenses.filter(
      (e) => e.category && e.category.toLowerCase().includes(search.toLowerCase())
    );

    if (sortType === "asc") {
      filtered.sort((a, b) => (a.amount || 0) - (b.amount || 0));
    } else if (sortType === "desc") {
      filtered.sort((a, b) => (b.amount || 0) - (a.amount || 0));
    }

    return filtered;
  }, [search, sortType, expenses]);

  return (
    <div className="view-expenses-section">
      <h3>View Expenses</h3>

      <div className="view-expense-controls">
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="">Sort by Amount</option>
          <option value="asc">Amount Ascending</option>
          <option value="desc">Amount Descending</option>
        </select>
      </div>

      <table className="expenses-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No expenses found.
              </td>
            </tr>
          ) : (
            filteredExpenses.map((item, idx) => (
              <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewExpenses;