import Avatar from "../Avatar";

const User = (props) => {
  const { userName, lastMassge } = props;
  return (
    <div className="chat chat-start">
      <Avatar
        isMessage={true}
        initImage="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
      />
      <div className="chat-header">
        Obi-Wan Kenobi
        <div className=" opacity-80 w-40 h-5 chat-footer  overflow-hidden truncate ">
          last Massage Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Autem at eum impedit quam, modi neque. Porro quae quos sit vero error
          at dolorum eligendi? Laboriosam illo harum eius officiis mollitia.
        </div>
      </div>
    </div>
  );
};

export default User;
