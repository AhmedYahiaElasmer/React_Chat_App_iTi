import { useEffect } from "react";
import ChatBar from "../messages/ChatBar";
import ChatNavBar from "../messages/ChatNavBar";
import ChatInput from "./ChatInput";
import { Outlet } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import GrayLogo from "../logo/GrayLogo";

import './Nav.css'

const MsgsContainer = ({openModal, openProfileModal}) => {



  return (
    <div className="background h-screen text-white relative">
      {/* navbar */}
      <ChatNavBar openModal={openModal} openProfileModal={openProfileModal} className='nav'/>
      {/* msg-container */}
      <div className="px-4  flex-1 flex flex-col overflow  w-full messages-scroll" id="scroll" ref={lastMessageRef}>
        <Outlet/>
        
          {/* <ChatBar /> */}
         
        
      </div>
      <ChatInput className='position'/>
    </div>
  );
  // return (
	// 	<div className='flex items-center justify-center w-full h-full bg-msg-container'>
	// 		<div className='px-4 text-center sm:text-lg md:text-xl text-stone-500  flex flex-col justify-center items-center gap-6'>
  //       <GrayLogo/>
	// 			<h4 className="text-5xl tracking-[.4rem] font-semibold">TYPING....</h4>
	// 			<p className="text-stone-300 text-3xl tracking-[.2rem] font-normal">Click to any user to start chat !</p>
	// 		</div>
	// 	</div>)

  }
export default MsgsContainer;

// const NoChatSelected = () => {
// 	const { authUser } = useAuthContext();
//   return (
// 		<div className='flex items-center justify-center w-full h-full bg-msg-container'>
// 			<div className='px-4 text-center sm:text-lg md:text-xl text-stone-500  flex flex-col justify-center items-center gap-6'>
//         <GrayLogo/>
// 				<h4 className="text-5xl tracking-[.4rem] font-semibold">TYPING....</h4>
// 				<p className="text-stone-300 text-3xl tracking-[.2rem] font-normal">Click to any user to start chat !</p>
// 			</div>
// 		</div>)
// };

