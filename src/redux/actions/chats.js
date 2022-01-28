import { SHOW_CHATS } from "../../constant/redux-types";

export const getChatsState = (payload) => {
  return {
    type: SHOW_CHATS,
    payload,
  };
};
