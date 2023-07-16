import React, { useState } from "react";
import "./LoginStyle.css";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };
 

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            style={{ color: "black" }}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            style={{ color: "black" }}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <a href="/" style={{ color: "black", fontWeight: "10" }}>
            Get started with us / Sign-In
          </a>
        </div>
        <button type="submit">
          <Link to="/">Login</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
