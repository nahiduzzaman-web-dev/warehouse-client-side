import './App.css';
import Headers from './Pages/Headers/Headers';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'

function App() {
  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
