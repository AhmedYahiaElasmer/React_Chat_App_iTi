import ChatBar from "../messages/ChatBar";
import ChatNavBar from "../messages/ChatNavBar";
import ChatInput from "./ChatInput";
import { Outlet } from "react-router-dom";
import './Nav.css'
import { useAuthContext } from "../../context/AuthContext";
import GrayLogo from "../logo/GrayLogo";
const MsgsContainer = () => {
  return (
    <div className="background h-screen text-white relative">
      {/* navbar */}
      <ChatNavBar className="nav" />
      {/* msg-container */}
      <div className="px-4  flex-1 flex flex-col overflow  w-full ">
        <Outlet />
        
          {/* <ChatBar /> */}
         
        

        <div className="absolute bottom-0 -left-[-23.5%]   w-3/4 ">
          <ChatBar />
        </div>
      </div>
      <ChatInput className='position'/>
    </div>
  );
};

export default MsgsContainer;
