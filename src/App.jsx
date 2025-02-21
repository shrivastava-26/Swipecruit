<<<<<<< HEAD
import React from 'react'

const App = () => {
  return (
    <div >
      <h1 className='font-bold text-5xl text-center bg-purple-200'>Hii Swipe Recruit</h1>
    </div>
  )
}

export default App
=======
import React from "react";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/auth/Home";

let AppLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};

let appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {path:'/login', element:<Login/>},
      {path:"/signup", element:<SignUp/>},
      {path:'/' , element:<Home/>}
    ]
  }
]);

const App = () => {
  return <RouterProvider router={appRouter} />
};

export default App;
>>>>>>> 72f38d2 (second commit)
