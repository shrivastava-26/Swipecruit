import { useState } from "react";
import AuthForm from "../../components/common/AuthForm";
import { useNavigate } from "react-router-dom";

let Signup = () => {
  let [signupData, setSignupData] = useState();
  let navigate = useNavigate()

  let handleSignup = (data) => {
    localStorage.setItem("formData", JSON.stringify(data))
    navigate('/login')
    
  };

  return <AuthForm formType="signup" onSubmit={handleSignup} />;


  return <AuthForm formType="signup" />

};

export default Signup;
