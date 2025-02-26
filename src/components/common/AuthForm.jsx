import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/common/Button";
import { Label } from "../../components/common/Label";
import { Input } from "../../components/common/Input";
import { Link } from "react-router-dom";

//! here may be you will feel hotchpotch bcz of reusiblity
//todo 1) custumTags : Input, Button  and label are used in this authForm component
//? this same auth form i have used in login and as well as sign up page by giving condition formType
// if for confirm password and name input field is for signup and rest is common between both
// login authentication pwd ke basis par hoga, cpwd ke basis par nahi

let AuthForm = ({ formType, onSubmit }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow w-96 m-auto p-6 rounded-lg flex justify-center items-center flex-col bg-white gap-5 border border-zinc-100">
        <h1 className="font-bold text-xl uppercase">
          {formType === "login" ? "Login" : "Sign Up"}
        </h1>

        <form
          onSubmit={handleSubmit((data) => onSubmit(data))}
          className="flex flex-col gap-6 w-full"
        >
          <div className="flex flex-col gap-3.5 w-full">
            {formType === "signup" && (
              <div className="flex flex-col gap-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter full name"
                  {...register("name", { required: "full name is required" })}
                />
              </div>
            )}

            {formType === "signup" && (
              <div className="flex flex-col gap-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
              </div>
            )}

            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                {...register("password", {
                  required: "password is required",
                })}
              />
            </div>

            {formType === "signup" && (
              <div className="flex flex-col gap-1">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                  })}
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between w-full">
            <Button
              label="Reset"
              type="reset"
              className="w-1/3 bg-white text-gray-900 border border-zinc-300"
              onClick={() => reset()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-3/5 bg-gradient-to-l from-purple-300 to-rose-500 font-medium text-white"
            >
              {formType === "login" ? "Login" : "Sign Up"}
            </Button>
          </div>
        </form>
        <div className="flex items-center w-full text-sm">
          {formType === "login" ? (
            <Link to="/signup">Don't have an account? <span className="text-rose-400">Signup</span></Link>
          ) : (
            <Link to="/login">Already have an account? <span className="text-rose-400">Login</span> </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
