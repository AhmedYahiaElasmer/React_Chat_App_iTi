import React from "react";

export default function useAuth() {
  // console.log("GG");
  const setAuthUser_ = (data, rememberMe , name) =>{
    // console.log("setAuthUser_");
    if(rememberMe) localStorage.setItem(name, data)
    else
    sessionStorage.setItem(name, data);
     
  }

  const getAuthUser = (name) =>
    localStorage.getItem(name) || sessionStorage.getItem(name);

  const removeAuthUser = () =>
  {
   
    if(localStorage.getItem("token")){
      // localStorage.removeItem("token")
      // localStorage.removeItem("user")
      localStorage.clear();
    }else{
      // sessionStorage.removeItem("token");
      // sessionStorage.removeItem("user");
      sessionStorage.clear();
    }
  }


  return { setAuthUser_, getAuthUser, removeAuthUser };
}
