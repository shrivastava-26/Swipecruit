import Loader from "./components/common/Loader";
import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

let Navbar = lazy(() => import("./components/common/Navbar"));
let Home = lazy(() => import("./pages/utils/Home"));
let CreateProfile = lazy(() => import("./pages/profile/CreateProfile"));
let Dashboard = lazy(() => import("./pages/utils/Dashboard"));
let SignUp = lazy(() => import("./pages/auth/SignUp"));
let Login = lazy(() => import("./pages/auth/Login"));



let AppLayout = () => {
  let location = useLocation();
  let path = location.pathname;
  let hideNavbar =
    path == "/login" || path == "/signup" || path == "/create-profile" || path == "/"
  return (
    <Suspense fallback={<Loader />}>
      {!hideNavbar && <Navbar />}
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="toast-container"
        bodyClassName="text-sm font-semibold"
      />
    </Suspense>
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
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/", element: <Home /> },
    ],
  },
]);

let App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default App;
