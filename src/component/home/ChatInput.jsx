import React, { useContext, useEffect, useState } from "react";
import { FaSmile, FaPaperclip, FaTelegram } from "react-icons/fa";
import "./ChatInput.css";
import { useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRequest from "../../hooks/useRequest";
import { SocketContext } from "../../context/SocketContext";
const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { getAuthUser } = useAuth();
  const token = getAuthUser("token");
  const { requestApi } = useRequest();
  const [searchParams, setSearchParams] = useSearchParams();
  const socket = useContext(SocketContext);


  const id = searchParams.get("id");
  const userId = JSON.parse(getAuthUser("user"))._id;

  const handleSendMessage = async (e) => {

    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  const sendMessage = async (e) => {
    if (!e.trim().length) return;

    try {
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
          setMessage("");
          socket.emit("sendMessage", e , id , userId);
    } catch (error) {
        console.log(error);   
    }
  }


  return (
    <div className="chat-container">
      <div className="chat-input">
        <div className="icons">
          <FaSmile />
          <FaPaperclip />
        </div>
        <input
          type="text"
          className="text-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="send-icon" onClick={() => sendMessage(message)}>
          <FaTelegram />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
