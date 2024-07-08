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

  const [loggedIn, setLoggedIn] = useState(false)
  // const [AuthUser, setAuthUser] = useState('')

  useEffect // valorozzatre se utente è loggatyo
  

  return (
    <>
    {/* <AuthContext.Provider value={[AuthUser, setAuthUser]}> */}
      <MyNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path='/user/:userId' element={<UserPage />} />
          <Route path='/entry/:entryId' element={<JobEntryPage />} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
      {/* </AuthContext.Provider> */}
    </>
  );
}

export default App;
