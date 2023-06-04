import { Route, Routes } from 'react-router'
import Home from './routes/Home/Home.component';
import Header from './components/Header/Header.component';
import Login from './routes/Login/Login.component';
import Register from './routes/Register/Register.component';
import { useContext, useEffect } from 'react'
import { UserContext } from './context/User.Context';
import authService from './services/auth.service';

const App = () => {
  const { setUser } = useContext(UserContext)

  useEffect(() => {
      const user = authService.getCurrentUser()
      if (user)
          setUser(user)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
