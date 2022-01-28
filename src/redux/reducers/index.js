import { combineReducers } from "redux";
import { chatsReducer } from "./chats/chatsReducer";
import { userProfileReducer } from "./profile/userProfileReducer";
import { userReducer } from "./users/userReducer";
export const rootReducer = combineReducers({
  showChats: chatsReducer,
  usersData: userReducer,
  userProfile: userProfileReducer,
});
