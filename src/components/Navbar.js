import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import app from "../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app);

function Navbar() {
  const [showNav, setshowNav] = useState(false);
  // const [token, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(user);
      } else {
        setAuthenticated(null);
      }
    });
    // Close the navbar when the user navigates to a specific page
    const pagesToCloseNavbar = ["/deals", "/", "/testemonials"]; // Add the paths of pages where you want to close the navbar

    if (pagesToCloseNavbar.includes(location.pathname)) {
      console.log("closing");
      setshowNav(false);
    }
  }, [location.pathname, setshowNav]);

  function DecideBars() {
    return showNav ? (
      <i className="fa-solid fa-xmark"></i>
    ) : (
      <i className="fa-solid fa-bars"></i>
    );
  }

  function DisplayNavbar() {
    setshowNav((prevShowNav) => !prevShowNav);
  }

  const openLoginPage = () => {
    navigate("/login-page");
  };

  const openSignupPage = () => {
    navigate("/signup-page");
  };

  const logout=()=>{
    signOut(auth)
    alert('Logout Successfull')
    navigate('/')
  }

  return (
    <nav className="fixed w-full m-0 p-0 flex bg-indigo-300 z-50">
      {/* Navbar Content */}
      <div className="flex md:flex-row flex-col p-2 justify-between">
        <span className="flex items-center p-2 hover:cursor-pointer font-sans font-bold text-indigo-950 text-xl">
          <NavLink
            to="/"
            className="hover:text-indigo-800 transition duration-300"
          >
            HostKar
          </NavLink>
        </span>

        <div
          className={`${
            showNav ? "flex" : "hidden"
          } md:flex md:flex-row text-xl `}
        >
          <ul className="flex md:flex-row flex-col px-2 text-start text-indigo-800">
            <li className="p-2 hover:cursor-pointer">
              <NavLink
                to="/"
                exact
                className={`dealy-100 ease-in-out ${
                  location.pathname === "/"
                    ? "border-b-2 border-indigo-800"
                    : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            <li className="p-2 hover:cursor-pointer ">
              <NavLink
                to="/deals"
                className={`delay-100 ease-in-out ${
                  location.pathname === "/deals"
                    ? "border-b-2 border-indigo-800"
                    : ""
                }`}
              >
                Deals
              </NavLink>
            </li>
            <li className="p-2 hover:cursor-pointer">
              <NavLink
                to="/testemonials"
                className={`dealy-100 ease-in-out ${
                  location.pathname === "/testemonials"
                    ? "border-b-2 border-indigo-800"
                    : ""
                }`}
              >
                Testemonials
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar buttons */}
      <div className="flex flex-row absolute right-10">
        {authenticated ? (
          <>
            
            <button
              onClick={logout}
              className="p-2 m-2 bg-indigo-950 text-white border-indigo-400 rounded-full hover:bg-indigo-900"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={openLoginPage}
              className="p-2 m-2 bg-indigo-500  rounded-full hover:bg-indigo-600 text-white"
            >
              Login
            </button>
            <button
              onClick={openSignupPage}
              className="p-2 m-2 bg-indigo-950 text-white border-indigo-400 rounded-full hover:bg-indigo-900"
            >
              Signup
            </button>
          </>
        )}
        <div
          onClick={DisplayNavbar}
          className="flex items-center md:hidden hover:cursor-pointer m-[10px]"
        >
          {DecideBars()}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
