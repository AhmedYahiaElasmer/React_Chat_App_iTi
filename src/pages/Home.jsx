import { Route, Routes } from "react-router-dom";
import Button from "../component/Button";
import UserChat from "./UserChat";
import ChatRoom from "./ChatRoom";
import ProfileDetails from "./ProfileDetails";
import EditDetails from "./EditDetails";

function Home() {
  return (
    <>
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
