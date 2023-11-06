import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilts/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo, removeUserInfo } from "../utilts/Store/userSlice";
import { LOGO } from "../utilts/conts";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => {
    return store.user;
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoUrl } = user;
        dispatch(
          addUserInfo({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoUrl,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUserInfo());
        navigate("/");
      }
      // Unsubscribe when the component unmount
      // return () => unsubscribe();
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex  items-center justify-between w-full bg-gradient-to-b from-black p-3  z-10 absolute">
      <div className="">
        <img className=" w-44 " src={LOGO} alt="Netflix logo" />
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
