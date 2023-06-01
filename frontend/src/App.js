import { Route, Routes } from 'react-router'
import Home from './routes/Home/Home.component';
import Header from './components/Header/Header.component';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
