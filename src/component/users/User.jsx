/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import useAuth from "../../hooks/useAuth";
import Avatar from "../Avatar";

const User = (props) => {
  const { user, isChat = false, initImage = user.image } = props;
  const { getAuthUser } = useAuth();
  const { _id } = JSON.parse(getAuthUser("user"));
  // console.log(_id);
  // console.log(user);
  return (
    <div className="chat chat-start">
      {isChat ? (
        user.members.length > 2 ? (
          "group"
        ) : (
          user.members.map((member) =>
            member._id == _id ? null : (
              <>
                <Avatar
                  isMessage={true}
                  initImage={isChat ? member.image : initImage}
                />
              </>
            )
          )
        )
      ) : (
        <Avatar isMessage={true} initImage={initImage} />
      )}

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
