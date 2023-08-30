import React, { useState } from "react";
import { useRef } from "react";
import { validation } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setmessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const errorMessage = validation(
      email.current.value,
      password.current.value
    );
    setmessage(errorMessage);
  };
  const login = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg)] bg-cover bg-center h-[100vh] flex justify-center items-center">
      <div className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-medium text-3xl text-left text-white">
          {isSignIn ? "Sign IN" : "Sign UP"}
        </h1>
        <form action="" className="" onSubmit={(e) => e.preventDefault()}>
          {isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-4 my-4 w-full bg-gray-700"
            name=""
            id=""
          />
          <button
            className="py-2 my-6 bg-red-700 w-full"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign IN" : "Sign UP"}
          </button>
          <p>{message}</p>
          <p className="py-4 cursor-pointer" onClick={login}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
