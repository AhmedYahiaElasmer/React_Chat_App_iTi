import WhiteLogo from "../component/logo/WhiteLogo";
import "./loginStyle.css";

function Login() {
  return (
    <div className="">
      <div className="grid grid-cols-2 h-screen bg-black ">
        <div className="min-h-full text-white flex flex-col justify-between items-center lg:p-20 md:py-10  bgc">
          <div className="flex flex-col gap-7 justify-center items-center">
            <div>
              {" "}
              <WhiteLogo />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 ">
              <h1 className="text-5xl tracking-[.15em] font-semibold">
                TYPING....
              </h1> 
              <p className="font-thin text-base tracking-wider">Connect to the world in few touches</p>
            </div>
          </div>
          <div className=" pb-10 flex flex-col justify-center items-center gap-5">
            <p className="font-medium text-base tracking-wider">
              If you are new user please sign up to our world
            </p>
            <a
              className="btn btn-wide bg-transparent border-white	text-white btnhover"
              href=""
            >
              Sign up now for free...
            </a>
          </div>
        </div>
        <div className="bg-gray-300 p-4">
          <form>test</form>
        </div>
      </div>
    </div>
  );
}

export default Login;
