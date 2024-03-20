/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import Avatar from "../Avatar";

const User = (props) => {
  const { user, isChat = false, initImage = user.image } = props;
  // console.log(user);
  return (
    <div className="chat chat-start">
      <Avatar isMessage={true} initImage={initImage} />
      <div className="chat-header">
        {isChat
          ? user?.name
          : `${user?.firstname} ${user.lastname ? user.lastname : ""}`}

        {isChat ? (
          <div className=" opacity-80 w-40 h-5 chat-footer  overflow-hidden truncate ">
            {user.latestMessage?.content}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default User;
