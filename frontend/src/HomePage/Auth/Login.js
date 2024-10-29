import React, { useState } from "react";
import { login } from "../../Services/apiServices";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = { username, password };
      const response = await login(data);

      if (response && response?.data && response?.data?.token) {
        if (!localStorage.getItem("token")) {
          localStorage.setItem("token", response?.data?.token);
        }
        alert("Login successful");
      } else {
        alert("Invalid credentials"); // Thông báo lỗi mặc định
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
