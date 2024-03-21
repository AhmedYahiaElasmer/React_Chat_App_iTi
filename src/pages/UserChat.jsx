/* eslint-disable react-hooks/exhaustive-deps */
// import Message from "../component/messages/Message";
import { useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";
import useAuth from "../hooks/useAuth";
import { useChats, useConversation } from "../zustand/zustand";
import { useParams, useSearchParams } from "react-router-dom";
import Sender from "../component/messages/Sender";
import Resever from "../component/messages/Resever";
import InfiniteScroll from "react-infinite-scroll-component";

function UserChat() {
  const { requestApi } = useRequest();
  const { getAuthUser } = useAuth();
  const [page, setPage] = useState(0);
  const user = JSON.parse(getAuthUser("user"));
  const {
    // messages,
    // setMessages,
    selectedConversation,
    setSelectedConversation,
  } = useConversation();

  const { setAllChats, allChats } = useChats();
  // let { id ,user_ } = useParams();
  
  // console.log(id);
  const [searchParams, setSearchParams] = useSearchParams();


  const id = searchParams.get("id");
  const user_ = searchParams.get("user_");
  
  // console.log(user_);
  // let { page } = useParams();
  // console.log(id);

  // let fetchaa = () => {
  //   // setPage(page + 1);
  //   console.log("fetchData fetchData");
  // };

  useEffect(() => {
    const abortCtrl = new AbortController();
    const token = getAuthUser("token");
        // console.log(token);
        const header = {
          Authorization: `Bearer ${token}`,
        };

    const fetchUser=async()=>{
      const response = await requestApi(
        `/chat/privateChat/${user_}`,
        {
            method: "POST",
            headers: header,
            signal: abortCtrl.signal,
        }
      )
      console.log(response);
      setSearchParams({id:response?.chat._id});
      if(response?.chat){
        if(!allChats.some((chat) => chat._id === response?.chat._id)){
          setAllChats([...allChats,response.chat]);
        }
      }
    }



    const fetchData = async () => {
      try {
        const response = await requestApi(
          `/message/getAllMessages/${id}`,
          {
            method: "GET",
            headers: header,
            signal: abortCtrl.signal,
          }
        );

        // console.log(response);
        if (!response) return;
        const chatData = response.allMessages;
        setSelectedConversation([
          ...selectedConversation,
          {
            chat_: id,
            page_: 0,
            messages: [chatData],
          },
        ]);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };


    if (!selectedConversation.some((chat) => chat.chat_ === id) &&id) {
      fetchData();
    }

    if(user_){
      // console.log("user_:",user_);
      fetchUser()

    }

    return () => abortCtrl.abort();
  }, [id, user_]);
  // console.log("selectedConversation", selectedConversation);
  return (
    <>
      {/* <InfiniteScroll
        dataLength={10}
        next={fetchaa}
        hasMore={true}
        loader={<h4 className="text-red-600">Loading...</h4>}
      > */}
      {/* {console.log(fetchData)} */}
      <div className="flex flex-col ">
        {selectedConversation[
          selectedConversation.findIndex((chat) => chat.chat_ === id)
        ]?.messages[0].map((message) => (
          <div key={message?._id} className="">
            {user._id === message?.sender?._id ? (
              <Sender message={message} />
            ) : (
              <Resever message={message} />
            )}
          </div>
        ))}
      </div>
      {/* </InfiniteScroll> */}
      {/* {console.log(user._id === message.sender._id)} */}
    </>
  );
}

export default UserChat;
