import { useState } from "react";

function AddExpense({ handleAddExpense }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const submitExpense = () => {
    if (category && amount) {
      handleAddExpense({ category, amount: parseInt(amount) });
      setCategory("");
      setAmount("");
      alert("Expense added successfully!");
    }
  };

  return (
    <div className="add-expense-section">
      <h3>Add Expense</h3>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={submitExpense}>Add Expense</button>
    </div>
  );
}

export default AddExpense;