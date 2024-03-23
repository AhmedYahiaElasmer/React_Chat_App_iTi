import React, { useContext, useEffect, useState } from "react";
import { FaSmile, FaPaperclip, FaTelegram } from "react-icons/fa";
import "./ChatInput.css";

import useAuth from "../../hooks/useAuth";
import useRequest from "../../hooks/useRequest";
import { SocketContext } from "../../context/SocketContext";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useSearchParams } from "react-router-dom";


const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  

  const { getAuthUser } = useAuth();
  const token = getAuthUser("token");
  const { requestApi } = useRequest();
  const id = searchParams.get("id");

  const socket = useContext(SocketContext);


  const user = JSON.parse(getAuthUser("user"));



  const sendMessage = async (e) => {
    if (!e.trim().length) return;
    setMessage("");
    try {
      socket.emit("sendMessage", e , id , user);
        const header = {
            Authorization: `Bearer ${token}`,
          };
      
          const response = await requestApi("/message", {
            method: "POST",
            headers: header,
            data: {
              content: e,
              chatId: id,
            },
          });

    } catch (error) {
        console.log(error);   
    }
  }







 


  return (
    <>
        <div className=" absolute bottom-[89px] left-[8%]">
    {showPicker &&
        <Picker data={data} onEmojiSelect={(e)=>{setMessage((prev)=> prev+e.native)}}  />
      }
    </div>
    <div className="chat-container">
      <div className="chat-input">
        <div className="icons flex justify-center"  >
        
          <FaSmile className=" text-3xl cursor-pointer" onClick={()=> setShowPicker(!showPicker)}   />
          
          {/* <FaPaperclip /> */}
        </div>
      
        
  
        <input
          type="text"
          className="text-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="icons flex justify-center"  onClick={() => sendMessage(message)}>
          <FaTelegram className=" text-3xl cursor-pointer" />
        </div>
      </div>
    </div>


          </>

    
  );
};

export default ChatInput;
