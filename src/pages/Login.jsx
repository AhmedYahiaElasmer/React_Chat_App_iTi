import "./loginStyle.css";

import LoginComponent from "../component/loginComponent";
import LoginForm from "../component/LoginForm";

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

