import "./loginStyle.css";
import RegisterLogo from "../component/register/RegisterLogo";
import RegisterForm from "../component/register/RegisterForm";

function Register() {
  return (
    <div className="">
      <div className="grid grid-cols-2 h-screen  ">
        <RegisterForm />
        <RegisterLogo />
      </div>
    </div>
  );
}

export default Register;
