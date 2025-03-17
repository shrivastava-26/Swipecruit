import AuthForm from "../../components/common/AuthForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    try {
      const lsUser = JSON.parse(localStorage.getItem("formData"));

      if (
        lsUser &&
        lsUser.email === data.email &&
        lsUser.password === data.password
      ) {
        localStorage.setItem("loggedInUser", JSON.stringify(data.email));

        toast.success("Logged in successfully!");

        //! Navigating to Home Page
        setTimeout(() => {
          navigate("/create-profile");
        }, 500);
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return <AuthForm formType="login" onSubmit={handleLogin} />;
};

export default Login;
