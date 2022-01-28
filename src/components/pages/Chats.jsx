import { useEffect, useRef } from "react";
import { FaChevronLeft, FaTelegramPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { getChatsState } from "../../redux/actions/chats";
import Loading from "../common/web/Loading";
import ChatListItem from "./chats/ChatListItem";
const Chats = () => {
  const dispach = useDispatch();
  const { userId } = useParams();
  const inputRef = useRef();
  const { result, loading } = useFetchData({
    path: `https://61f3e09510f0f7001768c6e6.mockapi.io/api/v1/users/${userId}`,
    fetchDependecy: userId,
  });
  const handleOpenChats = () => dispach(getChatsState(false));
  useEffect(() => {
    inputRef.current.focus();
  }, [userId]);
  return (
    <div className="p-0 m-0 h-100 d-flex flex-column">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="p-0 m-0">
            <div className="p-1 m-0 d-md-none" onClick={handleOpenChats}>
              <FaChevronLeft size={24} className="text-white" />
            </div>
            <ChatListItem
              avatar={result?.avatar}
              fullName={result?.name}
              userId={result?.id}
            />
          </div>
          <div className="p-0 m-0 h-100 chats_content_div__container d-flex align-items-center justify-content-center">
            <p className="p-0 m-0 text-white">There is no chat...</p>
          </div>
        </>
      )}
      <div className="p-0 px-4 m-0 w-100 chats_input_div__container d-flex align-items-center">
        <input
          ref={inputRef}
          type="text"
          name="chat_input"
          id="chat_input"
          placeholder="Write your message..."
          className="p-0 py-3 m-0 w-100"
        />
        <FaTelegramPlane size={24} className="" />
      </div>
    </div>
  );
};

export default Chats;
