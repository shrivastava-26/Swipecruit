import { useState } from "react";
import AuthForm from "../../components/common/AuthForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (data) => {
    const existingUser = JSON.parse(localStorage.getItem("formData"));

    if (existingUser && existingUser.email === data.email) {
      toast.error("User already exists! Please log in");
    } else {
      localStorage.setItem("formData", JSON.stringify(data));
      toast.success("Account created successfully! Please log in");
      navigate("/login");
    }
  };

  return <AuthForm formType="signup" onSubmit={handleSignup} />;
};

export default Signup;
