import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilts/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => {
    console.log(store.user);
    return store.user;
  });
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex  items-center justify-between w-full bg-gradient-to-b from-black p-3  z-10 relative">
      <div className="">
        <img
          className=" w-44 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
        />
      </div>
      {user && (
        <div className="flex items-center">
          <img className="w-10 rounded" src={user.photoUrl} alt="" />
          <button
            className="bg-red-500 text-white rounded p-2 ms-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
