
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await  axios.post('https://localhost:7116/login', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <label>Username</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
