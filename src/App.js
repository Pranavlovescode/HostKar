// App.js
import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Deals from "./components/Navbar/Deals";
import Home from "./components/Navbar/Home";
import Services from "./components/Navbar/Testemonials";
import LoginPage from "./components/Navbar/LoginPage";
import SignupPage from "./components/Navbar/SignupPage";
import Cart from "./components/Navbar/Cart";
import app from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app);
const App = () => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is login
        setAuthenticated(user);
      } else {
        // User is logged out
        setAuthenticated(null);
      }
    });
  }, []);
  return (
    <>
      {authenticated ? (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/testemonials" element={<Services />} />            
            <Route path="/protected-route/cart" element={<Cart />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/testemonials" element={<Services />} />
            <Route
              path="/login-page"
              element={<LoginPage />}
            />
            <Route path="/signup-page" element={<SignupPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
