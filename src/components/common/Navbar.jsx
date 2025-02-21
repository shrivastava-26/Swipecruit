import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 shadow-lg shadow-gray-500 px-4">
      <h2 className="font-bold text-3xl">swipecruit</h2>

      <div>
        <ul className="flex gap-3 font-bold text-2xl pl-3 space-x-4 md:space-x-6">
          <Link
            to={"/"}
            className="hover:text-purple-600"
          >
            Home
          </Link>
          <Link
            to={"/login"}
            className="hover:text-purple-600"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="hover:text-purple-600"
          >
            SignUp
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
