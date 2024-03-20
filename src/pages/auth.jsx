import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Sidebar from "../component/home/Sidebar";
import MsgsContainer from "../component/home/MsgsContainer";
import UserChat from "./UserChat";
import ChatRoom from "./ChatRoom";
import Drawer from '../component/home/Drawer'
import './auth.css'

const Auth = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="grid grid-cols-9">
      {isScreenSmall ? null : (
        <div className="col-span-2">
          <Sidebar />
        </div>
      )}
      <div className={isScreenSmall ? "col-span-9" : "col-span-7"}>
        <Routes>
          <Route path="/*" element={<MsgsContainer />}>
            <Route path="userchat/:id" element={<UserChat />} />
            <Route path="chatroom" element={<ChatRoom />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
