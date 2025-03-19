import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { CgCommunity } from "react-icons/cg";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoPeopleOutline,IoChatbubblesOutline  } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-40 h-screen fixed border-r border-zinc-200">
      <div className="w-11/12 h-[90%] flex flex-col items-center gap-12">
        <h2 className="font-black uppercase">swipecruit</h2>

        <div className="flex flex-col gap-7 w-10/12">
          <Link
            to={"/"}
            className="hover:text-rose-400 flex items-center gap-1"
          >
            <IoPeopleOutline className="text-xl" />
            <p className="text-sm font-medium">Connect</p>
          </Link>

          <Link
            to={"/"}
            className="hover:text-rose-400 flex items-center gap-1"
          >
            <HiOutlineUserCircle className="text-xl" />
            <p className="text-sm font-medium">Profile</p>
          </Link>

          <Link
            className="hover:text-rose-400 flex items-center gap-1"
            to={"/chat"}
          >
            <IoChatbubblesOutline className="text-xl" />
            <p className="text-sm font-medium">Chat</p>
          </Link>

          {/* it will conditionally rendered according to isLogged in or any state */}
          <Button className="w-3/5 bg-gradient-to-l from-purple-300 to-rose-500 font-medium text-white">
            <Link to={"/login"} className="">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
