import { Route, Routes } from "react-router-dom";
import Sidebar from "../component/home/Sidebar";
import MsgsContainer from "../component/home/MsgsContainer";
import UserChat from "./UserChat";
import ChatRoom from "./ChatRoom";

const Auth = () => {
  return (
    <div className="grid grid-cols-9  ">
      <div className="col-span-2  ">
        <Sidebar />
      </div>
      <div className="col-span-7 ">
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
