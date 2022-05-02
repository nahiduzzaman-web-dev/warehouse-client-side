import './App.css';
import Headers from './Pages/Headers/Headers';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/Login/Login';
import Banner from './Pages/Banner/Banner';
import Inventory from './Pages/Inventory/Inventory';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import Testimonials from './Pages/Testimonials/Testimonials';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import UpdateMedicine from './Pages/UpdateMedicine/UpdateMedicine';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';

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
        <Route path='/testimonials' element={<Testimonials></Testimonials>}></Route>

        <Route path='/update/:updateId' element={
          <RequireAuth>
            <UpdateMedicine></UpdateMedicine>
          </RequireAuth>
        }></Route>

        <Route path='/additems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>

        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
