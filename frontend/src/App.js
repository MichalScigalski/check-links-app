import { Route, Routes } from 'react-router'
import Home from './routes/Home/Home.component';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />}/>
    </Routes>
  );
}

export default App;
