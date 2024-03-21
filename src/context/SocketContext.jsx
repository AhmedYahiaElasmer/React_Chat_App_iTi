import { createContext } from "react";
import { connectionSocket } from "../utils/socketMethods";


const connection = connectionSocket();

export const SocketContext = createContext  ();