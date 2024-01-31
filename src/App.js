import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './views/login/Login';
import { Home } from './views/home/Home';
import { CreateRecipes } from './views/recipes/CreateRecipes';
import { Products } from './views/products/Products';
import { InsertProduct } from './components/chargeProduct/InsertProduct'
import { ProductsList } from './components/productsList/ProductsList';
import { CreatePlates } from './views/menu/CreatePlates'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/insert' element={<InsertProduct/>}/>
      <Route path='/products/list' element={<ProductsList/>}/>
      <Route path='/recipe' element={<CreateRecipes/>}/>
      <Route path='/menu' element={<CreatePlates/>}/>
    </Routes>
  );
}

export default App;
