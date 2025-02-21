import { useEffect } from "react";
import AuthForm from "../../components/common/AuthForm";
import { useNavigate } from "react-router-dom";

let Login = () => {
  let navigate = useNavigate()

  // todo for temproary and debugging purpose i have used local storage
  useEffect(() => {
    let ls = localStorage.getItem("email")}, []);

    let handleLogin = (data) => {
    console.log(data)
    localStorage.setItem("email", data.email); 

    //! navigating to home page 
    navigate('/')
  };

  return <AuthForm formType="login" onSubmit={handleLogin} />;
};

export default Login;
