import React from "react";
import { useState,useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import '../pages/registrationForm.css'
function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  //userContext= useContext(userContext)

  const handleSignIn = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    console.log(body);

    const usersString = localStorage.getItem("user");
    console.log("user:", usersString);

    if (usersString) {
      const users = JSON.parse(usersString);
      console.log("uses:", users);
     if (users.email == body.email && users.password== body.password)   
      if (rememberMe) {
        const currentUser = users.name;
        setRememberMe(!rememberMe);
        navigate("/");
      } else console.log("check 'Remember Me'or Incorrect email or password");
    } else {
      console.log("User not found");
    }

  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="w-full h-2/4  flex">
    <img src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className= "w-full h-full" alt="" />
  </div>
      <main className="absolute w-1/4 h-3/5 top-52 left-1/2 transform -translate-x-1/2 bg-transparent border  rounded-3xl shadow-lg flex flex-col text-white">
        <div className="flex h-1/3 flex-col items-center">
          <h1 className="mt-8 text-2xl font-bold">Sign In</h1>
          <div className="mt-8 flex flex-wrap gap-8 text-4xl">
            <i className="fa-brands fa-facebook fa-bounce text-blue-600 cursor-pointer"></i>
            <i className="fa-brands fa-apple fa-bounce text-blue-900 cursor-pointer"></i>
            <i className="fa-brands fa-google fa-bounce text-red-600 cursor-pointer"></i>
          </div>
        </div>
        <div className="flex h-1/3 flex-col items-center">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border border-gray-400 text-black w-3/4 h-10 rounded pl-4 focus:border-pink-500 outline-none"
            //onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"

            className="border  text-black border-gray-400 w-3/4 h-10 rounded mt-8 pl-4 focus:border-pink-500 outline-none"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}

          />
          <div className="flex mt-8 gap-4 items-center">
          <div className="checkbox-wrapper-5">
      <div className="check mb-4">
        <input
          type="checkbox"
          id='check-5'
          name="logMeIn"
          checked={rememberMe}
           onChange={() => setRememberMe(!rememberMe)}
          
        />
        <label for="check-5" className="block font-bold"></label>
      </div>
      </div>
            <h1 className="text-1.2rem mb-2">Remember Me</h1>
          </div>
        </div>
        <div className="flex flex-col h-1/3 items-center justify-center">

          <button className="sign-in-button mt-4 h-8 w-1/2 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-90 text text-white font-bold">
            <Link to="/">Sign-in</Link>

          </button>
          <div className="divider flex items-center mt-2">
            <div className="w-24 h-1 bg-gray mx-2"></div>
            <h1 className="to-register text-gray">
              Don't have an account yet ?
            </h1>
            <div className="w-24 h-1 bg-gray mx-2"></div>
          </div>
          <button

            className="sign-up-button bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mt-4 mb-8 h-8 w-1/2 text text-white rounded-2xl font-bold"
            onClick={handleSignIn}

          >
            {" "}
            <Link to="/register">Sign Up</Link>
          </button>
        </div>
      </main>
    </form>
  );
}

export default SignIn;
/**
 * 
 *   const user = users.find(
        (item) => item.email == body.email && item.password == body.password
      )
 */