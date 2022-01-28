import { memo } from "react";
import { useSelector } from "react-redux";
import ChatListItem from "./ChatListItem";
const ChatList = () => {
  const usersData = useSelector((state) => state.usersData);
  return (
    <div className="p-0 m-0 w-100">
      {usersData?.map((user) => (
        <ChatListItem
          key={`chatListItem${user?.id}`}
          avatar={user?.avatar}
          fullName={user?.name}
          shortLastChat="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat fuga perspiciatis aperiam odit aspernatur iure id cum cupiditate cumque tenetur sit impedit eum nobis est, neque expedita debitis placeat."
          date={user?.date}
          userId={user?.id}
        />
      ))}
    </div>
  );
};

export default memo(ChatList);
