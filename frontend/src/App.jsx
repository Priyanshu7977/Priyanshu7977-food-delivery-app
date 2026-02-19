import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import About from './pages/About/About';
import Delivery from './pages/Delivery/Delivery';
import Privacy from './pages/Privacy/Privacy';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  // Keep user logged in after refresh
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser.name);
    }
  }, []);

  return (
    <>
      {showLogin && 
        <LoginPopup 
          setShowLogin={setShowLogin} 
          setUser={setUser} 
        />
      }

      <div className='app'>
        <Navbar 
          setShowLogin={setShowLogin} 
          user={user}
          setUser={setUser}
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/about' element={<About />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      </div>

      <Footer/>
    </>
  );
};

export default App;
