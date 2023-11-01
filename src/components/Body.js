import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

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
  return <RouterProvider router={appRoutes}></RouterProvider>;
};

export default Body;
