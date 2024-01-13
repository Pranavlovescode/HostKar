import React,{useState,useRef} from 'react'

function SignupPage() {
  const myemail = useRef(null);
  const mypass = useRef(null);
  const myname = useRef(null);

  // const email = document.getElementById('myEmail')
  const [isFilled, setIsFilled] = useState("");
  const submitForm = () => {
    // email==='abcd@email.com'?alert('empty area'):alert('Filled')
    const email = myemail.current.value;
    const pass = mypass.current.value;
    if (email.trim() === isFilled) {
      setIsFilled(email);
      alert("Nothing is filled");
    } else {
      alert("correct input");
    }
    if (pass.trim() === isFilled) {
      alert("Please enter your password");
    } else {
      alert(pass);
      const atleastPass = pass.charAt();
      atleastPass < 8
        ? console.log("Password should be atleast 8 character")
        : alert("password is okay");
    }
  }
  return (
    <>
      <div className="pt-[5rem] text-center bg-indigo-100">
        <p className=" md:text-[30px] text-[20px] md:m-10">
          Welcome to the Login Page
        </p>
        <div>
          <form>
            <div className="m-10 p-5">
              <label name="name" className="m-4">
                Name
              </label>
              <input
                ref={myname}
                id="myName"
                placeholder="  Your Name"
                className="rounded-[5px]"
                type="text"
                required
              />
            </div>
            <div className="m-10 p-5">
              <label name="email" className="m-4">
                Email ID
              </label>
              <input
                ref={myemail}
                id="myEmail"
                placeholder="  abcd@email.com"
                className="rounded-[5px]"
                type="email"
                required
              />
            </div>
            <div className="m-10 p-5 ">
              <label name="pass" className="m-4">
                Password
              </label>
              <input
                ref={mypass}
                placeholder="  Password"
                className="rounded-[5px]"
                type="password"
                required
              />
            </div>
            <form action="/api/submit/form" method="post">
              <button
                onClick={submitForm}
                type="submit"
                className="bg-indigo-500 rounded-md p-1 pl-5 pr-5 text-white md:hover:bg-indigo-800 md:duration-700"
              >
                Submit
              </button>
            </form>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupPage;