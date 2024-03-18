import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      if (sessionStorage.getItem("token")) {
        sessionStorage.removeItem("token");
      }
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;