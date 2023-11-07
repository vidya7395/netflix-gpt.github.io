import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilts/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo, removeUserInfo } from "../utilts/Store/userSlice";
import { LOGO } from "../utilts/conts";
import { toggleIsShowSearch } from "../utilts/Store/GptSlice";
import { langIdentifier } from "../utilts/lang";
import { changeLanguage } from "../utilts/Store/configSlice";

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
  const handleIsShowSearch = () => {
    dispatch(toggleIsShowSearch());
  };
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex  items-center justify-between w-full bg-gradient-to-b from-black p-3  z-10 absolute">
      <div className="">
        <img className=" w-44 " src={LOGO} alt="Netflix logo" />
      </div>
      {user && (
        <div className="flex items-center">
          <select
            className="bg-neutral-900 text-white p-2 rounded"
            onChange={handleLanguage}
          >
            {langIdentifier.map((lang) => {
              return (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              );
            })}
          </select>
          <button
            className="py-2 px-4 m-2 bg-purple-800 text-white rounded"
            onClick={() => handleIsShowSearch()}
          >
            Search
          </button>
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
