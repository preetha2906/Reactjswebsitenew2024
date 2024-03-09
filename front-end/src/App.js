import './App.css';
import Nav from './Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Footer'
import SignUp from './SignUp';
import PrivateComponent from './PrivateComponent';
import Login from './Login';
import Addproduct from './AddProducts';
import Products from './Products';
import ProductsslideComponent from './Productsslide'
import Profile from './profile'
function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Nav />
      <Routes> 
        <Route element={<PrivateComponent />} >
        <Route path='/' element={<ProductsslideComponent />} />
        <Route path='/add' element={<Addproduct />} />
        <Route path='/update' element={<Products />} />
        <Route path='/logout' element={<h1>Logout Component</h1>} />
        <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
