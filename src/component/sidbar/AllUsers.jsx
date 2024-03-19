import { useEffect, useState } from "react";
import User from "../users/User";
import { Link } from "react-router-dom";
import axios from "axios";
import useAllUsers from "../../zustand/UseConversation";
import useRequest from "../../hooks/useRequest";
const AllUsers = () => {
  
  const { allUsers, setAllUsers } = useAllUsers();
  const {data_ , loading_ , error , requestApi} = useRequest()

  useEffect(() => {
    const abortCtrl = new AbortController();
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const header = {
          Authorization: `Bearer ${token}`,
        };

        const response = await requestApi("/user",{
          method:"GET",
          headers:header,
          signal: abortCtrl.signal
        })

        if(!response?.users) return;

        const usersData = response.users;
        setAllUsers(usersData);



      } catch (error) {
        console.error("Error fetching users:", error);

      }
    };

    
    fetchData();
    return () => abortCtrl.abort();
  }, [setAllUsers]);

  return (
    <>
    {
      
      loading_ ? <div>Loading...</div> : 
      <div className="p-5 ">
      {/* {
        console.log({data_})
      } */}
      {/* {console.log(allUsers)} */}
      <h4 className="font-medium pb-4">All Users</h4>
      <div className="flex flex-col overflow-y-scroll h-screen items-start overflow-auto gap-5">
        {allUsers.map((user) => (
          <Link key={user._id} to={`/home/userchat/${user._id}`}>
            <User user={user} />
          </Link>
        ))}
      </div>
    </div>
    }
    </>


    
  );
};

export default AllUsers;
