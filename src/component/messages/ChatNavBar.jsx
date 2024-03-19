import {
  faEllipsisV,
  faPhone,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ChatNavBar = () => {
  return (
    <div className="flex justify-between bgnav py-3 px-6 items-center ">
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
        <p>
          <FontAwesomeIcon icon={faEllipsisV} className="text-xl " />
        </p>
      </div>
    </div>
  );
};

export default ChatNavBar;
