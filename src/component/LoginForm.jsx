import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function LoginForm() {
  return (
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
              <input type="checkbox" className="checkbox mr-1 checkbox-xs" />
              <label htmlFor="#rememberme">Remember Me</label>
            </div>
            <p>Forgot password?</p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-gray-100 py-5 px-14 rounded-md">
            <FontAwesomeIcon icon={faGithub} className="text-4xl border-" />
          </div>
          <div className="bg-gray-100 py-5 px-14 rounded-md">
            <FontAwesomeIcon icon={faGithub} className="text-4xl border-" />
          </div>
          <div className="bg-gray-100 py-5 px-14 rounded-md">
            <FontAwesomeIcon icon={faGithub} className="text-4xl border-1" />
          </div>
        </div>
        <div>
          <button className=""></button>
          <p></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
