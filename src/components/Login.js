import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utilts/firebase";
import { addUserInfo } from "../utilts/Store/userSlice";
import { checkValidData } from "../utilts/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const submit = (e) => {
    // Validate form
    e.preventDefault();
    let message;
    if (isSignIn) {
      message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
    } else {
      message = checkValidData(
        email.current.value,
        password.current.value,
        fullName.current.value
      );
      setErrorMessage(message);
    }
    if (message) return;
    // sign in sign up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL:
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
          });
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUserInfo({
              uid: uid,
              email: email,
              displayName: displayName,
              photoUrl: photoURL,
            })
          );
          navigate("/browse");
          // console.log("Signed up successfully", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log("Login successfully", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-login-credentials") {
            setErrorMessage("User is not valid");
          } else {
            setErrorMessage(errorMessage);
          }
        });
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
              type="email"
              className="px-2 py-4 mt-2 text-neutral-100 bg-neutral-800"
              placeholder="Enter Email Address"
              autoComplete=""
            />
          </div>
          <div className="flex flex-col my-5">
            <input
              ref={password}
              type="password"
              className="px-2 py-4 mt-2 text-neutral-100 bg-neutral-800"
              placeholder="Password"
              autoComplete=""
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
