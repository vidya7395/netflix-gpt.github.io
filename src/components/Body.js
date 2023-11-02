import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../utilts/firebase";
import { useDispatch } from "react-redux";
import { addUserInfo, removeUserInfo } from "../utilts/Store/userSlice";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUserInfo({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoURL,
          })
        );
      } else {
        // User is signed out
        // ...
        dispatch(removeUserInfo());
      }
    });
  }, []);
  return <RouterProvider router={appRoutes}></RouterProvider>;
};

export default Body;
