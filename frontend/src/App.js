import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MyFooter from './components/myFooter/MyFooter'

import Homepage from './pages/homepage/Homepage';
import UserPage from './pages/userPage/UserPage';
import JobEntryPage from './pages/jobEntryPage/JobEntryPage';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/user/:userId' element={<UserPage />} />
          <Route path='/entry/:entryId' element={<JobEntryPage />} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </>
  );
}

export default App;
