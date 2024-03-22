import { Route, Routes } from "react-router-dom";
// import Button from "../component/Button";
// import UserChat from "./UserChat";
// import ChatRoom from "./ChatRoom";
import ProfileDetails from "./ProfileDetails";
import EditDetails from "./EditDetails";
// import useLogout from "../hooks/useLogout";
import { Navigate } from "react-router-dom/dist";
import Auth from "./auth";
import { socket_, SocketContext } from "../context/SocketContext";
import HeroPage from "./Hero";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
function Home() {
  const { authUser } = useAuthContext();
  // const {loading,logout}=useLogout()
  return (
    <>
      {/* <button onClick={logout}>logout</button> */}
      <SocketContext.Provider value={socket_}>
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="/profiledetails" element={<ProfileDetails />} />
          <Route path="/editprofile" element={<EditDetails />} />
        </Routes>
      </SocketContext.Provider>
    </>
  );
}

export default Home;
