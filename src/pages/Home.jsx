import { Route, Routes } from "react-router-dom";
import Button from "../component/Button";
import UserChat from "./UserChat";
import ChatRoom from "./ChatRoom";
import ProfileDetails from "./ProfileDetails";
import EditDetails from "./EditDetails";
import useLogout from "../hooks/useLogout";

function Home() {
  const {loading,logout}=useLogout()
  return (
    <>
    <button onClick={logout}>logout</button>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/userchat" element={<UserChat />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/profiledetails" element={<ProfileDetails />} />
        <Route path="/editprofile" element={<EditDetails />} />
      </Routes>
    </>
  );
}

export default Home;
