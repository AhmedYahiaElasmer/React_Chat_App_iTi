import { useState, useEffect } from "react";
import {
  faEllipsisV,
  faPhone,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "../home/Drawer";
import "./message.css";
import Avatar from "../Avatar";
import { useConversation } from "../../zustand/zustand";
import { useParams } from "react-router-dom";
const ChatNavBar = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 1100);
  const { selectedConversation } = useConversation();
  let { id } = useParams();
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* {selectedConversation[
        selectedConversation.findIndex((chat) => chat.chat_ === id)
      ]?.messages[0].map((message) => ( */}
      <div
        // key={message.id}
        className="flex justify-between bgnav py-3 px-6 items-center nav"
      >
        <div className="flex justify-center items-center gap-5">
          <Avatar isMessage={true} initImage={""} />
          <div>username</div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div>
            <FontAwesomeIcon icon={faPhone} className="text-xl " />
          </div>
          <p>
            <FontAwesomeIcon icon={faUserPlus} className="text-xl " />
          </p>
          {isScreenSmall ? (
            <p>
              <Drawer className="z-3" />
            </p>
          ) : (
            <p>
              <FontAwesomeIcon icon={faEllipsisV} className="text-xl " />
            </p>
          )}
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export default ChatNavBar;
