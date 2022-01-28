import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getChatsState } from "../../../redux/actions/chats";
import { handleDate } from "../../../utils/common/handle-dates";

const ChatListItem = ({
  avatar,
  fullName,
  shortLastChat,
  date,
  userId,
  className = "",
}) => {
  const { pathname } = useLocation();
  const dispach = useDispatch();
  const handleOpenChats = () => dispach(getChatsState(true));
  const active = pathname === `/chats/${userId}`;
  return (
    <Link
      to={`/chats/${userId}`}
      className={`p-0 px-2 m-0 mb-2 d-flex align-items-center chatitem_a__container ${
        active && "chatitem_a_active__container"
      } ${className}`}
      onClick={() => window.innerWidth < 767 && handleOpenChats()}
    >
      <img src={avatar} alt="/" className="chatitem_img__container" />
      <div className="p-0 px-2 m-0 h-100 chatitem_content_div__container">
        <div className="p-0 m-0 d-flex align-items-center justify-content-between">
          <span>{fullName}</span>
          <span>{handleDate(date)}</span>
        </div>
        <div className="p-0 m-0 my-1 chatitem_content_lastchat_div__container">
          {shortLastChat}
        </div>
      </div>
    </Link>
  );
};

export default ChatListItem;
