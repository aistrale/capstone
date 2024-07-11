import './signup.css';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /* const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false); */

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* if (fullname === '' || username === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    } */
    try {
      const response = await axios.post('http://localhost:3030/auth/register', { fullname, username, email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="signup-wrapper">
        <h1>Welcome! Please sign up:</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
          <label>
            <p className="mb-0">Your full name</p>
            <input type="text" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
            <p className="mb-0">Your username</p>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <p className="mb-0">Your email</p>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <p className="mb-0">Your password</p>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <div>
            <button type="submit" className="signup-btn">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  )
};

export default Signup;
