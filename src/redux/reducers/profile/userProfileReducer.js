import { GET_USER_PROFILE } from "../../../constant/redux-types";

const INITIAL_VALUE = [];
export const userProfileReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
