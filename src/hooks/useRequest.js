import React, { useEffect, useState } from 'react'
import { instance } from '../api/api'

export default function useRequest() {
    const [data_ , setData] = useState();
    const[loading_,setLoading] = useState(false);
    const[error,setError] = useState();

    const requestApi =async(url , options)=>{
        let response;
        
        setLoading(true);
        try {
            response = (await instance(url,options)).data
            console.log("req");
            setData(response);
        } catch (error) {
            // console.log("GG");
            setError(error);
        }
        setLoading(false);
        return response;


    }

    return {data_ , loading_ , error ,requestApi}
}

