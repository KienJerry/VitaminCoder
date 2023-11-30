// import type { ReqLogin, ReqLoginSocial } from "@/interfaces/auth.interface";

import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./actionTypes";
import type {
  GetUserFail,
  GetUserFailPayload,
  GetUserSuccess,
  GetUserSuccessPayload,
} from "./types";

export const getTest = (data: any): any => ({
  type: GET_USER_REQUEST,
  action: data,
});

export const getUserSuccess = (
  payload: GetUserSuccessPayload,
): GetUserSuccess => {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
};

export const getUserFail = (payload: GetUserFailPayload): GetUserFail => {
  return {
    type: GET_USER_FAIL,
    payload,
  };
};
