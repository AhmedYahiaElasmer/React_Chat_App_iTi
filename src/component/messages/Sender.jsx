import Avatar from "../Avatar";

const Sender = () => {
  return (
    <div className="chat chat-end">
      <Avatar
        isMessage={true}
        initImage="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
      />

      <div className="chat-header">Anakin</div>
      <div className="chat-bubble">I hate you!</div>
      <time className="text-xs opacity-50">12:46</time>

      {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
    </div>
  );
};

export default Sender;
