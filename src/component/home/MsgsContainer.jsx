import ChatBar from "../messages/ChatBar";
import ChatNavBar from "../messages/ChatNavBar";
import { Outlet } from "react-router-dom";
import './Nav.css'
const MsgsContainer = () => {
  return (
    <div className="background h-screen text-white">
      {/* navbar */}
      <ChatNavBar className='nav'/>
      {/* msg-container */}
      <div className="px-4  flex-1 flex flex-col overflow  w-full ">
        <Outlet />
        <div className="absolute bottom-0 -left-[-23.5%]   w-3/4 ">
          <ChatBar />
        </div>
      </div>
    </div>
  );
};

export default MsgsContainer;
