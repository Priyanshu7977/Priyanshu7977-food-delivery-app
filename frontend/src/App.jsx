import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import About from './pages/About/About';
import Delivery from './pages/Delivery/Delivery';
import Privacy from './pages/Privacy/Privacy';
import Landing from './pages/Landing/Landing';
import OrderSuccess from './pages/OrderSuccess/OrderSuccess';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser.name);
    }
  }, []);

  const ProtectedLayout = ({ children }) => {

    if (!user) {
      return <Navigate to="/" replace />;
    }

    return (
      <>
        <Navbar
          setShowLogin={setShowLogin}
          user={user}
          setUser={setUser}
        />
        <div className="app-container">
          {children}
        </div>
        <Footer />
      </>
    );
  };

  return (
    <>
      {showLogin && (
        <LoginPopup
          setShowLogin={setShowLogin}
          setUser={setUser}
        />
      )}

      <Routes>

        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/home" replace />
            ) : (
              <Landing
                user={user}
                setShowLogin={setShowLogin}
              />
            )
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedLayout>
              <Home />
            </ProtectedLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedLayout>
              <Cart />
            </ProtectedLayout>
          }
        />

        <Route
          path="/order"
          element={
            <ProtectedLayout>
              <PlaceOrder />
            </ProtectedLayout>
          }
        />

        <Route
          path="/success"
          element={
            <ProtectedLayout>
              <OrderSuccess />
            </ProtectedLayout>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedLayout>
              <About />
            </ProtectedLayout>
          }
        />

        <Route
          path="/delivery"
          element={
            <ProtectedLayout>
              <Delivery />
            </ProtectedLayout>
          }
        />

        <Route
          path="/privacy"
          element={
            <ProtectedLayout>
              <Privacy />
            </ProtectedLayout>
          }
        />

      </Routes>
    </>
  );
};

export default App;