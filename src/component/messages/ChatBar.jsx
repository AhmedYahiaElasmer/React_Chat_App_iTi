import { BsSend } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
const ChatBar = () => {
  const [message, setMessage] = useState("");
  const { getAuthUser } = useAuth();
  const token = getAuthUser("token");



  const { requestApi } = useRequest();
  const handlerSendMessage= async(e)=>{
    if(!e.trim().length) return;
    console.log(e);

  //   const header = {
  //     Authorization: `Bearer ${token}`,
  //   };

  // const response = await  requestApi('/message/sendMessage',{
  //     method: "POST",
  //     headers: header,
  //     data:{
  //       content:e,
  //       chatId:""
  //     }
  //   })


  }
  return (
    <>
      <form className="px-4 my-3 ">
        <div className="w-full relative">
          <input
          onChange={(e) => setMessage(e.target.value)}
            type="text"
            className=" border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
            onClick={()=>handlerSendMessage(message)}
          >
            {/* {loading ? <div className='loading loading-spinner'></div> : <BsSend />} */}
            <BsSend />
          </button>
        </div>
      </form>
    </>
  );
};

export default ChatBar;
