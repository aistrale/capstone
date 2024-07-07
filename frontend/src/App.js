import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from './modules/AuthContext';

import MyFooter from './components/myFooter/MyFooter'

import Homepage from './pages/homepage/Homepage';
import UserPage from './pages/userPage/UserPage';
import JobEntryPage from './pages/jobEntryPage/JobEntryPage';


const App = () => {

  const [AuthUser, setAuthUser] = useState('')

  return (
    <>
    <AuthContext.Provider value={[AuthUser, setAuthUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/user/:userId' element={<UserPage />} />
          <Route path='/entry/:entryId' element={<JobEntryPage />} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
      </AuthContext.Provider>
    </>
  );
}

export default App;
