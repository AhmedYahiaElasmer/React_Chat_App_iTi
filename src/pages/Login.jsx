import "./loginStyle.css";


import LoginComponent from "../component/loginComponent";
import LoginForm from "../component/LoginForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



function Login() {
  return (
    <div className="">
      <div className="grid grid-cols-2 h-screen bg-black ">

        <LoginComponent />
        <LoginForm />

      </div>
    </div>
  );
}

export default Login;
