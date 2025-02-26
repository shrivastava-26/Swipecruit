import React from "react";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/auth/Home";
import CreateProfile from "./pages/auth/CreateProfile";

let AppLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/create-profile", element: <CreateProfile /> },
      { path: "/", element: <Home /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
