
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Layout/Header';
import Home from './Component/Layout/Pages/Home';
import Service from './Component/Layout/Pages/Service';
import About from './Component/Layout/Pages/About';
import Contact from './Component/Layout/Pages/Contact';
import Login from './Component/Layout/Pages/Login';
import Notification from './Component/Layout/Pages/Notification';
import Cart from './Component/Layout/Pages/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  return (

    <>

    <Header count={cart.length}/>

    <Routes>

    <Route path='/' element={<Home addToCart={addToCart}/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/notification' element={<Notification/>}/>
    <Route path='/cart' element={<Cart cart={cart}/>}/>
      
    </Routes>
    </>
    
  );
}

export default App;
