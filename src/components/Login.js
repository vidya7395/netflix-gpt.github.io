import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilts/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const submit = (e) => {
    // Validate form
    // checkValidData();
    e.preventDefault();
    if (isSignIn) {
      setErrorMessage(
        checkValidData(email.current.value, password.current.value)
      );
    } else {
      setErrorMessage(
        checkValidData(
          email.current.value,
          password.current.value,
          fullName.current.value
        )
      );
    }
  };

  return (
    <>
      <Header />
      <div className="p-3 flex items-center justify-center h-full w-full">
        <img
          className="absolute top-0 bottom-0 left-0 right-0 h-full w-full z-1"
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
          alt=""
        />
        <form className=" p-10 bg-neutral-900 relative z-0  sm:w-9/12 md:w-3/12 bg-opacity-[0.9] rounded">
          {errorMessage && (
            <p className="bg-red-200 p-1 text-red-800 my-2">{errorMessage}</p>
          )}
          <h1 className="font-semibold text-4xl text-white mb-5">
            {isSignIn ? "Sign In" : "Sing Up"}
          </h1>
          {!isSignIn && (
            <div className="flex flex-col mb-5">
              <input
                ref={fullName}
                type="text"
                className="px-2 py-4 mt-2 text-neutral-100 bg-neutral-800"
                placeholder="Full Name"
              />
            </div>
          )}
          <div className="flex flex-col ">
            <input
              ref={email}
              type="text"
              className="px-2 py-4 mt-2 text-neutral-100 bg-neutral-800"
              placeholder="Enter user name or email address"
            />
          </div>
          <div className="flex flex-col my-5">
            <input
              ref={password}
              type="text"
              className="px-2 py-4 mt-2 text-neutral-100 bg-neutral-800"
              placeholder="Password"
            />
          </div>
          <button
            className="w-full mt-5  p-3 bg-red-600 text-white rounded-sm"
            onClick={(e) => {
              submit(e);
            }}
          >
            {isSignIn ? "Sign In" : "Sing Up"}
          </button>
          <p
            className="py-4 text-neutral-400 cursor-pointer mt-4"
            onClick={() => {
              toggleIsSignIn();
            }}
          >
            {!isSignIn ? (
              <span className="text-neutral-100">
                <span className="text-neutral-400 me-1">
                  Already a member ?
                </span>
                Sign in now
              </span>
            ) : (
              <span className="text-neutral-100">
                <span className="text-neutral-400 me-1">
                  {" "}
                  New to Netflix ?{" "}
                </span>
                Sign up now
              </span>
            )}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
