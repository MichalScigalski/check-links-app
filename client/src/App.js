import { Route, Routes } from 'react-router'
import Home from './routes/Home/Home.component';
import Header from './components/Header/Header.component';
import Login from './routes/Login/Login.component';
import Register from './routes/Register/Register.component';
import { useContext, useEffect } from 'react'
import { UserContext } from './context/User.context';
import authService from './services/auth.service';
import Profile from './routes/Profile/Profile.component';

const App = () => {
  const { setUser, user } = useContext(UserContext)

  useEffect(() => {
    const userLocalStorage = authService.getCurrentUser()
    if (userLocalStorage)
      setUser(userLocalStorage)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route index path='*' element={<Home />} />
        { user ?
          <>
            <Route path='/myprofile' element={<Profile />} />
          </>
          :
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </>
        }
      </Routes>
    </>
  );
}

export default App;
