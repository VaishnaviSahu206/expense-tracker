import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("https://expense-tracker-963p.onrender.com/api/users/register", form);
      alert("Registered Successfully");
    } catch (err) {
      alert("Error");
    }
    
    alert("Registered Successfully");
    navigate("/login");
  };
  

  return (
    <div>
      <h2>Register</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;