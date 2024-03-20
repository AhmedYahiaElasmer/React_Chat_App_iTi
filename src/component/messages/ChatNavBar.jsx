import React, { useState, useEffect } from 'react';
import {
  faEllipsisV,
  faPhone,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from '../home/Drawer'; 
import './message.css'

const ChatNavBar = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between bgnav py-3 px-6 items-center nav">
      <div className="flex justify-center items-center gap-5">
        <img
          className="rounded-full w-12"
          src="../../src/assets/images/user.avif"
          alt=""
        />
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
            <Drawer className="z-3"/>
          </p>
        ) : (
          <p>
            <FontAwesomeIcon icon={faEllipsisV} className="text-xl " />
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatNavBar;
