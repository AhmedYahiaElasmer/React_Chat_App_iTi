import { io } from "socket.io-client";
// import { API } from "../constant/Constants";

export const socket = () => {
  console.log("socket");
  const socket = io("http://localhost:5000");
  return socket;
};
