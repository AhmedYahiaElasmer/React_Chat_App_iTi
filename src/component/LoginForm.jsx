import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/dist";

function LoginForm() {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <form className="border rounded-lg shadow-md  flex flex-col text-black gap-12 justify-center items-center py-16 px-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Back to your world</h2>
          <p>Choose one of the option to go</p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="example@example.com"
            className="input input-bordered w-full mb-4 "
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          <div className="flex justify-between lg:gap-24 md:gap-5 ">
            <div>
              <input type="checkbox" className="checkbox mr-1 checkbox-xs " />
              <label htmlFor="#rememberme" className="text-zinc-600 text-sm">
                Remember Me
              </label>
            </div>
            <p className="text-zinc-600 text-sm">Forgot password?</p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-gray-100 py-3 px-8 rounded-md btnhover hover:text-white">
            <FontAwesomeIcon icon={faGithub} className="text-3xl " />
          </div>
          <div className="bg-gray-100 py-3 px-8 rounded-md btnhover hover:text-white">
            <FontAwesomeIcon icon={faGoogle} className="text-3xl " />
          </div>
          <div className="bg-gray-100 py-3 px-8 rounded-md btnhover hover:text-white">
            <FontAwesomeIcon icon={faXTwitter} className="text-3xl " />
          </div>
        </div>
        <div>
          <button className="btn btn-wide bg-black 	text-white  btnhover">
            Log in
          </button>
          <p>
            Don’t have an account ?{" "}
            <span>
              <Link className="font-grad font-medium" to={"/register"}>
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
