import React, { useState } from "react";
import app from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const signup = getAuth(app);

function SignupPage() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate()

  const submitForm = async (e) => {
    e.preventDefault();

    const data = { name, email, pass };
    createUserWithEmailAndPassword(signup, email, pass)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        
        await updateProfile(user, { displayName: name })

        try {
          const result = await fetch("/api/auth", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const response = await result.json();
          console.log("response :", response);
          if (result.ok) {
            alert("Signup successful");
            setName("");
            setEmail("");
            setPass("");
            console.log(user);
            navigate('/deals')
          }
        } catch (error) {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        setErr(error.message);
        setTimeout(() => {
          setErr("");
        }, 5000);
      });
  };
  return (
    <>
      <div className="flex justify-center justify-items-center flex-col pt-[5rem] text-center bg-indigo-100 h-[100vh] w-[100%]">
        <div className=" bg-indigo-200 w-[90%] md:w-[40%] mx-auto py-8 rounded-lg shadow-xl flex justify-center justify-items-center flex-col">
        <p className=" md:text-[30px] text-[20px] md:m-10 font-bold">
          Welcome to the Signup Page
        </p>
        <div>
          <form onSubmit={submitForm}>
          <div className="m-5 p-2">
              <label name="email" className="m-2">
                Name
              </label>
              <input
                value={name}
                id="myName"
                placeholder="  Your Name"
                className="rounded-[5px]"
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="m-5 p-2">
              <label name="email" className="m-2">
                Email ID
              </label>
              <input
                value={email}
                id="myEmail"
                placeholder="  abcd@email.com"
                className="rounded-[5px]"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="m-5 p-2">
              <label name="email" className="m-2">
                Password
              </label>
              <input
                value={pass}
                placeholder="  Password"
                className="rounded-[5px]"
                type="password"
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>
            <div className="text-red-900">{err}</div>
            <button
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

export default SignupPage;
