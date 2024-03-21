import { BsSend } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
const ChatBar = () => {
  const { removeAuthUser } = useAuth();
  return (
    <>
      <form className="px-4 my-3 ">
        <div className="w-full relative">
          <input
            type="text"
            className=" border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
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
