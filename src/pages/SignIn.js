import React, { useState } from "react";
import { signIn } from "../services/authService"; // Use authentication service
import "../assets/style/SignIn.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
    // Handle success or error messages
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <h1>Sign In</h1>
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
