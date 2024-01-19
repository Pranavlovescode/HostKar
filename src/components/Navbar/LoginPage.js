import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const login = getAuth(app);
function LoginPage() {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  

  const submitForm = async (e) => {
    e.preventDefault();

    const data = { email, pass };
    signInWithEmailAndPassword(login, email, pass)
      .then(async() => {
        // Signed in
        
        try {
          const result = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(data),
    
            headers: {
              "Content-Type": "application/json",
            },
          });
          const response = await result.json();
          console.log("response :", response);
    
          if (result.ok) {
            
            alert("Login successful");
            setEmail("");
            setPass("");
            navigate("/");
          }
          
        } catch (error) {
          alert("Something went wrong");
        }
        // ...
      })
      .catch((error) => {
        setErr( error.message)
        setTimeout(() => {
          setErr()
        }, 5000);
        
      });
    
  };
  
  return (
    <>
      <div className="flex justify-center justify-items-center flex-col pt-[5rem] text-center bg-indigo-100 h-[100vh] w-[100%]">
        <div className=" bg-indigo-200 w-[90%] md:w-[40%] mx-auto py-8 rounded-lg shadow-xl flex justify-center justify-items-center flex-col">
        <h1 className=" md:text-[30px] text-[23px] md:m-10 font-bold">
          Welcome to the Login Page
        </h1>
        <span className="pt-4"><span>Not registered yet? </span><NavLink className={'text-violet-600'} to={'/signup-page'}>Signup Here</NavLink></span>
        <div> 
          <form>
            <div className="m-5 p-2">
              <label name="email" className="m-2">
                Email ID
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="myEmail"
                placeholder="  abcd@email.com"
                className="rounded-[5px]"
                type="email"
                required
              />
              
            </div>
            <div className="m-5 p-2">
              <label name="pass" className="m-2">
                Password
              </label>
              <input
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                placeholder="  Password"
                className="rounded-[5px]"
                type="password"
                required
              />
              <div className="text-red-900">{err}</div>
            </div>
            <button
              onClick={submitForm}
              type="submit"
              className="bg-indigo-500 rounded-md p-1 pl-5 pr-5 text-white md:hover:bg-indigo-800 md:duration-700"
            >
              Submit
            </button>
           
          </form>
        </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
