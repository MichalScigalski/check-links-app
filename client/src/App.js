import { Route, Routes } from 'react-router'
import Home from './routes/Home/Home.component';
import Header from './components/Header/Header.component';
import Login from './routes/Login/Login.component';
import Register from './routes/Register/Register.component';
import { useContext, useEffect } from 'react'
import { UserContext } from './context/User.context';
import authService from './services/auth.service';
import MyProfile from './routes/MyProfile/MyProfile.component';
import Profile from './routes/Profile/Profile.component';

const App = () => {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    const userLocalStorage = authService.getCurrentUser()
    if (userLocalStorage)
      setUser(userLocalStorage)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/:username' element={<Profile />}/>
        {user ?
          <>
            <Route path='/myprofile' element={<MyProfile />} />
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
