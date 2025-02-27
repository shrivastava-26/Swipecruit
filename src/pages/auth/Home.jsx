import React from "react";
import { Button } from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  let navigate = useNavigate()
  
  return (
    <div className="flex flex-col h-screen  text-gray-800">
      <div className="flex justify-between px-16 items-center p-5 bg-white shadow-md">
        <div className="text-2xl font-bold">swipecruit</div>
        <nav className="space-x-4">
          <Button
            onClick={() => navigate("/login")}
            type="submit"
            className="w-20 bg-gradient-to-l from-purple-300 to-rose-500 font-medium text-white"
          >
            Login
          </Button>
        </nav>
      </div>

      <div
        className="flex-grow flex items-center justify-center"
        
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Match</h1>
          <p className="text-xl mb-6">
            Swipe right to discover amazing connections.
          </p>
          <Button
            onClick={() => navigate("/signup")}
            type="submit"
            className="w-3/5 bg-gradient-to-l from-purple-300 to-rose-500 font-medium text-white"
          >
            SignUp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
