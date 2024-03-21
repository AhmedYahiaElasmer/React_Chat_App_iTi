/* eslint-disable react/prop-types */
import Avatar from "../Avatar";
const Sender = (props) => {
  const { content } = props.message;
  console.log("message", message);
  return (
    <div className="chat chat-end">
      <div className="chat-bubble">{content}</div>
      <time className="chat-footer text-xs opacity-50">12:46</time>

      {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
    </div>
  );
};

export default Sender;
