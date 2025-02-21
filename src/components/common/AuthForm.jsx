import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/common/Button";
import { Label } from "../../components/common/Label";
import { Input } from "../../components/common/Input";

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
    <div className="shadow-2xl shadow-gray-500 w-100 m-auto mt-10 p-6 rounded-lg flex justify-center items-center flex-col bg-gray-200">
      <h1 className="font-bold text-3xl text-center mb-4">
        {formType === "login" ? "Login" : "Sign Up"}
      </h1>

      <form onSubmit={handleSubmit((data)=>onSubmit(data))} className="flex flex-col gap-3">
        {formType === "signup" && (
          <div>
            <Label label="Full name" htmlFor="name" />
            <Input
              id="name"
              ph="Enter full name"
              {...register("name", { required: "full name is required" })}
            />
          </div>
        )}

        <Label label="Email" htmlFor="email" />
        <Input
          id="email"
          ph="Enter your email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        <Label label="Password" htmlFor="password" />
        <Input
          id="password"
          type="password"
          ph="Enter password"
          {...register("password", {
            required: "password is required",
          })}
        />

        {formType === "signup" && (
          <>
            <Label label="Confirm Password" htmlFor="confirmPassword" />
            <Input
              id="confirmPassword"
              type="password"
              ph="Confirm your password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
              })}
            />
          </>
        )}

        <div className="flex gap-3 pt-5">
          <Button
            label="Reset"
            type="button"
            className="bg-red-500 hover:bg-red-600"
            onClick={() => reset()}
          />
          <Button
            label={formType === "login" ? "Login" : "Sign Up"}
            type="submit"
            className="bg-green-500 hover:bg-green-600"
          />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
