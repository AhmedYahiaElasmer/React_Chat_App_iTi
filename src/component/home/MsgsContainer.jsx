import ChatBar from "../messages/ChatBar";
import ChatNavBar from "../messages/ChatNavBar";
import ChatInput from "./ChatInput";
import { Outlet } from "react-router-dom";
import './Nav.css'
const MsgsContainer = () => {
  return (
    <div className="background h-screen text-white relative">
      {/* navbar */}
      <ChatNavBar className='nav'/>
      {/* msg-container */}
      <div className="px-4  flex-1 flex flex-col scrollbar w-full messages-scroll">
        <Outlet/>
        
          {/* <ChatBar /> */}
         
        
      </div>
      <ChatInput className='position'/>
    </div>
  );
};

export default MsgsContainer;
