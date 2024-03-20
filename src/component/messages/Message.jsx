import Resever from "./Resever";
import Sender from "./Sender";
import useRequest from "../../hooks/useRequest";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
const Message = () => {
  const { requestApi } = useRequest();
  const { getAuthUser } = useAuth();
  useEffect(() => {
    const abortCtrl = new AbortController();
    const fetchData = async () => {
      try {
        const token = getAuthUser();
        const header = {
          Authorization: `Bearer ${token}`,
        };

        const response = await requestApi(
          `/message?chat_=65f881050eed46dfed8cce57&page_=0`,
          {
            method: "GET",
            headers: header,
            signal: abortCtrl.signal,
          }
        );

        if (!response) return;

        const chatData = response;
        console.log(chatData);
        console.log(chatData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
    return () => abortCtrl.abort();
  }, []);

  return (
    <>
      <Resever />
      <Sender />
    </>
  );
};

export default Message;
