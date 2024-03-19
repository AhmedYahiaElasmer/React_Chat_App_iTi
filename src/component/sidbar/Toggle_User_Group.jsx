/* eslint-disable react/jsx-no-undef */
import { faComment, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Toggle_User_Group = () => {
  return (
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
  );
};

export default Toggle_User_Group;
