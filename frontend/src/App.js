import { Route, Routes } from 'react-router'
import Home from './routes/Home/Home.component';
import Header from './components/Header/Header.component';
import Login from './routes/Login/Login.component';
import Register from './routes/Register/Register.component';

const App = () => {
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
