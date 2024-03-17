import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post("https://chat-app-backend-x0hh.onrender.com/api/v1/auth/login", { email, password });
      const data = JSON.stringify(response.data);
      if (data.error) {
        throw new Error(data.error);
        
      }
      Cookies.set("token", data);
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;


