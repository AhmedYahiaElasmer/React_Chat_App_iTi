import ChatBar from "../messages/ChatBar";
import ChatNavBar from "../messages/ChatNavBar";
import ChatInput from "./ChatInput";
import { Outlet } from "react-router-dom";
import './Nav.css'
import { useEffect, useRef } from "react";
const MsgsContainer = () => {
  const lastMessageRef = useRef();

  useEffect(()=>{
    console.log();
    setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
  },[])
  return (
    <div className="background h-screen text-white relative">
      {/* navbar */}
      <ChatNavBar className='nav'/>
      {/* msg-container */}
      <div className="px-4  flex-1 flex flex-col overflow  w-full messages-scroll" id="scroll" ref={lastMessageRef}>
        <Outlet/>
        
          {/* <ChatBar /> */}
         
        
      </div>
      <ChatInput className='position'/>
    </div>
  );
};

export default MsgsContainer;
