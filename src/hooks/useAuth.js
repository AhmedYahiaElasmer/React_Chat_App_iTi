import React from 'react'

export default function useAuth() {
    const setAuthUser=(data , rememberMe)=>(rememberMe && localStorage.setItem("token", data)) || sessionStorage.setItem("token",data);

    const getAuthUser=()=>localStorage.getItem("token") || sessionStorage.getItem("token");

    
    const removeAuthUser=()=>(localStorage.getItem("token")&&localStorage.removeItem("token")) || sessionStorage.removeItem("token");

    return{setAuthUser , getAuthUser , removeAuthUser}
}
