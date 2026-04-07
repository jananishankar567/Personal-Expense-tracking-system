// import "../styles/Modal.css";
// import { useState } from "react";

// function ExpenseModal({ handleAddExpense, closeModal }) {
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState("");
//   const [date, setDate] = useState("");
//   const [error, setError] = useState("");

//   const submitExpense = () => {
//     if (!category || !amount || !date) {
//       setError("All fields are required");
//       return;
//     }
//     if (parseInt(amount) <= 0) {
//       setError("Amount must be greater than 0");
//       return;
//     }
//     handleAddExpense({ category, amount: parseInt(amount), date });
//     setCategory("");
//     setAmount("");
//     setDate("");
//     setError("");
//     closeModal();
//   };

//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         <h3>Add Expense</h3>
//         {error && <p className="error">{error}</p>}
//         <input
//           type="text"
//           placeholder="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <div className="modal-buttons">
//           <button onClick={submitExpense}>Add Expense</button>
//           <button className="cancel-btn" onClick={closeModal}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseModal;
import "../styles/Modal.css";
import { useState } from "react";

function ExpenseModal({ handleAddExpense, closeModal }) { // ✅ FIX
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const submitExpense = () => {
    if (!category || !amount || !date) {
      setError("All fields are required");
      return;
    }

    handleAddExpense({
      category,
      amount: parseInt(amount),
      date,
    });

    closeModal();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Add Expense</h3>

        {error && <p className="error">{error}</p>}

        <input
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input type="date" onChange={(e) => setDate(e.target.value)} />

        <div className="modal-buttons">
          <button onClick={submitExpense}>Add</button>
          <button className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseModal;