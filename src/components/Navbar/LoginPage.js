import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({handleAuth}) {

  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const [emailerr, setEmailErr] = useState("");
  const [passerr, setPassErr] = useState("");
  

  const submitForm = async (e) => {
    e.preventDefault();

    const data = { email, pass };
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
        handleAuth()
        alert("Login successful");
        setEmail("");
        setPass("");
        
      }
      if (response.errors) {
        setEmailErr(response.errors.email);
        setPassErr(response.errors.pass);
        setTimeout(() => {
          setEmailErr("");
          setPassErr("");
        }, 5000);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  const getCart = async () => {
    const response = await fetch("/api/protected", {
      headers: {
        credentials: 'include',
      },
    });
    const data = await response.json();
    console.log(data);
    navigate('/protected-route/cart')
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
              <div className="text-red-900">{emailerr}</div>
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
              <div className="text-red-900">{passerr}</div>
            </div>
            <button
              onClick={submitForm}
              type="submit"
              className="bg-indigo-500 rounded-md p-1 pl-5 pr-5 text-white md:hover:bg-indigo-800 md:duration-700"
            >
              Submit
            </button>
            <button
                onClick={getCart}
                type="submit"
                className="bg-indigo-500 rounded-md p-1 pl-5 pr-5 text-white md:hover:bg-indigo-800 md:duration-700"
              >
                Go to Cart
              </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
