import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// import { AuthContext } from './modules/AuthContext';

import MyNav from './components/myNav/MyNav'
import MyFooter from './components/myFooter/MyFooter'
import Login from './components/login/Login'
import Homepage from './pages/homepage/Homepage';
import UserPage from './pages/userPage/UserPage';
import JobEntryPage from './pages/jobEntryPage/JobEntryPage';


const App = () => {

  const [token, setToken] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  // const [AuthUser, setAuthUser] = useState('')

  const login = async () => {
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: '', password: '' }),
    });

    if (response.ok) {
      const { token } = await response.json();
      setToken(token);
    } else {
      console.error('Login failed');
    }
  };

  return (
    <>
    {/* <AuthContext.Provider value={[AuthUser, setAuthUser]}> */}
      <MyNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path='/user/:userId' element={<UserPage />} />
          <Route path='/entry/:entryId' element={<JobEntryPage />} />
        </Routes>
      </BrowserRouter>
      <div>
      <button onClick={login}>Login</button>
      </div>
      <MyFooter />
      {/* </AuthContext.Provider> */}
    </>
  );
}

export default App;
