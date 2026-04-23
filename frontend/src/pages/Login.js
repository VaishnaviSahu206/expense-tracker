import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://expense-tracker-963p.onrender.com/api/users/login",
        form
      );

      localStorage.setItem("token", res.data.token);
       navigate("/dashboard");

      alert("Login Success");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;