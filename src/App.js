import './App.css';
import Headers from './Pages/Headers/Headers';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Banner from './Pages/Banner/Banner';

function App() {
  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Banner></Banner>}></Route>

      </Routes>
    </div>
  );
}

export default App;
