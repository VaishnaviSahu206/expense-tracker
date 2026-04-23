import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const [category, setCategory] = useState("Food");
  
   const fetchExpenses = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://expense-tracker-963p.onrender.com/api/expenses",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setExpenses(res.data);
    };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

{/* 🔥 Add Expense Form */}
<input
  placeholder="Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<input
  placeholder="Amount"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>

<select onChange={(e) => setCategory(e.target.value)}>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Bills">Bills</option>
</select>

<button
  onClick={async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://expense-tracker-963p.onrender.com/api/expenses",
        { title, amount, category},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchExpenses(); // 🔥 auto refresh
      setTitle("");    // clear input
      setAmount("");   // clear input

      alert("Expense Added");

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  }}
>
  Add Expense
</button>
<button onClick={() => {
  localStorage.removeItem("token");
  navigate("/login");
}}>
  Logout
</button>

   {expenses.map((exp) => (
  <div key={exp._id}>
    <p>Title: {exp.title}</p>
    <p>Amount: ₹{exp.amount}</p>
    <p>Category: {exp.category}</p>

    <button onClick={async () => {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://expense-tracker-963p.onrender.com/api/expenses/${exp._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchExpenses(); // refresh
    }}>
      Delete
    </button>

    <hr />
  </div>
))}
<h3>Total: ₹{total}</h3>

    </div>
  );
}

export default Dashboard;