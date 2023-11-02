import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './views/login/Login';
import { Home } from './views/home/Home';
import { InsertProduct } from './views/create/InsertProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/post' element={<InsertProduct/>}/>
    </Routes>
  );
}

export default App;
