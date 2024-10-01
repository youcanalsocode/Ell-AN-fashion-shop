import React, { useState } from "react";
import { signUp } from "../services/authService"; // Use authentication service
import "../assets/style/SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp({ email, password });
    // Handle success or error messages
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
