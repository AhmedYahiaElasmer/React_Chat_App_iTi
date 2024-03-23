import React, { useState } from "react";
import { faComment, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllUsers from "../sidbar/AllUsers";
// import UsersComponent from "./UsersComponent";
// import ChatsComponent from "./ChatsComponent";

const Toggle_User_Group = ({ users }) => {
  const [selectedTab, setSelectedTab] = useState("users");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="grid grid-cols-2 w-full items-center ">
      <div
        className={`flex gap-3 col-span-1 line justify-center items-center py-3 cursor-pointer ${
          selectedTab === "users" ? "text-white-500" : "text-white-100"
        }`}
        onClick={() => handleTabClick("users")}
        style={{
          borderBottom: selectedTab === "users" ? "2px solid white" : "none",
          fontWeight: selectedTab === "users" ? "600" : "100",
        }}
      >
        <span>
          <FontAwesomeIcon icon={faUserFriends} className="text-xl" />
        </span>
        <p className="">Users</p>
      </div>
      <div
        className={`flex gap-3 col-span-1 justify-center items-center py-3 cursor-pointer ${
          selectedTab === "chats" ? "text-white-500" : ""
        }`}
        onClick={() => handleTabClick("chats")}
        style={{
          borderBottom: selectedTab === "chats" ? "2px solid white" : "none",
          fontWeight: selectedTab === "chats" ? "600" : "100",
        }}
      >
        <span>
          <FontAwesomeIcon icon={faComment} className="text-xl" />
        </span>
        <p>Chats</p>
      </div>
      {selectedTab === "users" ? (
        <AllUsers isChat={false}  users = {users}/>
      ) : (
        <AllUsers isChat={true} />
      )}
    </div>
  );
};

export default Toggle_User_Group;
