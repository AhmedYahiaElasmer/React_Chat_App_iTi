import { useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (email, password, rememberMe) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://chat-app-backend-x0hh.onrender.com/api/v1/auth/login",
        { email, password }
      );

      const data = JSON.stringify(response.data);
      if (data.error) {
        throw new Error(data.error);
      } else {
        if (rememberMe) {
          localStorage.setItem("token", JSON.parse(data).token);
        } else {
          // console.log(data);
          // console.log(JSON.parse(data).token);

          sessionStorage.setItem("token", `${response.data.token}`);
        }

        setAuthUser(data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
