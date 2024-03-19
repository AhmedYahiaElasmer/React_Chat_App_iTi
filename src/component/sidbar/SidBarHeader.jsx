import WhiteLogo from "../logo/WhiteLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const SidBarHeader = () => {
  return (
    <div className="flex justify-between bgnav py-3 px-6 items-center ">
      <div className="flex justify-center items-center gap-5">
        <WhiteLogo w="50" h="50" />

        <p>TYPING....</p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <img
          className="rounded-full w-12"
          src="../../src/assets/images/user.avif"
          alt=""
        />
        <div>
          <FontAwesomeIcon icon={faEllipsisV} className="text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default SidBarHeader;
