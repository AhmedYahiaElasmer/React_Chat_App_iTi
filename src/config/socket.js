import { io } from "socket.io-client";
// import { API } from "../constant/Constants";

export const socket = () => {
  console.log("socket");
  const socket = io("https://chat-app-backend-x0hh.onrender.com/");
  return socket;
};
