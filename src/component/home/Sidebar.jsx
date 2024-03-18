import {
  faComment,
  faEllipsisV,
  faUserFriends,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import User from "../users/User";

const Sidebar = () => {
  return (
    <div className="bgside h-screen text-white  ">
      <div className="flex justify-between bgnav py-3 px-6 items-center ">
        <div className="flex justify-center items-center gap-5">
          <div>logo</div>
          <p>TYPING....</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <img
            className="rounded-full w-12"
            src="../../src/assets/images/user.avif"
            alt=""
          />
          <div>
            {" "}
            <FontAwesomeIcon icon={faEllipsisV} className="text-2xl " />
          </div>
        </div>
      </div>
      <div className="p-5">
        <label className="input input-bordered flex items-center  gap-2">
          <input
            type="text"
            className="grow bgsearch  bg-gray-700"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="grid grid-cols-2 w-full  items-center ">
        <div className="flex gap-3 col-span-1 line justify-center items-center py-3">
          <span>
            <FontAwesomeIcon icon={faUserFriends} className="text-xl " />
          </span>
          <p className="">Users</p>
        </div>
        <div className="flex gap-3 col-span-1 justify-center items-center py-3">
          <span>
            <FontAwesomeIcon icon={faComment} className="text-xl" />
          </span>
          <p>Chats</p>
        </div>
      </div>
      <div className="p-5 ">
        <h4 className="font-medium pb-4">All Users</h4>
        <div className="flex flex-col items-start overflow-auto gap-5">
          {/* put the custum component inside the dv */}
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
