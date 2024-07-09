import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import MyNav from './components/myNav/MyNav'
import MyFooter from './components/myFooter/MyFooter'
import Login from './components/login/Login'
import Homepage from './pages/homepage/Homepage';
import UserPage from './pages/userPage/UserPage';
import JobEntryPage from './pages/jobEntryPage/JobEntryPage';


const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  // useEffect // creare uno useeffect per valorizzare se l'utente è loggato o meno


  return (
    <>
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
    </>
  );
}

export default App;
