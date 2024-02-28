import { GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionTypes";
import type { AuthActions, AuthState } from "./types";

const initialState: AuthState = {
  pending: false,
  profile: null,
  error: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile,
        pending: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default authReducer;
