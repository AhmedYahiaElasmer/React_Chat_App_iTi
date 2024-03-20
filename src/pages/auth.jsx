import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../component/home/Sidebar";
import MsgsContainer from "../component/home/MsgsContainer";
import UserChat from "./UserChat";
import ChatRoom from "./ChatRoom";
import { useAllUsers, useChats } from "../zustand/zustand";
import useRequest from "../hooks/useRequest";
import useAuth from "../hooks/useAuth";
import Drawer from "../component/home/Drawer";
import "./auth.css";

const Auth = () => {
  const { setAllUsers } = useAllUsers();
  const { setAllChats, allChats } = useChats();
  const { requestApi } = useRequest();
  const { getAuthUser } = useAuth();
  useEffect(() => {
    const abortCtrl = new AbortController();
    const fetchData = async () => {
      try {
        const token = getAuthUser();
        const header = {
          Authorization: `Bearer ${token}`,
        };

        const responseUser = await requestApi("/user", {
          method: "GET",
          headers: header,
          signal: abortCtrl.signal,
        });

        if (!responseUser?.users) return;

        const usersData = responseUser.users;
        setAllUsers(usersData);
        //////////////////////////////////////////////////////
        const responseChat = await requestApi(`/chat`, {
          method: "GET",
          headers: header,
          signal: abortCtrl.signal,
        });
        // console.log("responseChat", responseChat);
        setAllChats(responseChat.chat);
        /////////////////////////////////////////////////////
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
    return () => abortCtrl.abort();
  }, []);

  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
