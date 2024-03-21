/* eslint-disable react-hooks/exhaustive-deps */
// import Message from "../component/messages/Message";
import { useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";
import useAuth from "../hooks/useAuth";
import { useConversation } from "../zustand/zustand";
import { useParams } from "react-router-dom";
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
  let { id } = useParams();
  // let { page } = useParams();
  // console.log(id);
  let fetchData;
  // let fetchaa = () => {
  //   // setPage(page + 1);
  //   console.log("fetchData fetchData");
  // };
  useEffect(() => {
    const abortCtrl = new AbortController();
    fetchData = async () => {
      try {
        const token = getAuthUser("token");
        // console.log(token);
        const header = {
          Authorization: `Bearer ${token}`,
        };

        const response = await requestApi(
          `/message/getAllMessages/${id}`,
          {
            method: "GET",
            headers: header,
            signal: abortCtrl.signal,
          }
        );


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
    if (!selectedConversation.some((chat) => chat.chat_ === id)) {
      fetchData();
    }

    return () => abortCtrl.abort();
  }, [id]);
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
