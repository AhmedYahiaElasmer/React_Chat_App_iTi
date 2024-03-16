import { Link } from "react-router-dom";
import BlackLogo from "../component/logo/BlackLogo";
import "./loginStyle.css";

function Register() {
  return (
    <div className="">
      <div className="grid grid-cols-2 h-screen  ">
        <div className="p-4 bg-black bgc">
          <form></form>
        </div>
        <div className="min-h-full text-black flex flex-col justify-between items-center lg:pt-14 lg:pb-24 md:py-14 ">
          <div className="flex flex-col lg:gap-7  justify-center items-center">
            <div>
              {" "}
              <BlackLogo />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 ">
              <h1 className="text-5xl tracking-[.15em] font-semibold">
                TYPING....
              </h1>
              <p className="font-normal text-base tracking-wider">
                Connect to the world in few touches
              </p>
            </div>
          </div>
          <div className=" pb-16 flex flex-col justify-center items-center gap-5">
            <p className="font-medium text-base tracking-wider">
            If you are already member login now...
            </p>
            <Link to={"/"} className="btn btn-wide text-black bg-transparent border-black	 btnhover hover:text-white" >
Login now...  </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
