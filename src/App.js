import './App.css';
import Headers from './Pages/Headers/Headers';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/Login/Login';
import Banner from './Pages/Banner/Banner';
import Inventory from './Pages/Inventory/Inventory';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Banner></Banner>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>


      </Routes>
    </div>
  );
}

export default App;
