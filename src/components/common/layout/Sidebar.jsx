import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "../../../hooks/useFetchData";
import { getUsersData } from "../../../redux/actions/users";
import ChatList from "../../pages/chats/ChatList";
import Loading from "../web/Loading";
import { FaChevronRight, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getChatsState } from "../../../redux/actions/chats";
import { getUserProfile } from "../../../redux/actions/userProfile";
const Sidebar = () => {
  const usersData = useSelector((state) => state.usersData);
  const userProfile = useSelector((state) => state.userProfile);
  const dispach = useDispatch();
  const { loading, mutate } = useFetchData({
    path: "https://61f3e09510f0f7001768c6e6.mockapi.io/api/v1/users",
    isDataExist: usersData?.length !== 0,
    onSuccess: (data) => {
      dispach(getUsersData(data));
    },
  });
  const { loading: loadingUserProfile } = useFetchData({
    path: "https://61f3e09510f0f7001768c6e6.mockapi.io/api/v1/user-profile",
    isDataExist: userProfile?.length !== 0,
    onSuccess: (data) => {
      dispach(getUserProfile(data[0]));
    },
  });
  const handleRefresh = () => mutate();
  const handleOpenChats = () => dispach(getChatsState(true));
  return (
    <div className="p-0 m-0 w-100 h-100 sidebar_div__container">
      <div className="p-0 m-0 d-flex align-items-center justify-content-between">
        <div className="p-2 m-0 d-flex flex-column sidebar_h3__container">
          <h3 className="p-0 m-0">Telegram Clone</h3>
          <small
            onClick={handleRefresh}
            className="p-0 m-0 sidebar_small__container"
          >
            <FaRedo className="mx-1" />
            Refresh
          </small>
        </div>
        <Link
          to="/profile"
          className="px-2 text-white d-flex align-items-center"
          onClick={handleOpenChats}
        >
          <img
            src={userProfile?.avatar}
            alt=""
            className="sidebar_profile_img__container"
          />
          <FaChevronRight size={20} className="mx-1 text-white" />
        </Link>
      </div>

      {loading || loadingUserProfile ? <Loading /> : <ChatList />}
    </div>
  );
};

export default memo(Sidebar);
