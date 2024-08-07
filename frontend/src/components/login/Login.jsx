import "./login.css";
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3030/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password: password }),
      });
  
      if (response.ok) {
        const { token } = await response.json();
        setToken(token);
        localStorage.setItem('token', token)
      } else {
        console.error('Login failed');
      }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
        <label>
          <p className="mb-0">Username</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label>
          <p className="mb-0">Password</p> <input type="password" onChange={(e) => setPassword(e.target.value)} required/>
        </label>
        <div>
          <button type="submit" className="login-btn">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
