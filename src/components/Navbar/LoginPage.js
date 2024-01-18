import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            navigate("/protected-route/cart");
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
      <div className="pt-[5rem] text-center bg-indigo-100 h-[100vh] w-[100%]">
        <p className=" md:text-[30px] text-[20px] md:m-10">
          Welcome to the Login Page
        </p>
        <div>
          <form>
            <div className="m-10 p-5">
              <label name="email" className="m-4">
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
              <div className="text-red-900">{err}</div>
            </div>
            <div className="m-10 p-5 ">
              <label name="pass" className="m-4">
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
    </>
  );
}

export default LoginPage;
