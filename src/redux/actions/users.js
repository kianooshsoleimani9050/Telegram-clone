import { GET_USERS_DATA } from "../../constant/redux-types";

export const getUsersData = (payload) => {
  return {
    type: GET_USERS_DATA,
    payload,
  };
};
