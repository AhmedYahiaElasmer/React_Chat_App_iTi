import { io } from "socket.io-client";
import { API } from "../constant/Constants";

export const socket = ()=>{
    console.log("ggg");
    const socket = io("http://localhost:5000");
    return socket;
};