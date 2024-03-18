import Avatar from "../Avatar";

const Resever = () => {
  return (
    <div className="chat chat-start">
      <Avatar
        isMessage={true}
        initImage="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
      />

      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble">You were the Chosen One!</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default Resever;
