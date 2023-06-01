import { Route, Routes } from 'react-router'
import Home from './routes/Home/Home.component';
import Header from './components/Header/Header.component';
import Login from './routes/Login/Login.component';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
