import { Link } from "react-router-dom";
import WhiteLogo from "../component/logo/WhiteLogo";
import "./loginStyle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Login() {
  return (
    <div className="">
      <div className="grid grid-cols-2 h-screen bg-black ">
        <div className="min-h-full text-white flex flex-col justify-between items-center lg:pt-14 lg:pb-24 md:py-14 bgc">
          <div className="flex flex-col lg:gap-7  justify-center items-center">
            <div>
              {" "}
              <WhiteLogo />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 ">
              <h1 className="text-5xl tracking-[.15em] font-semibold">
                TYPING....
              </h1>
              <p className="font-thin text-base tracking-wider">
                Connect to the world in few touches
              </p>
            </div>
          </div>
          <div className=" pb-16 flex flex-col justify-center items-center gap-5">
            <p className="font-medium text-base tracking-wider">
              If you are new user please sign up to our world
            </p>

            <Link
              to={"/register"}
              className="btn btn-wide bg-transparent border-white	text-white btnhover"

            <Link to={"/register"}
              className="btn btn-wide bg-transparent border-white	text-white btnhover"
              

            >
              Sign up now for free...
            </Link>
          </div>
        </div>


        <div className="bg-white flex flex-col justify-center items-center">
          <form className="border rounded-lg shadow-md  flex flex-col text-black gap-12 justify-center items-center py-16 px-24">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Back to your world</h2>
              <p>Choose one of the option to go</p>
            </div>
            <div className="flex flex-col gap-6">
              <input
                type="email"
                placeholder="example@example.com"
                className="input input-bordered w-full "
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full "
              />
              <div className="flex justify-between lg:gap-20 md:gap-5 ">
                <div>
                  <input
                    type="checkbox"
                    className="checkbox mr-1 checkbox-xs"
                  />
                  <label htmlFor="#rememberme">Remember Me</label>
                </div>
                <p>Forgot password?</p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
             
            </div>
            <div>
              <button></button>
              <p></p>
            </div>

        <div className="bg-gray-300 p-4">
          <form>




          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
