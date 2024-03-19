import { useEffect, useState } from "react";
import User from "../users/User";
import { Link } from "react-router-dom";
import axios from "axios";
import useAllUsers from "../../zustand/UseConversation";
const AllUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setusers] = useState([]);
  const { allUsers, setAllUsers } = useAllUsers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const header = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
          "https://chat-app-backend-x0hh.onrender.com/api/v1/user",
          { headers: header }
        );
        const usersData = response.data.users;
        setAllUsers(usersData);

        setusers(usersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setAllUsers]);

  return (
    <>
      <div className="p-5 ">
        {console.log(allUsers)}
        <h4 className="font-medium pb-4">All Users</h4>
        <div className="flex flex-col overflow-y-scroll h-screen items-start overflow-auto gap-5">
          {users.map((user) => (
            <Link key={user._id} to={`/home/userchat/${user._id}`}>
              <User user={user} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllUsers;
