/* eslint-disable react/prop-types */
// import useAuth from "../../hooks/useAuth";
import Avatar from "../Avatar";

const Resever = (props) => {
  const { content, sender } = props.message;
  // const { getAuthUser } = useAuth();
  // const userData = getAuthUser("user");
  // console.log(userData);
  // console.log("message", message);

  return (
    <div className="chat chat-start">
      <Avatar isMessage={true} initImage={sender.image ? sender.image : ""} />
      {/* {console.log(props)} */}
      <div className="chat-header">
        {sender?.firstname}
        {"  "}
        {sender?.lastname}
      </div>
      <div className="chat-bubble">{content}</div>
      <time className="chat-footer text-xs opacity-50">12:45</time>

      {/* <div className="chat-footer opacity-50">Delivered</div> */}
    </div>
  );
};

export default Resever;
