import { GET_USER_PROFILE } from "../../constant/redux-types";

export const getUserProfile = (payload) => {
  return {
    type: GET_USER_PROFILE,
    payload,
  };
};
