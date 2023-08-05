import { all, put, takeLatest } from "redux-saga/effects";

import { RES_MESS } from "@/common/API/response.config";
import type { ResGetUserProfile } from "@/interfaces/auth.interface";

// import LearnersService from "@/services/LearnersService";
import { getUserFail, getUserSuccess } from "./actions";
import { GET_USER_REQUEST } from "./actionTypes";

function* getUserSaga(): any {
  try {
    // const response = yield LearnersService.getProfile();
    const response = {
      data: {
        data: {
          id: "string",
          photoUrl: "string",
          name: "string",
          typeAccount: 1,
          email: "string",
          activedDate: "string",
          startedDate: "string",
          expiredDate: "string",
          totalDays: 1,
          numberOfDayConsecutive: 1,
          totalVocabulary: 1,
          isSetAudio: true,
          isActive: true,
          subscriptionName: "string",
        },
        message: "SUCCESSFULL",
        statusCode: 200,
        success: true,
      },
    };
    const result: ResGetUserProfile = response.data;
    if (result.message === RES_MESS.SUCCESSFULL) {
      yield put(
        getUserSuccess({
          profile: result.data,
        }),
      );
    }
  } catch (e) {
    yield put(
      getUserFail({
        error: e.message,
      }),
    );
  }
}

export default function* authSaga() {
  yield all([takeLatest(GET_USER_REQUEST, getUserSaga)]);
}
