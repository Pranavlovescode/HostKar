// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Deals from './components/Navbar/Deals';
import Home from './components/Navbar/Home';
import Services from './components/Navbar/Testemonials';
import LoginPage from './components/Navbar/LoginPage'
import SignupPage from './components/Navbar/SignupPage';
// import Cart from './components/Navbar/Cart';

const App = () => {
  return (
    <>
    <Router>      
        <Navbar />
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/deals" element={<Deals />} />
        <Route path="/testemonials" element={<Services />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/signup-page" element={<SignupPage />} />
        {/* <Route path="/protected-route/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
    </>
  );
};

export default App;





