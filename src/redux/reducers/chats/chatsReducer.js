import { SHOW_CHATS } from "../../../constant/redux-types";

const INITIAL_VALUE = false;
export const chatsReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case SHOW_CHATS:
      return action.payload;
    default:
      return state;
  }
};
