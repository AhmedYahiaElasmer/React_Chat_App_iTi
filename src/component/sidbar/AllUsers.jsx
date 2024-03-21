/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import User from "../users/User";
import { Link } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { useChats, useAllUsers } from "../../zustand/zustand";

const AllUsers = (props) => {
  const { isChat } = props;
  const { allUsers } = useAllUsers();
  const { allChats } = useChats();
  const { loading_ } = useRequest();
  // console.log(allChats);
  return (
    <>
      {loading_ ? (
        <div>Loading...</div>
      ) : (
        <div className="p-5 w-full col-span-2">
          {/* {
        console.log({data_})
      } */}
          {/* {console.log(allUsers)} */}
          <h4 className="font-medium pb-4">All Users</h4>
          <div className="flex flex-col scrollbar style={{ height: '200px' }} h-screen items-start overflow-auto gap-5">
            {isChat ? (
              <>
                {allChats?.map((chat) => (
                  <Link key={chat._id} to={`/home/userchat/?id=${chat._id}`}>
                    <User user={chat} isChat={isChat} />
                  </Link>
                ))}
              </>
            ) : (
              <>
                {allUsers.map((user) => (
                  <Link key={user._id} to={`/home/userchat/?user_=${user._id}`}>
                    <User user={user} isChat={isChat} />
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AllUsers;
