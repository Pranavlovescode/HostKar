import React, { useState } from "react";

function Navbar() {
  const [showNav, setshowNav] = useState(false);
  
  function DecideBars(){
    if (showNav===false) {
      return(<i className="fa-solid fa-bars"></i>)
    } else {
      return(<i className="fa-solid fa-xmark"></i>)
    }
  }

  function DisplayNavbar() {
    setshowNav(!showNav); // Correctly toggle the state
    console.log(showNav)
    return null;
  }

  return (
    <>
      <nav className="fixed w-[100%] m-0 p-0 flex bg-indigo-300 z-50">
        {/* Navbar Content */}
        <div className="flex md:flex-row flex-col p-2 justify-between">
          <span>
            <span className="flex items-center p-2 hover:cursor-pointer font-sans font-bold text-indigo-950 text-xl">
              HostKar
            </span>
          </span>
          <div            
            className={`${
              showNav ? "flex" : "hidden"
            } md:flex md:flex-row text-xl `}
          >
            <ul className="flex md:flex-row flex-col px-2 text-start text-indigo-800">
              <li className="p-2 hover:cursor-pointer rounded-2xl hover:bg-indigo-400">
                Home
              </li>
              <li className="p-2 hover:cursor-pointer rounded-2xl hover:bg-indigo-400">
                Deals
              </li>
              <li className="p-2 hover:cursor-pointer rounded-2xl hover:bg-indigo-400">
                Services
              </li>
              <li className="p-2 hover:cursor-pointer rounded-2xl hover:bg-indigo-400">
                Testimonials
              </li>
            </ul>
          </div>
        </div>

        {/* Navbar buttons */}
        <div className="flex flex-row absolute right-[10px]">
          <button className="p-2 m-2 bg-indigo-500  rounded-full hover:bg-indigo-600 text-white">
            Login
          </button>
          <button className="p-2 m-2 bg-indigo-950 text-white border-indigo-400 rounded-full hover:bg-indigo-900 ">
            Signup
          </button>

          <div
            onClick={DisplayNavbar}
            className="flex items-center md:hidden hover:cursor-pointer m-[10px]" 
          >
            {DecideBars()}
          </div>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
