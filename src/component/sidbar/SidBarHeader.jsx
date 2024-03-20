import WhiteLogo from "../logo/WhiteLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import useLogout from "../../hooks/useLogout";
import Avatar from "../Avatar";
import useAuth from "../../hooks/useAuth";
const SidBarHeader = () => {
  const { loading, logout } = useLogout();
  const { getAuthUser } = useAuth();
  const { image } = JSON.parse(getAuthUser("user"));

  // console.log(image);
  return (
    <div className="flex justify-between bgnav py-3 px-6 items-center ">
      <div className="flex justify-center items-center gap-5">
        <WhiteLogo w="50" h="50" />

        <p>TYPING....</p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Avatar isMessage={true} initImage={image} />
        <div>
          <div className="dropdown dropdown-bottom dropdown-end ">
            <div tabIndex={0} role="button">
              <FontAwesomeIcon icon={faEllipsisV} className="text-2xl " />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box sm:w-24 md:w-40 lg:w-52 flex justify-center "
            >
              <li>
                <a onClick={logout} className="text-black flex justify-around ">
                  <p className="text-lg font-medium">Logout</p>{" "}
                  <FontAwesomeIcon icon={faSignOutAlt} className="text-lg " />
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default SidBarHeader;
